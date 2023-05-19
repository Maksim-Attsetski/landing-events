import { assets } from 'assets';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
} from 'react';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  withArrow?: boolean;
}

const Button: FC<IProps> = ({
  children,
  className,
  withArrow = true,
  ...props
}) => {
  return (
    <button
      className={[
        'bg-main text-white py-4 px-6 rounded-3xl flex gap-6 items-center transition-all active:translate-y-1',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {withArrow && <img src={assets.arrowRight} alt={'arrowRight'} />}
    </button>
  );
};

export default memo(Button);
