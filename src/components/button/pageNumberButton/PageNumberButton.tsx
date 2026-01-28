import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@src/shared/utils/cn';
import leftIcon from './assets/arrow_left.svg';
import rightIcon from './assets/arrow_right.svg';

const pageNumberButtonStyles = cva(
  "inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border font-['Pretendard'] text-[14px] font-medium leading-[22px] transition-colors",
  {
    variants: {
      kind: {
        prev: '',
        next: '',
        page: '',
      },
      isDisabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer hover:border-gray-300',
      },
      isActive: {
        true: 'border-[#2F80ED] bg-[#2F80ED] text-white',
        false: 'border-gray-200 text-gray-800',
      },
    },
    defaultVariants: {
      kind: 'page',
      isDisabled: false,
      isActive: false,
    },
  },
);

const iconStyles = cva('h-4 w-4', {
  variants: {
    kind: {
      prev: '',
      next: '',
    },
  },
});

export interface PageNumberButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'>,
    VariantProps<typeof pageNumberButtonStyles> {
  kind?: 'prev' | 'next' | 'page';
  page?: number | string;
  isActive?: boolean;
  'aria-label'?: string;
}

export default function PageNumberButton({
  kind = 'page',
  page,
  isActive,
  disabled,
  className,
  'aria-label': ariaLabel,
  ...props
}: PageNumberButtonProps) {
  const resolvedClassName = cn(
    pageNumberButtonStyles({ kind, isDisabled: disabled, isActive }),
    className,
    'box-border',
  );

  const content =
    kind === 'prev' ? (
      <img src={leftIcon} alt="" aria-hidden className={cn(iconStyles({ kind }))} />
    ) : kind === 'next' ? (
      <img src={rightIcon} alt="" aria-hidden className={cn(iconStyles({ kind }))} />
    ) : (
      <span>{page}</span>
    );

  const resolvedAriaLabel =
    ariaLabel ??
    (kind === 'prev'
      ? '이전 페이지'
      : kind === 'next'
        ? '다음 페이지'
        : `페이지 ${page ?? ''}`.trim());

  return (
    <button
      type="button"
      className={resolvedClassName}
      disabled={disabled}
      aria-current={kind === 'page' && isActive ? 'page' : undefined}
      aria-label={resolvedAriaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
