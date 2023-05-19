import { motion } from 'framer-motion';
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  memo,
} from 'react';

interface IProps extends PropsWithChildren {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const closeClassName = 'w-[2px] h-7 bg-slate-400 absolute left-0 top-0';

const Modal: FC<IProps> = ({ children, open, setOpen }) => {
  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <motion.div
      onClick={onCloseModal}
      className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-shadow z-50'
      animate={
        open
          ? { opacity: 1, pointerEvents: 'all' }
          : { opacity: 0, pointerEvents: 'none' }
      }
      initial={false}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-lg py-3 px-4 flex flex-col w-modal'
        animate={open ? { y: 0, transition: { type: 'spring' } } : { y: -100 }}
        initial={false}
      >
        <div
          className='h-7 w-4 self-end relative cursor-pointer'
          onClick={onCloseModal}
        >
          <div className={closeClassName + ' rotate-45'} />
          <div className={closeClassName + ' -rotate-45'} />
        </div>
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default memo(Modal);
