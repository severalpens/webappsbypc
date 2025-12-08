import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TtTaskCreateFormInputValues = {
    ProjectName?: string;
    TaskName?: string;
    IsRunning?: boolean;
};
export declare type TtTaskCreateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    TaskName?: ValidationFunction<string>;
    IsRunning?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskCreateFormOverridesProps = {
    TtTaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    TaskName?: PrimitiveOverrideProps<TextFieldProps>;
    IsRunning?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtTaskCreateFormInputValues) => TtTaskCreateFormInputValues;
    onSuccess?: (fields: TtTaskCreateFormInputValues) => void;
    onError?: (fields: TtTaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskCreateFormInputValues) => TtTaskCreateFormInputValues;
    onValidate?: TtTaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskCreateForm(props: TtTaskCreateFormProps): React.ReactElement;
