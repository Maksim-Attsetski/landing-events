import React, { FC, memo } from 'react';

import { Gap, Flex, Button, Title } from 'UI';
import { DateTimer, Logo } from '.';

const Greeting: FC = () => {
  return (
    <article className='min-h-80'>
      <Gap y={60} />
      <Flex className='justify-center items-center flex-col'>
        <Logo />
        <Gap y={45} />
        <Title>under construction</Title>
        <Gap y={4} />
        <p className='text-text text-center px-3'>
          We're making lots of improvements and will be back soon
        </p>
        <Gap y={16} />
        <DateTimer />
        <Gap y={35} />
        <Flex className='flex-col items-center gap-3'>
          <h3>Check our event page when you wait:</h3>
          <Button>
            <a
              className='absolute top-0 left-0 right-0 bottom-0'
              href='https://github.com/Maksim-Attsetski'
              target='_blank'
            ></a>
            Go to the event
          </Button>
        </Flex>
      </Flex>
    </article>
  );
};

export default memo(Greeting);
