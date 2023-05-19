import React, { FC, PropsWithChildren, memo } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const Flex: FC<IProps> = ({ className = '', onClick = () => {}, children }) => {
  return (
    <div className={['flex flex-wrap ', className].join(' ')} onClick={onClick}>
      {children}
    </div>
  );
};

export default memo(Flex);
