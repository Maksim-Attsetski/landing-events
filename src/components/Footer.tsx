import { Button, Flex, Input, Modal } from 'UI';
import { assets } from 'assets';
import React, { FC, memo, useState } from 'react';

const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [open, setOpen] = useState<boolean>(true);

  const onBtnClick = () => {
    const regex = /^([\w\d]{2,})@([\w\d]{2,}).([\w\d]{2,})$/;
    const emailIsValid = regex.test(email);

    if (!emailIsValid) {
      return alert('Email: ' + email + ' is not valid');
    }

    setOpen(true);
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <h2 className='text-4xl font-bold text-center uppercase my-4'>
          Success!
        </h2>
        <p className='text-text text-center'>
          You have successfully subscribed to the email newsletter
        </p>
        <Flex className='justify-center'>
          <Button
            withArrow={false}
            className='px-16 my-4'
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Flex>
      </Modal>
      <footer className='bg-main fixed bottom-0 left-0 right-0'>
        <Flex className='justify-center sm:justify-between flex-col sm:flex-row gap-5 items-center py-7 sm:py-12 w-container mx-auto'>
          <div></div>
          <Input
            setValue={setEmail}
            value={email}
            placeholder='Enter your Email and get notified'
            type='email'
            withBtn
            onBtnClick={onBtnClick}
          />
          <Flex className='text-white gap-3 cursor-pointer'>
            <span>Other events</span>
            <img
              src={assets.arrowRight}
              className='rotate-90'
              alt='arrow down'
            />
          </Flex>
        </Flex>
      </footer>
    </>
  );
};

export default memo(Footer);
