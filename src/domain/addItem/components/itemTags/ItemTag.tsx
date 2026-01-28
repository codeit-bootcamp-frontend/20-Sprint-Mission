import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@src/shared/utils/cn';
import removeIcon from '../assets/ic_X.svg';

const tagStyles = cva(
  'inline-flex h-[36px] items-center rounded-[26px] bg-[#F3F4F6] py-[6px] pl-[16px] pr-[12px]',
  {
    variants: {
      removable: {
        true: 'gap-[10px]',
        false: '',
      },
    },
    defaultVariants: {
      removable: true,
    },
  },
);

const labelStyles = cva(
  "font-['Pretendard'] text-[16px] font-normal leading-[26px] text-[#1F2937]",
);

const removeButtonStyles = cva(
  'inline-flex h-[20px] w-[20px] items-center justify-center rounded-full transition-opacity',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-40',
        false: 'cursor-pointer opacity-100 hover:opacity-70',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface ItemTagProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof tagStyles> {
  label: string;
  onRemove?: () => void;
}

export default function ItemTag({ label, removable, onRemove, className, ...props }: ItemTagProps) {
  const shouldShowRemove = removable ?? true;
  const handleRemove = () => onRemove?.();

  return (
    <div className={cn(tagStyles({ removable: shouldShowRemove }), className)} {...props}>
      <span className={cn(labelStyles())}>#{label}</span>
      {shouldShowRemove && (
        <button
          type="button"
          aria-label={`태그 ${label} 삭제`}
          onClick={handleRemove}
          className={cn(removeButtonStyles({ disabled: !onRemove }))}
          disabled={!onRemove}
        >
          <img src={removeIcon} alt="" aria-hidden className="h-[16px] w-[16px]" />
        </button>
      )}
    </div>
  );
}
