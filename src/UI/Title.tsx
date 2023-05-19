import React, { FC, PropsWithChildren, memo } from 'react';
import { motion } from 'framer-motion';

import { fadeUp } from 'utils';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.h2
      {...fadeUp(0, 100, 0.2, true)}
      className='uppercase text-titles text-titleS text-center font-bold'
    >
      {children}
    </motion.h2>
  );
};

export default memo(Title);
