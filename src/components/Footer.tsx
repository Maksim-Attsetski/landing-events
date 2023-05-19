import { Flex, Input } from 'UI';
import React, { FC, memo, useState } from 'react';

const Footer: FC = () => {
  const [email, setEmail] = useState('');

  const onBtnClick = () => {
    const regex = /^([\w\d]{2,})@([\w\d]{2,}).([\w\d]{2,})$/;
    const emailIsValid = regex.test(email);

    if (!emailIsValid) {
      return alert('Email: ' + email + ' is not valid');
    }
    console.log(email);
  };

  return (
    <footer className='bg-main fixed bottom-0 left-0 right-0'>
      <Flex className='justify-between items-center py-12 w-container'>
        <div></div>
        <Input
          setValue={setEmail}
          value={email}
          placeholder='Enter your Email and get notified'
          type='email'
          withBtn
          onBtnClick={onBtnClick}
        />
        <div className='text-white'>Other events</div>
      </Flex>
    </footer>
  );
};

export default memo(Footer);
