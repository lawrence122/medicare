export interface CustomComboboxProp {
    label: string
    withGroup: boolean,
    options: string[],
    groups: CustomComboboxItem[],
}

export interface CustomComboboxItem {
    label: string,
    options: string[]
}