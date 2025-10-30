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
import { getTtRunningTask } from "./graphql/queries";
import { updateTtRunningTask } from "./graphql/mutations";
const client = generateClient();
export default function TtRunningTaskUpdateForm(props) {
  const {
    id: idProp,
    ttRunningTask: ttRunningTaskModelProp,
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
    TaskId: "",
    TaskName: "",
    IsRunning: false,
    TtTaskTimeBlockId: "",
    StartTime: "",
    EndTime: "",
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [TaskId, setTaskId] = React.useState(initialValues.TaskId);
  const [TaskName, setTaskName] = React.useState(initialValues.TaskName);
  const [IsRunning, setIsRunning] = React.useState(initialValues.IsRunning);
  const [TtTaskTimeBlockId, setTtTaskTimeBlockId] = React.useState(
    initialValues.TtTaskTimeBlockId
  );
  const [StartTime, setStartTime] = React.useState(initialValues.StartTime);
  const [EndTime, setEndTime] = React.useState(initialValues.EndTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ttRunningTaskRecord
      ? { ...initialValues, ...ttRunningTaskRecord }
      : initialValues;
    setProjectName(cleanValues.ProjectName);
    setTaskId(cleanValues.TaskId);
    setTaskName(cleanValues.TaskName);
    setIsRunning(cleanValues.IsRunning);
    setTtTaskTimeBlockId(cleanValues.TtTaskTimeBlockId);
    setStartTime(cleanValues.StartTime);
    setEndTime(cleanValues.EndTime);
    setErrors({});
  };
  const [ttRunningTaskRecord, setTtRunningTaskRecord] = React.useState(
    ttRunningTaskModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTtRunningTask.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTtRunningTask
        : ttRunningTaskModelProp;
      setTtRunningTaskRecord(record);
    };
    queryData();
  }, [idProp, ttRunningTaskModelProp]);
  React.useEffect(resetStateValues, [ttRunningTaskRecord]);
  const validations = {
    ProjectName: [],
    TaskId: [],
    TaskName: [{ type: "Required" }],
    IsRunning: [],
    TtTaskTimeBlockId: [],
    StartTime: [],
    EndTime: [],
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
          ProjectName: ProjectName ?? null,
          TaskId: TaskId ?? null,
          TaskName,
          IsRunning: IsRunning ?? null,
          TtTaskTimeBlockId: TtTaskTimeBlockId ?? null,
          StartTime: StartTime ?? null,
          EndTime: EndTime ?? null,
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
            query: updateTtRunningTask.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ttRunningTaskRecord.id,
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
      {...getOverrideProps(overrides, "TtRunningTaskUpdateForm")}
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
              TaskId,
              TaskName,
              IsRunning,
              TtTaskTimeBlockId,
              StartTime,
              EndTime,
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
        label="Task id"
        isRequired={false}
        isReadOnly={false}
        value={TaskId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskId: value,
              TaskName,
              IsRunning,
              TtTaskTimeBlockId,
              StartTime,
              EndTime,
            };
            const result = onChange(modelFields);
            value = result?.TaskId ?? value;
          }
          if (errors.TaskId?.hasError) {
            runValidationTasks("TaskId", value);
          }
          setTaskId(value);
        }}
        onBlur={() => runValidationTasks("TaskId", TaskId)}
        errorMessage={errors.TaskId?.errorMessage}
        hasError={errors.TaskId?.hasError}
        {...getOverrideProps(overrides, "TaskId")}
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
              TaskId,
              TaskName: value,
              IsRunning,
              TtTaskTimeBlockId,
              StartTime,
              EndTime,
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
              TaskId,
              TaskName,
              IsRunning: value,
              TtTaskTimeBlockId,
              StartTime,
              EndTime,
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
      <TextField
        label="Tt task time block id"
        isRequired={false}
        isReadOnly={false}
        value={TtTaskTimeBlockId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskId,
              TaskName,
              IsRunning,
              TtTaskTimeBlockId: value,
              StartTime,
              EndTime,
            };
            const result = onChange(modelFields);
            value = result?.TtTaskTimeBlockId ?? value;
          }
          if (errors.TtTaskTimeBlockId?.hasError) {
            runValidationTasks("TtTaskTimeBlockId", value);
          }
          setTtTaskTimeBlockId(value);
        }}
        onBlur={() =>
          runValidationTasks("TtTaskTimeBlockId", TtTaskTimeBlockId)
        }
        errorMessage={errors.TtTaskTimeBlockId?.errorMessage}
        hasError={errors.TtTaskTimeBlockId?.hasError}
        {...getOverrideProps(overrides, "TtTaskTimeBlockId")}
      ></TextField>
      <TextField
        label="Start time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={StartTime && convertToLocal(new Date(StartTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskId,
              TaskName,
              IsRunning,
              TtTaskTimeBlockId,
              StartTime: value,
              EndTime,
            };
            const result = onChange(modelFields);
            value = result?.StartTime ?? value;
          }
          if (errors.StartTime?.hasError) {
            runValidationTasks("StartTime", value);
          }
          setStartTime(value);
        }}
        onBlur={() => runValidationTasks("StartTime", StartTime)}
        errorMessage={errors.StartTime?.errorMessage}
        hasError={errors.StartTime?.hasError}
        {...getOverrideProps(overrides, "StartTime")}
      ></TextField>
      <TextField
        label="End time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={EndTime && convertToLocal(new Date(EndTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ProjectName,
              TaskId,
              TaskName,
              IsRunning,
              TtTaskTimeBlockId,
              StartTime,
              EndTime: value,
            };
            const result = onChange(modelFields);
            value = result?.EndTime ?? value;
          }
          if (errors.EndTime?.hasError) {
            runValidationTasks("EndTime", value);
          }
          setEndTime(value);
        }}
        onBlur={() => runValidationTasks("EndTime", EndTime)}
        errorMessage={errors.EndTime?.errorMessage}
        hasError={errors.EndTime?.hasError}
        {...getOverrideProps(overrides, "EndTime")}
      ></TextField>
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
          isDisabled={!(idProp || ttRunningTaskModelProp)}
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
              !(idProp || ttRunningTaskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
