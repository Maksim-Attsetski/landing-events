import React, { Dispatch, FC, SetStateAction, memo, useMemo } from 'react';
import { motion } from 'framer-motion';

import { Gap } from 'UI';
import { constants } from 'utils';

import { IEventItem } from './AllEvents';

const { colors } = constants;

interface IProps {
  item: IEventItem;
  openedItemId: string;
  setOpenedItemId: Dispatch<SetStateAction<string>>;
  constants: {
    minWidth: number;
    maxWidth: number;
  };
}

const EventItem: FC<IProps> = ({
  item,
  openedItemId,
  setOpenedItemId,
  constants,
}) => {
  const isActive = useMemo(
    () => openedItemId === item.id,
    [openedItemId, item.id]
  );

  return (
    <motion.div
      onClick={() => setOpenedItemId(item.id)}
      className={'flex h-[400px] relative cursor-pointer'}
      animate={
        isActive ? { width: constants.maxWidth } : { width: constants.minWidth }
      }
      initial={false}
      style={{
        background: `url(${item.preview})`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`flex relative h-full flex-col px-2 py-4 justify-end ${
          isActive ? 'bg-main' : ''
        }`}
      >
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), ${colors.main})`,
          }}
          className='absolute top-0 left-0 z-[1] right-0 bottom-0'
        />
        <p
          style={{ writingMode: 'vertical-lr' }}
          className='rotate-180 z-[2] text-white text-xl'
        >
          {item.name}
        </p>
        <Gap y={7} />
        <p className='text-center z-[2] font-medium text-white text-xl'>
          {item.order > 9 ? item.order : '0' + item.order}
        </p>
      </div>
      <motion.div
        animate={isActive ? { x: 0.1, scale: 1 } : { x: -50, scale: 0 }}
        initial={false}
        className='text-white relative z-[1] p-6 bg-shadow flex flex-col overflow-hidden justify-end'
      >
        <div
          className='absolute -top-[60px] -left-[30px] -z-[2] opacity-10 font-semibold'
          style={{ fontSize: '150px' }}
        >
          0{item.order}
        </div>
        <div>{item.name}</div>
        <div>{new Date(item.date).toLocaleDateString('ru')}</div>
        <button className='border-2 border-white border-solid py-2 px-7 border-l-8'>
          More information
        </button>
      </motion.div>
    </motion.div>
  );
};

export default memo(EventItem);
