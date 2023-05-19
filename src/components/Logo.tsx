import React, { FC, memo } from 'react';

import { Flex, Gap } from 'UI';
import { assets } from 'assets';

const Logo: FC = () => {
  return (
    <Flex>
      <img src={assets.logo} alt='logo' />
      <Gap x={8} />
      <div>
        <h2 className={'font-black text-5xl tracking-2px'}>LEAD</h2>
        <h5 className={'uppercase text-right font-medium tracking-4px'}>
          advisors
        </h5>
      </div>
    </Flex>
  );
};

export default memo(Logo);
