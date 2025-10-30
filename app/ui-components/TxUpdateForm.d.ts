import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tx } from "./graphql/types";
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
export declare type TxUpdateFormInputValues = {
    TxDate?: string;
    TxDateTime?: string;
    TxDateDate?: string;
    TxAmount?: number;
    TxType?: string;
    TxCategory?: string;
    TxDescription?: string;
};
export declare type TxUpdateFormValidationValues = {
    TxDate?: ValidationFunction<string>;
    TxDateTime?: ValidationFunction<string>;
    TxDateDate?: ValidationFunction<string>;
    TxAmount?: ValidationFunction<number>;
    TxType?: ValidationFunction<string>;
    TxCategory?: ValidationFunction<string>;
    TxDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TxUpdateFormOverridesProps = {
    TxUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TxDate?: PrimitiveOverrideProps<TextFieldProps>;
    TxDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    TxDateDate?: PrimitiveOverrideProps<TextFieldProps>;
    TxAmount?: PrimitiveOverrideProps<TextFieldProps>;
    TxType?: PrimitiveOverrideProps<TextFieldProps>;
    TxCategory?: PrimitiveOverrideProps<TextFieldProps>;
    TxDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TxUpdateFormProps = React.PropsWithChildren<{
    overrides?: TxUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tx?: Tx;
    onSubmit?: (fields: TxUpdateFormInputValues) => TxUpdateFormInputValues;
    onSuccess?: (fields: TxUpdateFormInputValues) => void;
    onError?: (fields: TxUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TxUpdateFormInputValues) => TxUpdateFormInputValues;
    onValidate?: TxUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TxUpdateForm(props: TxUpdateFormProps): React.ReactElement;
