import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@src/shared/utils/cn';
import plusIcon from './assets/ic_plus.svg';

const uploadButtonStyles = cva(
  "flex h-[282px] w-[282px] flex-col items-center justify-center gap-[8px] rounded-[12px] bg-[#F3F4F6] font-['Pretendard'] text-[16px] font-normal leading-[26px] text-[#9CA3AF]",
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface UploadButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'disabled'>,
    VariantProps<typeof uploadButtonStyles> {
  label?: string;
}

export default function UploadButton({
  label = '이미지 등록',
  disabled,
  className,
  type = 'button',
  ...props
}: UploadButtonProps) {
  const resolvedDisabled = !!disabled;
  const resolvedClassName = cn(
    uploadButtonStyles({ disabled: resolvedDisabled }),
    className,
    'box-border',
  );

  return (
    <button type={type} className={resolvedClassName} disabled={resolvedDisabled} {...props}>
      <img src={plusIcon} alt="" aria-hidden className="h-[32px] w-[32px]" />
      <span>{label}</span>
    </button>
  );
}
