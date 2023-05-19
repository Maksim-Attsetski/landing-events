import s from './EventItem.module.scss';
import React, { Dispatch, FC, SetStateAction, memo, useMemo } from 'react';
import { motion } from 'framer-motion';

import { Gap } from 'UI';
import { constants } from 'utils';

import { IEventItem } from '../AllEvents';

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
      className={[isActive ? s.active : '', s.event].join(' ')}
      animate={
        isActive ? { width: constants.maxWidth } : { width: constants.minWidth }
      }
      initial={false}
      style={{ background: `url(${item.preview})`, backgroundSize: 'cover' }}
    >
      <div className={s.column}>
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), ${colors.main})`,
          }}
          className={s.column__gradient}
        />
        <p className={s.column__text}>{item.name}</p>
        <Gap y={7} />
        <p className={s.column__order}>
          {item.order > 9 ? item.order : '0' + item.order}
        </p>
      </div>
      <motion.div
        animate={isActive ? { x: 0.1, scale: 1 } : { x: -50, scale: 0 }}
        initial={false}
        className={s.info}
      >
        <div className={s.info__order}>0{item.order}</div>
        <div>{item.name}</div>
        <div>{new Date(item.date).toLocaleDateString('ru')}</div>
        <button className={s.info__btn}>More information</button>
      </motion.div>
    </motion.div>
  );
};

export default memo(EventItem);
