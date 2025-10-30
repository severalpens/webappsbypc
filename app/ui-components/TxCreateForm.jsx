/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTx } from "./graphql/mutations";
const client = generateClient();
export default function TxCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TxDate: "",
    TxDateTime: "",
    TxDateDate: "",
    TxAmount: "",
    TxType: "",
    TxCategory: "",
    TxDescription: "",
  };
  const [TxDate, setTxDate] = React.useState(initialValues.TxDate);
  const [TxDateTime, setTxDateTime] = React.useState(initialValues.TxDateTime);
  const [TxDateDate, setTxDateDate] = React.useState(initialValues.TxDateDate);
  const [TxAmount, setTxAmount] = React.useState(initialValues.TxAmount);
  const [TxType, setTxType] = React.useState(initialValues.TxType);
  const [TxCategory, setTxCategory] = React.useState(initialValues.TxCategory);
  const [TxDescription, setTxDescription] = React.useState(
    initialValues.TxDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTxDate(initialValues.TxDate);
    setTxDateTime(initialValues.TxDateTime);
    setTxDateDate(initialValues.TxDateDate);
    setTxAmount(initialValues.TxAmount);
    setTxType(initialValues.TxType);
    setTxCategory(initialValues.TxCategory);
    setTxDescription(initialValues.TxDescription);
    setErrors({});
  };
  const validations = {
    TxDate: [],
    TxDateTime: [],
    TxDateDate: [],
    TxAmount: [],
    TxType: [],
    TxCategory: [],
    TxDescription: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          TxDate,
          TxDateTime,
          TxDateDate,
          TxAmount,
          TxType,
          TxCategory,
          TxDescription,
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
            query: createTx.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TxCreateForm")}
      {...rest}
    >
      <TextField
        label="Tx date"
        isRequired={false}
        isReadOnly={false}
        value={TxDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TxDate: value,
              TxDateTime,
              TxDateDate,
              TxAmount,
              TxType,
              TxCategory,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxDate ?? value;
          }
          if (errors.TxDate?.hasError) {
            runValidationTasks("TxDate", value);
          }
          setTxDate(value);
        }}
        onBlur={() => runValidationTasks("TxDate", TxDate)}
        errorMessage={errors.TxDate?.errorMessage}
        hasError={errors.TxDate?.hasError}
        {...getOverrideProps(overrides, "TxDate")}
      ></TextField>
      <TextField
        label="Tx date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={TxDateTime && convertToLocal(new Date(TxDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime: value,
              TxDateDate,
              TxAmount,
              TxType,
              TxCategory,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxDateTime ?? value;
          }
          if (errors.TxDateTime?.hasError) {
            runValidationTasks("TxDateTime", value);
          }
          setTxDateTime(value);
        }}
        onBlur={() => runValidationTasks("TxDateTime", TxDateTime)}
        errorMessage={errors.TxDateTime?.errorMessage}
        hasError={errors.TxDateTime?.hasError}
        {...getOverrideProps(overrides, "TxDateTime")}
      ></TextField>
      <TextField
        label="Tx date date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={TxDateDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime,
              TxDateDate: value,
              TxAmount,
              TxType,
              TxCategory,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxDateDate ?? value;
          }
          if (errors.TxDateDate?.hasError) {
            runValidationTasks("TxDateDate", value);
          }
          setTxDateDate(value);
        }}
        onBlur={() => runValidationTasks("TxDateDate", TxDateDate)}
        errorMessage={errors.TxDateDate?.errorMessage}
        hasError={errors.TxDateDate?.hasError}
        {...getOverrideProps(overrides, "TxDateDate")}
      ></TextField>
      <TextField
        label="Tx amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TxAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime,
              TxDateDate,
              TxAmount: value,
              TxType,
              TxCategory,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxAmount ?? value;
          }
          if (errors.TxAmount?.hasError) {
            runValidationTasks("TxAmount", value);
          }
          setTxAmount(value);
        }}
        onBlur={() => runValidationTasks("TxAmount", TxAmount)}
        errorMessage={errors.TxAmount?.errorMessage}
        hasError={errors.TxAmount?.hasError}
        {...getOverrideProps(overrides, "TxAmount")}
      ></TextField>
      <TextField
        label="Tx type"
        isRequired={false}
        isReadOnly={false}
        value={TxType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime,
              TxDateDate,
              TxAmount,
              TxType: value,
              TxCategory,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxType ?? value;
          }
          if (errors.TxType?.hasError) {
            runValidationTasks("TxType", value);
          }
          setTxType(value);
        }}
        onBlur={() => runValidationTasks("TxType", TxType)}
        errorMessage={errors.TxType?.errorMessage}
        hasError={errors.TxType?.hasError}
        {...getOverrideProps(overrides, "TxType")}
      ></TextField>
      <TextField
        label="Tx category"
        isRequired={false}
        isReadOnly={false}
        value={TxCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime,
              TxDateDate,
              TxAmount,
              TxType,
              TxCategory: value,
              TxDescription,
            };
            const result = onChange(modelFields);
            value = result?.TxCategory ?? value;
          }
          if (errors.TxCategory?.hasError) {
            runValidationTasks("TxCategory", value);
          }
          setTxCategory(value);
        }}
        onBlur={() => runValidationTasks("TxCategory", TxCategory)}
        errorMessage={errors.TxCategory?.errorMessage}
        hasError={errors.TxCategory?.hasError}
        {...getOverrideProps(overrides, "TxCategory")}
      ></TextField>
      <TextField
        label="Tx description"
        isRequired={false}
        isReadOnly={false}
        value={TxDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TxDate,
              TxDateTime,
              TxDateDate,
              TxAmount,
              TxType,
              TxCategory,
              TxDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.TxDescription ?? value;
          }
          if (errors.TxDescription?.hasError) {
            runValidationTasks("TxDescription", value);
          }
          setTxDescription(value);
        }}
        onBlur={() => runValidationTasks("TxDescription", TxDescription)}
        errorMessage={errors.TxDescription?.errorMessage}
        hasError={errors.TxDescription?.hasError}
        {...getOverrideProps(overrides, "TxDescription")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
