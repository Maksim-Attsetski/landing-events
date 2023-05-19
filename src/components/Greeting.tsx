import React, { FC, memo } from 'react';

import { Gap, Flex, Button, Title } from 'UI';
import { DateTimer, Logo } from '.';
import { motion } from 'framer-motion';
import { fadeUp } from 'utils';

const Greeting: FC = () => {
  return (
    <article className='h-screen'>
      <Gap y={60} />
      <Flex className='justify-center items-center flex-col'>
        <Logo />
        <Gap y={45} />
        <Title>under construction</Title>
        <Gap y={4} />
        <motion.div {...fadeUp(0, 100, 0.25)}>
          <p className='text-text text-center px-3'>
            We're making lots of improvements and will be back soon
          </p>
        </motion.div>
        <Gap y={16} />
        <motion.div {...fadeUp(0, 100, 0.35)}>
          <DateTimer />
        </motion.div>
        <Gap y={35} />
        <motion.div {...fadeUp(0, 100, 0.5)}>
          <Flex className='flex-col items-center gap-3'>
            <h3>Check our event page when you wait:</h3>
            <Button className='relative'>
              <a
                rel='noreferrer'
                className='absolute top-0 left-0 right-0 bottom-0'
                href='https://github.com/Maksim-Attsetski'
                target='_blank'
              />
              Go to the event
            </Button>
          </Flex>
        </motion.div>
      </Flex>
    </article>
  );
};

export default memo(Greeting);
