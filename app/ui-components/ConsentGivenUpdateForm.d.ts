import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { ConsentGiven } from "./graphql/types";
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
export declare type ConsentGivenUpdateFormInputValues = {
    IsGiven?: boolean;
};
export declare type ConsentGivenUpdateFormValidationValues = {
    IsGiven?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsentGivenUpdateFormOverridesProps = {
    ConsentGivenUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    IsGiven?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ConsentGivenUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConsentGivenUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    consentGiven?: ConsentGiven;
    onSubmit?: (fields: ConsentGivenUpdateFormInputValues) => ConsentGivenUpdateFormInputValues;
    onSuccess?: (fields: ConsentGivenUpdateFormInputValues) => void;
    onError?: (fields: ConsentGivenUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConsentGivenUpdateFormInputValues) => ConsentGivenUpdateFormInputValues;
    onValidate?: ConsentGivenUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConsentGivenUpdateForm(props: ConsentGivenUpdateFormProps): React.ReactElement;
