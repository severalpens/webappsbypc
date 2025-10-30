/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getConsentGiven } from "./graphql/queries";
import { updateConsentGiven } from "./graphql/mutations";
const client = generateClient();
export default function ConsentGivenUpdateForm(props) {
  const {
    id: idProp,
    consentGiven: consentGivenModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    IsGiven: false,
  };
  const [IsGiven, setIsGiven] = React.useState(initialValues.IsGiven);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = consentGivenRecord
      ? { ...initialValues, ...consentGivenRecord }
      : initialValues;
    setIsGiven(cleanValues.IsGiven);
    setErrors({});
  };
  const [consentGivenRecord, setConsentGivenRecord] = React.useState(
    consentGivenModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getConsentGiven.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getConsentGiven
        : consentGivenModelProp;
      setConsentGivenRecord(record);
    };
    queryData();
  }, [idProp, consentGivenModelProp]);
  React.useEffect(resetStateValues, [consentGivenRecord]);
  const validations = {
    IsGiven: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          IsGiven: IsGiven ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateConsentGiven.replaceAll("__typename", ""),
            variables: {
              input: {
                id: consentGivenRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConsentGivenUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Is given"
        defaultChecked={false}
        isDisabled={false}
        isChecked={IsGiven}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              IsGiven: value,
            };
            const result = onChange(modelFields);
            value = result?.IsGiven ?? value;
          }
          if (errors.IsGiven?.hasError) {
            runValidationTasks("IsGiven", value);
          }
          setIsGiven(value);
        }}
        onBlur={() => runValidationTasks("IsGiven", IsGiven)}
        errorMessage={errors.IsGiven?.errorMessage}
        hasError={errors.IsGiven?.hasError}
        {...getOverrideProps(overrides, "IsGiven")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || consentGivenModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || consentGivenModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
