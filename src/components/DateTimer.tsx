import React, { FC, memo, useEffect, useMemo, useState } from 'react';

import { Flex } from 'UI';
import TimerItem from './TimerItem';

export interface ITimerItem {
  label: string;
  value: number;
}

const now = new Date().getTime();

const defaultTimeDate = [
  { value: 0, label: 'Days' },
  { value: 0, label: 'Hours' },
  { value: 0, label: 'Minutes' },
  { value: 0, label: 'Seconds' },
];

const DateTimer: FC<{ endDate?: string }> = ({ endDate = '05-31-2023' }) => {
  const difference = useMemo(() => new Date(endDate).getTime() - now, []);
  const [timeDate, setTimeDate] = useState(getTime());

  function getTime() {
    if (difference < 0) return defaultTimeDate;

    const hoursNotFull = difference / 3.6e6;
    const days = Math.floor(hoursNotFull / 24);
    const hours = Math.floor(hoursNotFull) - days * 24;
    const minutes = Math.floor(60 - new Date().getMinutes());
    const seconds = Math.floor(60 - new Date().getSeconds());

    return [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Minutes' },
      { value: seconds, label: 'Seconds' },
    ] as ITimerItem[];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDate(getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Flex>
      {timeDate.map((item, inx, arr) => (
        <TimerItem item={item} dot={inx !== arr.length - 1} key={inx} />
      ))}
    </Flex>
  );
};

export default memo(DateTimer);
