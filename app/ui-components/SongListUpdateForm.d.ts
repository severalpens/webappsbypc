import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SongList } from "./graphql/types";
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
export declare type SongListUpdateFormInputValues = {
    Name?: string;
};
export declare type SongListUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongListUpdateFormOverridesProps = {
    SongListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongListUpdateFormProps = React.PropsWithChildren<{
    overrides?: SongListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    songList?: SongList;
    onSubmit?: (fields: SongListUpdateFormInputValues) => SongListUpdateFormInputValues;
    onSuccess?: (fields: SongListUpdateFormInputValues) => void;
    onError?: (fields: SongListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SongListUpdateFormInputValues) => SongListUpdateFormInputValues;
    onValidate?: SongListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SongListUpdateForm(props: SongListUpdateFormProps): React.ReactElement;
