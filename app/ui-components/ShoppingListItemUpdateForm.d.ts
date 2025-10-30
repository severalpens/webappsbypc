import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ShoppingListItem } from "./graphql/types";
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
export declare type ShoppingListItemUpdateFormInputValues = {
    Name?: string;
    IsCompleted?: boolean;
};
export declare type ShoppingListItemUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    IsCompleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListItemUpdateFormOverridesProps = {
    ShoppingListItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    IsCompleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shoppingListItem?: ShoppingListItem;
    onSubmit?: (fields: ShoppingListItemUpdateFormInputValues) => ShoppingListItemUpdateFormInputValues;
    onSuccess?: (fields: ShoppingListItemUpdateFormInputValues) => void;
    onError?: (fields: ShoppingListItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListItemUpdateFormInputValues) => ShoppingListItemUpdateFormInputValues;
    onValidate?: ShoppingListItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListItemUpdateForm(props: ShoppingListItemUpdateFormProps): React.ReactElement;
