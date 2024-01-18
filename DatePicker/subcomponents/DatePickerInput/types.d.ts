import { TLevel } from '../../../DatePicker/types';
import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES } from '../../../declaration';
type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number];
type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number];
export interface DatePickerInputProps {
    value?: Date;
    valueFrom?: Date;
    valueTo?: Date;
    onChange?: (date: Date) => void;
    onFocus?: () => void;
    onBlur?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
    onEnterKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
    onTabKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
    disabled?: boolean;
    className?: string;
    showTime?: boolean;
    withPeriod?: boolean;
    enabledFrom?: Date;
    enabledTo?: Date;
    enabledHourFrom?: (date: Date) => TEnabledHourFrom;
    enabledHourTo?: (date: Date) => TEnabledHourTo;
    enabledMinuteFrom?: (date: Date) => number;
    enabledMinuteTo?: (date: Date) => number;
    shiftFrom?: number;
    shiftTo?: number;
    shiftLength?: 2 | 3;
    withShift?: boolean;
    withSeconds?: boolean;
    level: TLevel;
    label?: string;
    colored?: boolean;
    isOpenOnFocus?: boolean;
    isHideYear?: boolean;
}
export {};
//# sourceMappingURL=types.d.ts.map