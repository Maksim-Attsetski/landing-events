import React, { FC, Fragment, memo } from 'react';
import './App.scss';
import { assets } from 'assets';
import { Footer, Logo, Timer } from 'components';
import { Flex, Gap, Button, Input } from 'UI';

const App: FC = () => {
  return (
    <div>
      <img className='cloud one' src={assets.cloud1} alt='cloud1' />
      <img className='cloud two' src={assets.cloud2} alt='cloud2' />
      <main>
        <Gap y={60} />
        <Flex className='justify-center items-center flex-col'>
          <Logo />
          <Gap y={45} />
          <h2 className='uppercase text-titles text-titleS text-center font-bold'>
            under construction
          </h2>
          <Gap y={4} />
          <p className='text-text text-center px-3'>
            We're making lots of improvements and will be back soon
          </p>
          <Gap y={16} />
          <Flex>
            {[
              {
                value: 92,
                label: 'Days',
              },
              {
                value: 11,
                label: 'Hours',
              },
              {
                value: 41,
                label: 'Minutes',
              },
              {
                value: 48,
                label: 'Seconds',
              },
            ].map(({ label, value }, inx, arr) => (
              <Timer
                label={label}
                value={value}
                dot={inx !== arr.length - 1}
                key={inx}
              />
            ))}
          </Flex>
          <Gap y={35} />
          <Flex className='flex-col items-center gap-3'>
            <h3>Check our event page when you wait:</h3>
            <Button>Go to the event</Button>
          </Flex>
        </Flex>
      </main>
      <Footer />
    </div>
  );
};

export default memo(App);
