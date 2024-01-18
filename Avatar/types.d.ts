import { CSSProperties } from 'react';
import { TIconProps } from '../Icon/types';
import { ITypography } from '../Typography/types';
import { AvatarShape, AvatarSize } from './enums';
export interface IAvatarProps {
    size: `${AvatarSize}`;
    shape: `${AvatarShape}`;
    imageSrc?: string;
    userName?: string;
    userSurname?: string;
    online?: boolean;
    badgeIconName?: string;
    numberIndicator?: number;
    className?: string;
}
export type TAvatarSizeParameter = {
    avatarSize: number;
    squareRadius: number;
    numberIndicatorSize: number;
    lettersSize: number;
    badgeNumbersSize: number;
    badgeSize: number;
    specialBadgeSize: number;
    iconSize: TIconProps['containerSize'];
    lettersVariant: ITypography['variant'];
    badgeTranslate: [number, number];
};
export type TSizingStyles = {
    avatarStyles: CSSProperties;
    lettersStyles: CSSProperties;
    numberIndicatorStyles: CSSProperties;
    onlineIndicatorStyles: CSSProperties;
    badgeStyles: CSSProperties;
};
export type TGetSizingStylesArgs = {
    sizeParameters: TAvatarSizeParameter;
    isSquare: boolean;
    isSpecialBadge: boolean;
    sizeVariant: IAvatarProps['size'];
};
//# sourceMappingURL=types.d.ts.map