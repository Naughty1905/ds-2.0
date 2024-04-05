import { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from 'react';
import { customInputColors, sizesMappingInput } from '../declaration';
type TSize = `${sizesMappingInput}`;
export interface IInputAdditionalProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    label?: string;
    multiline?: boolean;
    pseudo?: boolean;
    icon?: ReactNode;
    helperText?: string | ReactNode;
    resize?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    size?: TSize;
    color?: customInputColors;
}
export type TInputProps = IInputAdditionalProps & Omit<ComponentPropsWithoutRef<'input'>, 'size'> & Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
};
export {};
//# sourceMappingURL=types.d.ts.map