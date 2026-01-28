import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@src/shared/utils/cn';
import arrowBackIcon from './assets/arrow_back.svg';

const buttonStyles = cva(
  "inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-[8px] px-[23px] py-[12px] font-['Pretendard'] text-[16px] font-semibold leading-[26px] tracking-[0] transition-colors",
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed bg-[#9CA3AF] text-white',
        false: 'bg-[#3692FF] text-white',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      disabled: false,
      fullWidth: false,
    },
  },
);

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  enabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  showBackIcon?: boolean;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  label,
  enabled,
  fullWidth,
  icon,
  showBackIcon = false,
  iconPosition = 'right',
  className,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const resolvedDisabled = disabled ?? (enabled === undefined ? false : !enabled);
  const resolvedIcon =
    showBackIcon && !icon ? (
      <img src={arrowBackIcon} alt="" aria-hidden className="h-5 w-5" />
    ) : (
      icon
    );

  const resolvedClassName = cn(
    buttonStyles({ disabled: resolvedDisabled, fullWidth }),
    className,
    'box-border',
  );

  return (
    <button type={type} className={resolvedClassName} disabled={resolvedDisabled} {...props}>
      {iconPosition === 'left' && resolvedIcon}
      <span>{label}</span>
      {iconPosition === 'right' && resolvedIcon}
    </button>
  );
}
