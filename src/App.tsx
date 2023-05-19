import React, { FC, Fragment, memo } from 'react';
import './App.scss';
import { assets } from 'assets';
import {
  AllEvents,
  DateTimer,
  Footer,
  Greeting,
  Logo,
  TimerItem,
} from 'components';
import { Flex, Gap, Button, Input } from 'UI';

const App: FC = () => {
  return (
    <div>
      <img className='cloud one' src={assets.cloud1} alt='cloud1' />
      <img className='cloud two' src={assets.cloud2} alt='cloud2' />
      <main>
        <Greeting />
        <AllEvents />
      </main>
      <Gap y={80} />
      <Footer />
    </div>
  );
};

export default memo(App);
