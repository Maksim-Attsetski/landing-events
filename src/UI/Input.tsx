import { assets } from 'assets';
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  memo,
} from 'react';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClassName?: string;
  withBtn?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  onBtnClick?: () => void;
}

const Input: FC<IProps> = ({
  containerClassName = '',
  className,
  withBtn = false,
  setValue,
  onBtnClick = () => {},
  ...props
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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
        onChange={onChange}
      />
      {true && (
        <button
          onClick={onBtnClick}
          className='absolute top-1 p-2 right-1 bg-secondary rounded-full'
        >
          <img className='w-4' src={assets.arrowRight} alt='arrowRight' />
        </button>
      )}
    </div>
  );
};

export default memo(Input);
