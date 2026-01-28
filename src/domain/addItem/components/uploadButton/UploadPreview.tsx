import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@src/shared/utils/cn';
import removeIcon from '../assets/ic_X.svg';

const previewStyles = cva('relative h-[282px] w-[282px] overflow-hidden rounded-[12px]', {
  variants: {
    outlined: {
      true: 'border border-solid border-[#E5E7EB]',
      false: '',
    },
  },
  defaultVariants: {
    outlined: false,
  },
});

const imageStyles = cva('h-full w-full object-cover');

const removeButtonStyles = cva(
  'absolute right-[8px] top-[8px] inline-flex items-center justify-center transition-opacity',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-40',
        false: 'cursor-pointer opacity-100 hover:opacity-80',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface UploadPreviewProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof previewStyles> {
  src: string;
  alt?: string;
  onRemove?: () => void;
}

export default function UploadPreview({
  src,
  alt = '업로드 이미지',
  onRemove,
  outlined,
  className,
  ...props
}: UploadPreviewProps) {
  return (
    <div className={cn(previewStyles({ outlined }), className)} {...props}>
      <img src={src} alt={alt} className={cn(imageStyles())} />
      <button
        type="button"
        aria-label="이미지 삭제"
        onClick={onRemove}
        className={cn(removeButtonStyles({ disabled: !onRemove }))}
        disabled={!onRemove}
      >
        <img src={removeIcon} alt="" aria-hidden className="h-[24px] w-[24px]" />
      </button>
    </div>
  );
}
