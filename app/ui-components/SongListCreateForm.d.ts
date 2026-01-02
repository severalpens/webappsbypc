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
export declare type SongListCreateFormInputValues = {
    Name?: string;
};
export declare type SongListCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongListCreateFormOverridesProps = {
    SongListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongListCreateFormProps = React.PropsWithChildren<{
    overrides?: SongListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SongListCreateFormInputValues) => SongListCreateFormInputValues;
    onSuccess?: (fields: SongListCreateFormInputValues) => void;
    onError?: (fields: SongListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SongListCreateFormInputValues) => SongListCreateFormInputValues;
    onValidate?: SongListCreateFormValidationValues;
} & React.CSSProperties>;
export default function SongListCreateForm(props: SongListCreateFormProps): React.ReactElement;
