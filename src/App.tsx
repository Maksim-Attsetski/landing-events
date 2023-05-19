import React, { FC, memo } from 'react';
import './App.scss';
import { assets } from 'assets';
import { Logo } from 'components';
import { Flex, Gap } from 'UI';

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
          <h2 className='uppercase text-titles text-5xl font-bold'>
            under construction
          </h2>
          <Gap y={4} />
          <p className='text-lg'>
            We're making lots of improvements and will be back soon
          </p>
          <Gap y={16} />
          <div>92 : 11 : 41 : 48</div>
          <Gap y={35} />
          <Flex className='flex-col items-center gap-3'>
            <h3>Check our event page when you wait:</h3>
            <button>go to the event</button>
          </Flex>
        </Flex>
      </main>
      <footer className='bg-main fixed bottom-0 left-0 right-0'>
        <Flex className='justify-between items-center py-12 w-container'>
          <div></div>
          <input
            className='rounded-2xl py-4 px-5 w-max'
            type='text'
            placeholder='Enter your Email and get notified'
          />
          <div className='text-white'>Other events</div>
        </Flex>
      </footer>
    </div>
  );
};

export default memo(App);
