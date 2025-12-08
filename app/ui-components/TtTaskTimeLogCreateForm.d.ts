import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TtTaskTimeLogCreateFormInputValues = {
    LogTime?: string;
    TtTaskId?: string;
};
export declare type TtTaskTimeLogCreateFormValidationValues = {
    LogTime?: ValidationFunction<string>;
    TtTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskTimeLogCreateFormOverridesProps = {
    TtTaskTimeLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LogTime?: PrimitiveOverrideProps<TextFieldProps>;
    TtTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskTimeLogCreateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskTimeLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtTaskTimeLogCreateFormInputValues) => TtTaskTimeLogCreateFormInputValues;
    onSuccess?: (fields: TtTaskTimeLogCreateFormInputValues) => void;
    onError?: (fields: TtTaskTimeLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskTimeLogCreateFormInputValues) => TtTaskTimeLogCreateFormInputValues;
    onValidate?: TtTaskTimeLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskTimeLogCreateForm(props: TtTaskTimeLogCreateFormProps): React.ReactElement;
