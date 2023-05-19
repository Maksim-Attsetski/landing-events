import React, { FC, memo } from 'react';

import { Flex } from 'UI';

import RedLabel from './RedLabel';
import { ITimerItem } from './DateTimer';

interface IProps {
  item: ITimerItem;
  dot?: boolean;
}

const valueClassname = 'text-titleS text-main font-bold';

const TimerItem: FC<IProps> = ({ item, dot = false }) => {
  return (
    <Flex>
      <Flex className='flex-col justify-center items-center gap-2'>
        <p className={valueClassname}>{item.value}</p>
        <RedLabel>{item.label}</RedLabel>
      </Flex>
      {dot && <span className={valueClassname}>:</span>}
    </Flex>
  );
};

export default memo(TimerItem);
