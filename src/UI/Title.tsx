import React, { FC, PropsWithChildren, memo } from 'react';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='uppercase text-titles text-titleS text-center font-bold'>
      {children}
    </h2>
  );
};

export default memo(Title);
