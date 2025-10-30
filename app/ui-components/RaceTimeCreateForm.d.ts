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
export declare type RaceTimeCreateFormInputValues = {
    RaceDate?: string;
    RaceDistance?: number;
    RaceMins?: number;
    RaceSecs?: number;
};
export declare type RaceTimeCreateFormValidationValues = {
    RaceDate?: ValidationFunction<string>;
    RaceDistance?: ValidationFunction<number>;
    RaceMins?: ValidationFunction<number>;
    RaceSecs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceTimeCreateFormOverridesProps = {
    RaceTimeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RaceDate?: PrimitiveOverrideProps<TextFieldProps>;
    RaceDistance?: PrimitiveOverrideProps<TextFieldProps>;
    RaceMins?: PrimitiveOverrideProps<TextFieldProps>;
    RaceSecs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceTimeCreateFormProps = React.PropsWithChildren<{
    overrides?: RaceTimeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RaceTimeCreateFormInputValues) => RaceTimeCreateFormInputValues;
    onSuccess?: (fields: RaceTimeCreateFormInputValues) => void;
    onError?: (fields: RaceTimeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceTimeCreateFormInputValues) => RaceTimeCreateFormInputValues;
    onValidate?: RaceTimeCreateFormValidationValues;
} & React.CSSProperties>;
export default function RaceTimeCreateForm(props: RaceTimeCreateFormProps): React.ReactElement;
