import { ChangeEventHandler, InputHTMLAttributes } from 'react';
export declare enum ECheckboxColors {
    default = "default",
    error = "error"
}
type TCheckboxColors = `${ECheckboxColors}`;
export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: TCheckboxColors;
    disabled?: boolean;
    checked?: boolean;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string;
    multiple?: boolean;
    className?: string;
}
export {};
//# sourceMappingURL=types.d.ts.map