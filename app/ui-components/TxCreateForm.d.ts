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
export declare type TxCreateFormInputValues = {
    TxDate?: string;
    TxDateTime?: string;
    TxDateDate?: string;
    TxAmount?: number;
    TxType?: string;
    TxCategory?: string;
    TxDescription?: string;
};
export declare type TxCreateFormValidationValues = {
    TxDate?: ValidationFunction<string>;
    TxDateTime?: ValidationFunction<string>;
    TxDateDate?: ValidationFunction<string>;
    TxAmount?: ValidationFunction<number>;
    TxType?: ValidationFunction<string>;
    TxCategory?: ValidationFunction<string>;
    TxDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TxCreateFormOverridesProps = {
    TxCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TxDate?: PrimitiveOverrideProps<TextFieldProps>;
    TxDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    TxDateDate?: PrimitiveOverrideProps<TextFieldProps>;
    TxAmount?: PrimitiveOverrideProps<TextFieldProps>;
    TxType?: PrimitiveOverrideProps<TextFieldProps>;
    TxCategory?: PrimitiveOverrideProps<TextFieldProps>;
    TxDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TxCreateFormProps = React.PropsWithChildren<{
    overrides?: TxCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TxCreateFormInputValues) => TxCreateFormInputValues;
    onSuccess?: (fields: TxCreateFormInputValues) => void;
    onError?: (fields: TxCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TxCreateFormInputValues) => TxCreateFormInputValues;
    onValidate?: TxCreateFormValidationValues;
} & React.CSSProperties>;
export default function TxCreateForm(props: TxCreateFormProps): React.ReactElement;
