import { assets } from 'assets';
import React, { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClassName?: string;
  withBtn?: boolean;
}
const Input: FC<IProps> = ({
  containerClassName = '',
  className,
  withBtn = false,
  ...props
}) => {
  return (
    <div className={['relative w-max', containerClassName].join(' ')}>
      <input
        className={[
          `px-5 ${
            withBtn ? 'pr-[46px]' : 'pr-5'
          } min-w-[300px] rounded-3xl py-2`,
          className,
        ].join(' ')}
        {...props}
      />
      {true && (
        <button className='absolute top-1 p-2 right-1 bg-secondary rounded-full'>
          <img className='w-4' src={assets.arrowRight} alt='arrowRight' />
        </button>
      )}
    </div>
  );
};

export default memo(Input);
