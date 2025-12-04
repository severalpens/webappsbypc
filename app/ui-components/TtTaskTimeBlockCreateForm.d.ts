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
export declare type TtTaskTimeBlockCreateFormInputValues = {
    StartTime?: string;
    EndTime?: string;
    TtTaskId?: string;
};
export declare type TtTaskTimeBlockCreateFormValidationValues = {
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    TtTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskTimeBlockCreateFormOverridesProps = {
    TtTaskTimeBlockCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    TtTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskTimeBlockCreateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskTimeBlockCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtTaskTimeBlockCreateFormInputValues) => TtTaskTimeBlockCreateFormInputValues;
    onSuccess?: (fields: TtTaskTimeBlockCreateFormInputValues) => void;
    onError?: (fields: TtTaskTimeBlockCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskTimeBlockCreateFormInputValues) => TtTaskTimeBlockCreateFormInputValues;
    onValidate?: TtTaskTimeBlockCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskTimeBlockCreateForm(props: TtTaskTimeBlockCreateFormProps): React.ReactElement;
