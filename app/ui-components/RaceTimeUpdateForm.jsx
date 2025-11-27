/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRaceTime } from "./graphql/queries";
import { updateRaceTime } from "./graphql/mutations";
const client = generateClient();
export default function RaceTimeUpdateForm(props) {
  const {
    id: idProp,
    raceTime: raceTimeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    RaceDate: "",
    RaceDistance: "",
    RaceMins: "",
    RaceSecs: "",
  };
  const [RaceDate, setRaceDate] = React.useState(initialValues.RaceDate);
  const [RaceDistance, setRaceDistance] = React.useState(
    initialValues.RaceDistance
  );
  const [RaceMins, setRaceMins] = React.useState(initialValues.RaceMins);
  const [RaceSecs, setRaceSecs] = React.useState(initialValues.RaceSecs);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = raceTimeRecord
      ? { ...initialValues, ...raceTimeRecord }
      : initialValues;
    setRaceDate(cleanValues.RaceDate);
    setRaceDistance(cleanValues.RaceDistance);
    setRaceMins(cleanValues.RaceMins);
    setRaceSecs(cleanValues.RaceSecs);
    setErrors({});
  };
  const [raceTimeRecord, setRaceTimeRecord] = React.useState(raceTimeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRaceTime.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRaceTime
        : raceTimeModelProp;
      setRaceTimeRecord(record);
    };
    queryData();
  }, [idProp, raceTimeModelProp]);
  React.useEffect(resetStateValues, [raceTimeRecord]);
  const validations = {
    RaceDate: [],
    RaceDistance: [],
    RaceMins: [],
    RaceSecs: [],
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
          RaceDate: RaceDate ?? null,
          RaceDistance: RaceDistance ?? null,
          RaceMins: RaceMins ?? null,
          RaceSecs: RaceSecs ?? null,
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
            query: updateRaceTime.replaceAll("__typename", ""),
            variables: {
              input: {
                id: raceTimeRecord.id,
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
      {...getOverrideProps(overrides, "RaceTimeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Race date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={RaceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RaceDate: value,
              RaceDistance,
              RaceMins,
              RaceSecs,
            };
            const result = onChange(modelFields);
            value = result?.RaceDate ?? value;
          }
          if (errors.RaceDate?.hasError) {
            runValidationTasks("RaceDate", value);
          }
          setRaceDate(value);
        }}
        onBlur={() => runValidationTasks("RaceDate", RaceDate)}
        errorMessage={errors.RaceDate?.errorMessage}
        hasError={errors.RaceDate?.hasError}
        {...getOverrideProps(overrides, "RaceDate")}
      ></TextField>
      <TextField
        label="Race distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={RaceDistance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              RaceDate,
              RaceDistance: value,
              RaceMins,
              RaceSecs,
            };
            const result = onChange(modelFields);
            value = result?.RaceDistance ?? value;
          }
          if (errors.RaceDistance?.hasError) {
            runValidationTasks("RaceDistance", value);
          }
          setRaceDistance(value);
        }}
        onBlur={() => runValidationTasks("RaceDistance", RaceDistance)}
        errorMessage={errors.RaceDistance?.errorMessage}
        hasError={errors.RaceDistance?.hasError}
        {...getOverrideProps(overrides, "RaceDistance")}
      ></TextField>
      <TextField
        label="Race mins"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={RaceMins}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              RaceDate,
              RaceDistance,
              RaceMins: value,
              RaceSecs,
            };
            const result = onChange(modelFields);
            value = result?.RaceMins ?? value;
          }
          if (errors.RaceMins?.hasError) {
            runValidationTasks("RaceMins", value);
          }
          setRaceMins(value);
        }}
        onBlur={() => runValidationTasks("RaceMins", RaceMins)}
        errorMessage={errors.RaceMins?.errorMessage}
        hasError={errors.RaceMins?.hasError}
        {...getOverrideProps(overrides, "RaceMins")}
      ></TextField>
      <TextField
        label="Race secs"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={RaceSecs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              RaceDate,
              RaceDistance,
              RaceMins,
              RaceSecs: value,
            };
            const result = onChange(modelFields);
            value = result?.RaceSecs ?? value;
          }
          if (errors.RaceSecs?.hasError) {
            runValidationTasks("RaceSecs", value);
          }
          setRaceSecs(value);
        }}
        onBlur={() => runValidationTasks("RaceSecs", RaceSecs)}
        errorMessage={errors.RaceSecs?.errorMessage}
        hasError={errors.RaceSecs?.hasError}
        {...getOverrideProps(overrides, "RaceSecs")}
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
          isDisabled={!(idProp || raceTimeModelProp)}
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
              !(idProp || raceTimeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
