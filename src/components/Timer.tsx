import React, { FC, memo } from 'react';

import { Flex } from 'UI';
import RedLabel from './RedLabel';

interface IProps {
  value: number;
  label: string;
  dot?: boolean;
}

const valueClassname = 'text-6xl font-bold';

const Timer: FC<IProps> = ({ label, value, dot = false }) => {
  return (
    <Flex>
      <Flex className='flex-col justify-center items-center gap-2'>
        <p className={valueClassname}>{value}</p>
        <RedLabel>{label}</RedLabel>
      </Flex>
      {dot && <span className={valueClassname}>:</span>}
    </Flex>
  );
};

export default memo(Timer);
