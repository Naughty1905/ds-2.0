import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDataFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m6.157 10.238.037-.288.008-.057v-.002l.006-.035v-.008c-.004-.413-.378-.825-.93-.825-.556 0-.93.416-.93.832 0 .417.374.832.93.832.26 0 .491-.097.66-.25l.219-.199Zm2.724 1.344.219-.199a.978.978 0 0 1 1.071-.158l.295.133.137.27a.739.739 0 0 1 .087.337c0 .416-.375.832-.93.832-.553 0-.927-.411-.931-.825v-.008l.006-.035.008-.059.038-.288Zm4.653-3.23.295.134c.133.06.27.092.412.092.555 0 .93-.416.93-.832a.739.739 0 0 0-.045-.232l-.096-.286-.258-.163a.994.994 0 0 0-.531-.15c-.556 0-.93.415-.93.831 0 .11.027.222.086.338l.137.269ZM17.932 5.1l.259.163c.15.094.332.151.531.151.556 0 .93-.416.93-.832s-.374-.832-.93-.832-.93.416-.93.832c0 .06.012.132.045.232l.095.286ZM21 21H3l.598-1.055v-5.87c0-.292.25-.528.56-.528h2.24c.31 0 .56.236.56.527v5.871h1.12v-3.761c0-.292.251-.528.561-.528h2.24c.31 0 .56.236.56.528v3.761h1.121v-7.98c0-.292.25-.527.56-.527h2.241c.31 0 .56.235.56.527v7.98h1.12V8.801c0-.292.251-.528.56-.528h2.241c.31 0 .56.236.56.528v11.144L21 21ZM8.1 11.773l-1.659-.78a1.728 1.728 0 0 1-1.163.444c-.927 0-1.68-.71-1.68-1.582 0-.872.753-1.582 1.68-1.582.927 0 1.68.71 1.68 1.582a.88.88 0 0 1-.014.146l-.006.046 1.658.78a1.727 1.727 0 0 1 1.883-.286l2.25-2.117a1.488 1.488 0 0 1-.169-.678c0-.872.754-1.582 1.68-1.582.345 0 .664.099.93.266l1.955-1.38a1.476 1.476 0 0 1-.084-.468c0-.872.754-1.582 1.681-1.582s1.68.71 1.68 1.582c0 .872-.753 1.582-1.68 1.582-.344 0-.664-.098-.93-.266l-1.955 1.38c.05.149.084.304.084.468 0 .872-.754 1.582-1.68 1.582-.259 0-.501-.06-.72-.158l-2.25 2.117c.105.206.169.434.169.678 0 .872-.754 1.582-1.68 1.582-.927 0-1.681-.71-1.681-1.582 0-.05.007-.098.014-.146l.006-.046Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDataFilled24;