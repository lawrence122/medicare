import { ComboboxProps, PillProps, PillsInputProps } from "@mantine/core";
import { ReactNode } from "react";

export interface CustomComboboxProp extends Omit<ComboboxProps, 'children'> {
    label: string;
    withGroup: boolean;
    options: string[];
    groups: CustomComboboxItem[];
    multiSelect: boolean;
    required?: boolean,
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    pillProps?: PillProps;
    inputProps?: PillsInputProps;
    loadingIndicator?: ReactNode;
    nothingFoundMessage?: ReactNode;
  }

export interface CustomComboboxItem {
    label: string,
    options: string[]
}