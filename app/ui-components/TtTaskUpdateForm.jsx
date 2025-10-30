/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTtTask } from "./graphql/queries";
import { updateTtTask } from "./graphql/mutations";
const client = generateClient();
export default function TtTaskUpdateForm(props) {
  const {
    id: idProp,
    ttTask: ttTaskModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProjectName: "",
    TaskName: "",
    IsRunning: false,
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [TaskName, setTaskName] = React.useState(initialValues.TaskName);
  const [IsRunning, setIsRunning] = React.useState(initialValues.IsRunning);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ttTaskRecord
      ? { ...initialValues, ...ttTaskRecord }
      : initialValues;
    setProjectName(cleanValues.ProjectName);
    setTaskName(cleanValues.TaskName);
    setIsRunning(cleanValues.IsRunning);
    setErrors({});
  };
  const [ttTaskRecord, setTtTaskRecord] = React.useState(ttTaskModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTtTask.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTtTask
        : ttTaskModelProp;
      setTtTaskRecord(record);
    };
    queryData();
  }, [idProp, ttTaskModelProp]);
  React.useEffect(resetStateValues, [ttTaskRecord]);
  const validations = {
    ProjectName: [],
    TaskName: [{ type: "Required" }],
    IsRunning: [],
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
          ProjectName: ProjectName ?? null,
          TaskName,
          IsRunning: IsRunning ?? null,
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
            query: updateTtTask.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ttTaskRecord.id,
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
      {...getOverrideProps(overrides, "TtTaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              TaskName,
              IsRunning,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <TextField
        label="Task name"
        isRequired={true}
        isReadOnly={false}
        value={TaskName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskName: value,
              IsRunning,
            };
            const result = onChange(modelFields);
            value = result?.TaskName ?? value;
          }
          if (errors.TaskName?.hasError) {
            runValidationTasks("TaskName", value);
          }
          setTaskName(value);
        }}
        onBlur={() => runValidationTasks("TaskName", TaskName)}
        errorMessage={errors.TaskName?.errorMessage}
        hasError={errors.TaskName?.hasError}
        {...getOverrideProps(overrides, "TaskName")}
      ></TextField>
      <SwitchField
        label="Is running"
        defaultChecked={false}
        isDisabled={false}
        isChecked={IsRunning}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskName,
              IsRunning: value,
            };
            const result = onChange(modelFields);
            value = result?.IsRunning ?? value;
          }
          if (errors.IsRunning?.hasError) {
            runValidationTasks("IsRunning", value);
          }
          setIsRunning(value);
        }}
        onBlur={() => runValidationTasks("IsRunning", IsRunning)}
        errorMessage={errors.IsRunning?.errorMessage}
        hasError={errors.IsRunning?.hasError}
        {...getOverrideProps(overrides, "IsRunning")}
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
          isDisabled={!(idProp || ttTaskModelProp)}
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
              !(idProp || ttTaskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
