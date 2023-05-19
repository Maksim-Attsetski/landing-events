import React, { FC, PropsWithChildren, memo } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
}

const Flex: FC<IProps> = ({ className = '', children }) => {
  return (
    <div className={['flex flex-wrap ', className].join(' ')}>{children}</div>
  );
};

export default memo(Flex);
