import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtTaskTimeLog } from "./graphql/types";
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
export declare type TtTaskTimeLogUpdateFormInputValues = {
    LogTime?: string;
    TtTaskId?: string;
};
export declare type TtTaskTimeLogUpdateFormValidationValues = {
    LogTime?: ValidationFunction<string>;
    TtTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskTimeLogUpdateFormOverridesProps = {
    TtTaskTimeLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LogTime?: PrimitiveOverrideProps<TextFieldProps>;
    TtTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskTimeLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskTimeLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttTaskTimeLog?: TtTaskTimeLog;
    onSubmit?: (fields: TtTaskTimeLogUpdateFormInputValues) => TtTaskTimeLogUpdateFormInputValues;
    onSuccess?: (fields: TtTaskTimeLogUpdateFormInputValues) => void;
    onError?: (fields: TtTaskTimeLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskTimeLogUpdateFormInputValues) => TtTaskTimeLogUpdateFormInputValues;
    onValidate?: TtTaskTimeLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskTimeLogUpdateForm(props: TtTaskTimeLogUpdateFormProps): React.ReactElement;
