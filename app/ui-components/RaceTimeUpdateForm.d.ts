import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RaceTime } from "./graphql/types";
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
export declare type RaceTimeUpdateFormInputValues = {
    RaceDate?: string;
    RaceDistance?: number;
    RaceMins?: number;
    RaceSecs?: number;
};
export declare type RaceTimeUpdateFormValidationValues = {
    RaceDate?: ValidationFunction<string>;
    RaceDistance?: ValidationFunction<number>;
    RaceMins?: ValidationFunction<number>;
    RaceSecs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceTimeUpdateFormOverridesProps = {
    RaceTimeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RaceDate?: PrimitiveOverrideProps<TextFieldProps>;
    RaceDistance?: PrimitiveOverrideProps<TextFieldProps>;
    RaceMins?: PrimitiveOverrideProps<TextFieldProps>;
    RaceSecs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceTimeUpdateFormProps = React.PropsWithChildren<{
    overrides?: RaceTimeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    raceTime?: RaceTime;
    onSubmit?: (fields: RaceTimeUpdateFormInputValues) => RaceTimeUpdateFormInputValues;
    onSuccess?: (fields: RaceTimeUpdateFormInputValues) => void;
    onError?: (fields: RaceTimeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceTimeUpdateFormInputValues) => RaceTimeUpdateFormInputValues;
    onValidate?: RaceTimeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RaceTimeUpdateForm(props: RaceTimeUpdateFormProps): React.ReactElement;
