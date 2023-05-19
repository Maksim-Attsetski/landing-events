import React, { FC, memo, useMemo, useRef, useState } from 'react';

import { Flex, Gap, Title } from 'UI';
import { assets } from 'assets';

import EventItem from './EventItem';
import { constants } from 'utils';

export interface IEventItem {
  id: string;
  name: string;
  order: number;
  date: number;
  preview: string;
}

const allEvents: IEventItem[] = [
  {
    id: '1',
    date: new Date('02-13-2023').getTime(),
    name: 'Hawaiian party',
    order: 1,
    preview: assets.event1bg,
  },
  {
    id: '2',
    date: new Date('03-19-2023').getTime(),
    name: 'Mafia party',
    order: 2,
    preview: assets.event1bg,
  },
  {
    id: '3',
    date: new Date('04-08-2023').getTime(),
    name: 'Party',
    order: 3,
    preview: assets.event1bg,
  },
  {
    id: '4',
    date: new Date('05-27-2023').getTime(),
    name: 'Party on the beach',
    order: 4,
    preview: assets.event1bg,
  },
  {
    id: '5',
    date: new Date('06-03-2023').getTime(),
    name: 'Home Security',
    order: 5,
    preview: assets.event1bg,
  },
  {
    id: '6',
    date: new Date('06-25-2023').getTime(),
    name: 'Network Design & Implementation',
    order: 6,
    preview: assets.event1bg,
  },
  {
    id: '7',
    date: new Date('07-05-2023').getTime(),
    name: 'System Design & Engineering',
    order: 7,
    preview: assets.event1bg,
  },
  {
    id: '8',
    date: new Date('08-08-2023').getTime(),
    name: 'Client Care Plans',
    order: 8,
    preview: assets.event1bg,
  },
];

const AllEvents: FC = () => {
  const [openedItemId, setOpenedItemId] = useState<string>(allEvents[0].id);

  const itemConstants = useMemo(() => {
    const maxWidth = constants.sizes.maxContainerWidth;
    const width = window.innerWidth > maxWidth ? maxWidth : window.innerWidth;
    return {
      minWidth: 44,
      maxWidth: width * 0.9 - 44 * allEvents.length,
    };
  }, []);

  return (
    <article
      className={`min-h-80 ${constants.class.allEvent} w-container mx-auto`}
    >
      <Title>All events</Title>
      <Gap y={20} />
      <Flex className='w-full'>
        {allEvents.map((event) => (
          <EventItem
            constants={itemConstants}
            item={event}
            openedItemId={openedItemId}
            setOpenedItemId={setOpenedItemId}
          />
        ))}
      </Flex>
    </article>
  );
};

export default memo(AllEvents);
