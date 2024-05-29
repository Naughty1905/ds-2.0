import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBalanceOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeWidth=".2"
        d="m11.419 8.517-4.487-.776a.842.842 0 0 0-.97.696c-.034.2.004.396.095.56l-2.85 6.189a.853.853 0 0 0-.307.658c0 .035 0 .07.002.104a.63.63 0 0 0 .007.15c.143 2.09 2.04 3.6 4.165 3.6 2.21 0 4.174-1.634 4.174-3.854a.853.853 0 0 0-.374-.708L8.316 9.707l7.53 1.302-2.785 6.052a.854.854 0 0 0-.31.659l.002.105a.632.632 0 0 0 .008.15c.144 2.09 2.04 3.6 4.165 3.6s4.021-1.511 4.165-3.6a.634.634 0 0 0 .008-.15l.001-.105a.853.853 0 0 0-.328-.675l-2.994-6.208-.003-.008a.853.853 0 0 0 .128-.328.85.85 0 0 0-.687-.981l-4.56-.789V2.9h-.1 0-.726 0-.022 0-.011 0-.004 0-.016 0-.004 0-.004 0-.009 0-.005 0-.004 0-.005 0-.005 0-.006 0-.005 0-.006 0-.006 0-.007 0-.007 0-.008 0-.002 0-.008 0-.002 0-.011 0-.002 0-.002 0-.002 0-.002 0-.019 0-.002 0-.002 0-.002 0-.002 0-.002 0-.007 0-.002 0-.002 0-.004 0-.002 0-.002 0-.003 0-.002 0-.003 0-.002 0-.003 0-.002 0-.002 0-.002 0-.002 0-.002 0-.001 0-.002 0-.001 0-.002 0-.001 0-.002 0-.001 0-.002 0-.002 0-.001 0-.002 0-.002 0-.002 0-.002 0-.002 0-.001 0-.002 0-.002 0-.001 0-.002 0-.001 0-.001 0-.002 0-.001 0-.001 0-.001 0-.001 0-.002 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.1v5.617Zm-4.345 9.48c-1.076 0-1.915-.567-2.285-1.302h4.57c-.37.735-1.208 1.302-2.285 1.302Zm-2.413-3.004 2.36-5.126 2.415 5.126H4.661Zm12.265 4.88c-1.076 0-1.916-.567-2.286-1.302h4.572c-.37.735-1.21 1.301-2.286 1.301Zm-2.412-3.004 2.342-5.09 2.454 5.09h-4.796Z"
      />
    </svg>
  );
};

export default IconBalanceOutlined24;