import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import { cn } from '@src/shared/utils/cn';
import heartActiveIcon from './assets/heart_large_active.svg';
import heartInactiveIcon from './assets/heart_large_unActive.svg';

const heartButtonStyles = cva(
  "inline-flex items-center gap-2 rounded-full font-['Pretendard'] transition-colors",
  {
    variants: {
      size: {
        sm: 'text-[12px] leading-[18px]',
        md: 'text-[16px] leading-[22px]',
      },
      liked: {
        true: 'text-rose-600',
        false: 'text-gray-500',
      },
      isDisabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer hover:text-rose-500',
      },
    },
    defaultVariants: {
      size: 'md',
      liked: false,
      isDisabled: false,
    },
  },
);

const heartIconStyles = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface HeartButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick' | 'onToggle' | 'type'>,
    VariantProps<typeof heartButtonStyles> {
  count?: number;
  liked?: boolean;
  onToggle?: (nextLiked: boolean) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
}

export default function HeartButton({
  count,
  liked,
  size,
  disabled,
  onToggle,
  onClick,
  className,
  'aria-label': ariaLabel,
  ...props
}: HeartButtonProps) {
  const resolvedLiked = liked ?? false;
  const resolvedClassName = cn(
    heartButtonStyles({ size, liked: resolvedLiked, isDisabled: Boolean(disabled) }),
    className,
    'box-border',
  );
  const resolvedAriaLabel =
    ariaLabel ??
    `좋아요${typeof count === 'number' ? ` ${count}개` : ''}, ${resolvedLiked ? '활성' : '비활성'}`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;
    onToggle?.(!resolvedLiked);
  };

  return (
    <button
      type="button"
      aria-label={resolvedAriaLabel}
      aria-pressed={resolvedLiked}
      className={resolvedClassName}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className={cn(heartIconStyles({ size }))} aria-hidden>
        <img
          src={resolvedLiked ? heartActiveIcon : heartInactiveIcon}
          alt=""
          className="h-full w-full"
          aria-hidden
        />
      </span>
      {typeof count === 'number' && (
        <span
          className={cn('font-medium text-gray-600', {
            'text-rose-600': resolvedLiked,
          })}
        >
          {count}
        </span>
      )}
    </button>
  );
}
