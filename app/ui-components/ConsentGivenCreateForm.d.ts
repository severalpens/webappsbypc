import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type ConsentGivenCreateFormInputValues = {
    IsGiven?: boolean;
};
export declare type ConsentGivenCreateFormValidationValues = {
    IsGiven?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsentGivenCreateFormOverridesProps = {
    ConsentGivenCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    IsGiven?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ConsentGivenCreateFormProps = React.PropsWithChildren<{
    overrides?: ConsentGivenCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConsentGivenCreateFormInputValues) => ConsentGivenCreateFormInputValues;
    onSuccess?: (fields: ConsentGivenCreateFormInputValues) => void;
    onError?: (fields: ConsentGivenCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConsentGivenCreateFormInputValues) => ConsentGivenCreateFormInputValues;
    onValidate?: ConsentGivenCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConsentGivenCreateForm(props: ConsentGivenCreateFormProps): React.ReactElement;
