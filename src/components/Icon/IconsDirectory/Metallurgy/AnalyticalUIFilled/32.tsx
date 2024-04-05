import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticalUIFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.674 27c.445 0 .804-.323.956-.624l-5.832-9.967c-.087-.15-.152-.29-.152-.409 0-.118.065-.258.152-.409l5.832-9.967c-.152-.301-.51-.624-.956-.624-.336 0-.716.194-.955.591l-5.506 9.237c-.283.452-.467.774-.467 1.172 0 .387.184.72.467 1.172l5.516 9.237c.25.408.609.591.945.591Zm5.43-.01c.597 0 .988-.345 1.499-1.205l4.952-8.42C27.859 16.85 28 16.43 28 16c0-.44-.141-.85-.445-1.366l-4.952-8.419c-.51-.86-.902-1.204-1.499-1.204-.597 0-.988.344-1.51 1.204l-4.94 8.42c-.316.515-.446.924-.446 1.365 0 .43.141.85.445 1.366l4.942 8.419c.52.86.912 1.204 1.51 1.204ZM10.364 6.623a.703.703 0 1 0 0-1.409.704.704 0 1 0 0 1.409Zm-1.13 1.989a.704.704 0 1 0 0-1.409.703.703 0 1 0 0 1.409Zm-1.129 2.01a.713.713 0 0 0 .717-.709.713.713 0 0 0-1.423 0c0 .387.315.71.706.71Zm-1.14 1.98a.704.704 0 1 0 0-1.409.703.703 0 1 0 0 1.409Zm-1.119 2a.703.703 0 1 0 0-1.409.713.713 0 0 0-.717.71.71.71 0 0 0 .717.698Zm-1.13 1.988a.703.703 0 1 0 0-1.409.704.704 0 1 0 0 1.409Zm1.13 1.99a.703.703 0 1 0 0-1.409.713.713 0 0 0-.717.71.71.71 0 0 0 .717.699Zm1.119 2.01a.713.713 0 0 0 .716-.71.713.713 0 0 0-1.422 0c0 .388.315.71.706.71Zm1.14 1.979a.713.713 0 0 0 .717-.71.713.713 0 0 0-1.423 0c0 .387.315.71.706.71Zm1.13 1.99a.704.704 0 1 0 0-1.409.703.703 0 1 0 0 1.409Zm1.129 2a.703.703 0 0 0 .706-.71.703.703 0 0 0-.706-.71.706.706 0 0 0-.717.71c0 .397.315.71.717.71Z"
      />
    </svg>
  );
};

export default IconAnalyticalUIFilled32;