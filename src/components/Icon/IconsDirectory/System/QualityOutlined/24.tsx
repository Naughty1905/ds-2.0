import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQualityOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 3c-3.86 0-7 3.183-7 7.096a7.121 7.121 0 0 0 3.073 5.872v4.513c0 .176.088.34.234.436.146.095.33.11.489.037L12 19.492l3.204 1.462a.507.507 0 0 0 .489-.037.521.521 0 0 0 .234-.436v-4.513A7.121 7.121 0 0 0 19 10.096C19 6.183 15.86 3 12 3Zm2.902 16.678L12.21 18.45a.507.507 0 0 0-.42 0l-2.692 1.228v-3.123c.257.119.521.22.79.307l.046.015a6.317 6.317 0 0 0 .432.12 6.941 6.941 0 0 0 .297.065l.051.01.134.024.046.007.138.021.043.006c.047.007.095.012.142.018l.042.005.141.013.043.004.14.01.046.002c.048.003.095.005.143.006l.043.002a7.14 7.14 0 0 0 .37 0l.043-.002c.048-.001.096-.003.143-.006l.045-.003c.047-.002.094-.005.14-.01.015 0 .03-.002.044-.003.047-.004.094-.008.141-.014l.043-.004c.047-.006.094-.011.14-.018l.044-.006.138-.02.046-.008a7.45 7.45 0 0 0 .134-.024l.05-.01a7.49 7.49 0 0 0 .298-.066 6.726 6.726 0 0 0 .168-.043l.084-.023a9.678 9.678 0 0 0 .18-.053l.046-.015a6.93 6.93 0 0 0 .79-.307v3.123Zm-.952-3.856a6.33 6.33 0 0 1-.343.11 5.628 5.628 0 0 1-.146.038l-.055.014a5.476 5.476 0 0 1-.144.033l-.037.009a5.68 5.68 0 0 1-.187.036l-.019.003c-.056.01-.113.02-.17.027l-.038.006a6.149 6.149 0 0 1-.38.04l-.042.003a5.732 5.732 0 0 1-.577.01l-.051-.003-.15-.007-.041-.003a6.103 6.103 0 0 1-.589-.073l-.02-.003a6.254 6.254 0 0 1-.187-.037l-.036-.008a5.905 5.905 0 0 1-.144-.033l-.055-.014a6.06 6.06 0 0 1-.428-.127l-.061-.02a6.062 6.062 0 0 1-4.026-5.727c0-3.34 2.681-6.058 5.976-6.058s5.976 2.718 5.976 6.058a6.062 6.062 0 0 1-4.026 5.726Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.039 10.096 16 8.263a.525.525 0 0 0-.009-.503.511.511 0 0 0-.426-.26l-2.047-.072-1.085-1.76a.51.51 0 0 0-.868 0l-1.085 1.76-2.047.072a.511.511 0 0 0-.426.26.525.525 0 0 0-.009.503l.962 1.833L8 11.93a.525.525 0 0 0 .009.504c.088.155.25.253.426.259l2.047.072 1.085 1.761a.51.51 0 0 0 .868 0l1.085-1.761 2.047-.072a.511.511 0 0 0 .426-.26.525.525 0 0 0 .009-.503l-.962-1.833Zm-1.828 1.64a.51.51 0 0 0-.416.243L12 13.27l-.795-1.29a.511.511 0 0 0-.416-.243l-1.5-.053.705-1.343a.525.525 0 0 0 0-.488L9.289 8.51l1.5-.052a.51.51 0 0 0 .416-.244L12 6.923l.795 1.29c.09.146.246.238.416.244l1.5.052-.705 1.343a.525.525 0 0 0 0 .488l.705 1.343-1.5.053Z"
      />
    </svg>
  );
};

export default IconQualityOutlined24;