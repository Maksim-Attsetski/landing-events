import React, { FC, PropsWithChildren, memo } from 'react';

interface IProps extends PropsWithChildren {}

const Toast: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default memo(Toast);
