import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';

import { assets } from 'assets';
import { AllEvents, Footer, Greeting } from 'components';
import { Gap } from 'UI';
import { fadeUp } from 'utils';

import './App.scss';

const App: FC = () => {
  return (
    <div>
      <motion.img
        {...fadeUp(-100)}
        className='cloud one'
        src={assets.cloud1}
        alt='cloud1'
      />
      <motion.img
        {...fadeUp(100)}
        className='cloud two'
        src={assets.cloud2}
        alt='cloud2'
      />
      <main>
        <Greeting />
        <AllEvents />
      </main>
      <Gap y={170} />
      <Footer />
    </div>
  );
};

export default memo(App);
