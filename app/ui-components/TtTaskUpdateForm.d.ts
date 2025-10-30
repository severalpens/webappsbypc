import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtTask } from "./graphql/types";
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
export declare type TtTaskUpdateFormInputValues = {
    ProjectName?: string;
    TaskName?: string;
    IsRunning?: boolean;
};
export declare type TtTaskUpdateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    TaskName?: ValidationFunction<string>;
    IsRunning?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskUpdateFormOverridesProps = {
    TtTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    TaskName?: PrimitiveOverrideProps<TextFieldProps>;
    IsRunning?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttTask?: TtTask;
    onSubmit?: (fields: TtTaskUpdateFormInputValues) => TtTaskUpdateFormInputValues;
    onSuccess?: (fields: TtTaskUpdateFormInputValues) => void;
    onError?: (fields: TtTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskUpdateFormInputValues) => TtTaskUpdateFormInputValues;
    onValidate?: TtTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskUpdateForm(props: TtTaskUpdateFormProps): React.ReactElement;
