import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtRunningTask } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TtRunningTaskUpdateFormInputValues = {
    ProjectName?: string;
    TaskId?: string;
    TaskName?: string;
    IsRunning?: boolean;
    TtTaskTimeBlockId?: string;
    StartTime?: string;
    EndTime?: string;
};
export declare type TtRunningTaskUpdateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    TaskId?: ValidationFunction<string>;
    TaskName?: ValidationFunction<string>;
    IsRunning?: ValidationFunction<boolean>;
    TtTaskTimeBlockId?: ValidationFunction<string>;
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtRunningTaskUpdateFormOverridesProps = {
    TtRunningTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    TaskId?: PrimitiveOverrideProps<TextFieldProps>;
    TaskName?: PrimitiveOverrideProps<TextFieldProps>;
    IsRunning?: PrimitiveOverrideProps<SwitchFieldProps>;
    TtTaskTimeBlockId?: PrimitiveOverrideProps<TextFieldProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtRunningTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtRunningTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttRunningTask?: TtRunningTask;
    onSubmit?: (fields: TtRunningTaskUpdateFormInputValues) => TtRunningTaskUpdateFormInputValues;
    onSuccess?: (fields: TtRunningTaskUpdateFormInputValues) => void;
    onError?: (fields: TtRunningTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtRunningTaskUpdateFormInputValues) => TtRunningTaskUpdateFormInputValues;
    onValidate?: TtRunningTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtRunningTaskUpdateForm(props: TtRunningTaskUpdateFormProps): React.ReactElement;
