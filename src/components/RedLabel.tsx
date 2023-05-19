import { assets } from 'assets';
import React, { FC, PropsWithChildren, memo } from 'react';

const RedLabel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='relative'>
      <img
        src={assets.timerLabel}
        alt='timer label'
        className='w-32 scale-x-90'
      />
      <p className='absolute top-1/2 left-1/2 -translate-x-fifty -translate-y-fifty text-white'>
        {children}
      </p>
    </div>
  );
};

export default memo(RedLabel);
