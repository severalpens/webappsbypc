/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTtTaskTimeLog } from "./graphql/mutations";
const client = generateClient();
export default function TtTaskTimeLogCreateForm(props) {
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
    LogTime: "",
    TtTaskId: "",
  };
  const [LogTime, setLogTime] = React.useState(initialValues.LogTime);
  const [TtTaskId, setTtTaskId] = React.useState(initialValues.TtTaskId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLogTime(initialValues.LogTime);
    setTtTaskId(initialValues.TtTaskId);
    setErrors({});
  };
  const validations = {
    LogTime: [],
    TtTaskId: [],
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
          LogTime,
          TtTaskId,
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
            query: createTtTaskTimeLog.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TtTaskTimeLogCreateForm")}
      {...rest}
    >
      <TextField
        label="Log time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={LogTime && convertToLocal(new Date(LogTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              LogTime: value,
              TtTaskId,
            };
            const result = onChange(modelFields);
            value = result?.LogTime ?? value;
          }
          if (errors.LogTime?.hasError) {
            runValidationTasks("LogTime", value);
          }
          setLogTime(value);
        }}
        onBlur={() => runValidationTasks("LogTime", LogTime)}
        errorMessage={errors.LogTime?.errorMessage}
        hasError={errors.LogTime?.hasError}
        {...getOverrideProps(overrides, "LogTime")}
      ></TextField>
      <TextField
        label="Tt task id"
        isRequired={false}
        isReadOnly={false}
        value={TtTaskId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LogTime,
              TtTaskId: value,
            };
            const result = onChange(modelFields);
            value = result?.TtTaskId ?? value;
          }
          if (errors.TtTaskId?.hasError) {
            runValidationTasks("TtTaskId", value);
          }
          setTtTaskId(value);
        }}
        onBlur={() => runValidationTasks("TtTaskId", TtTaskId)}
        errorMessage={errors.TtTaskId?.errorMessage}
        hasError={errors.TtTaskId?.hasError}
        {...getOverrideProps(overrides, "TtTaskId")}
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
