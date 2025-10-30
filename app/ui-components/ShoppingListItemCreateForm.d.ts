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
export declare type ShoppingListItemCreateFormInputValues = {
    Name?: string;
    IsCompleted?: boolean;
};
export declare type ShoppingListItemCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    IsCompleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListItemCreateFormOverridesProps = {
    ShoppingListItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    IsCompleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoppingListItemCreateFormInputValues) => ShoppingListItemCreateFormInputValues;
    onSuccess?: (fields: ShoppingListItemCreateFormInputValues) => void;
    onError?: (fields: ShoppingListItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListItemCreateFormInputValues) => ShoppingListItemCreateFormInputValues;
    onValidate?: ShoppingListItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListItemCreateForm(props: ShoppingListItemCreateFormProps): React.ReactElement;
