import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtTaskTimeBlock } from "./graphql/types";
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
export declare type TtTaskTimeBlockUpdateFormInputValues = {
    StartTime?: string;
    EndTime?: string;
    TtTaskId?: string;
};
export declare type TtTaskTimeBlockUpdateFormValidationValues = {
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    TtTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskTimeBlockUpdateFormOverridesProps = {
    TtTaskTimeBlockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    TtTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskTimeBlockUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskTimeBlockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttTaskTimeBlock?: TtTaskTimeBlock;
    onSubmit?: (fields: TtTaskTimeBlockUpdateFormInputValues) => TtTaskTimeBlockUpdateFormInputValues;
    onSuccess?: (fields: TtTaskTimeBlockUpdateFormInputValues) => void;
    onError?: (fields: TtTaskTimeBlockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskTimeBlockUpdateFormInputValues) => TtTaskTimeBlockUpdateFormInputValues;
    onValidate?: TtTaskTimeBlockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskTimeBlockUpdateForm(props: TtTaskTimeBlockUpdateFormProps): React.ReactElement;
