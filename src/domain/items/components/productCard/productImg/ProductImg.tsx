import { cva, type VariantProps } from 'class-variance-authority';
import type { ImgHTMLAttributes } from 'react';
import { cn } from '@src/shared/utils/cn';

const productImgStyles = cva('block w-full object-cover', {
  variants: {
    radius: {
      none: 'rounded-none',
      sm: 'rounded-[8px]',
      md: 'rounded-[12px]',
      lg: 'rounded-[16px]',
    },
  },
  defaultVariants: {
    radius: 'none',
  },
});

const productImgWrapperStyles = cva('relative overflow-hidden bg-gray-100', {
  variants: {
    ratio: {
      portrait: 'aspect-[4/5]',
      square: 'aspect-square',
      landscape: 'aspect-[4/3]',
      auto: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-[8px]',
      md: 'rounded-[12px]',
      lg: 'rounded-[16px]',
    },
  },
  defaultVariants: {
    ratio: 'portrait',
    radius: 'none',
  },
});

export interface ProductImgProps
  extends
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>,
    VariantProps<typeof productImgStyles>,
    VariantProps<typeof productImgWrapperStyles> {
  src: string;
  alt: string;
  priority?: boolean;
  wrapperClassName?: string;
}

export default function ProductImg({
  src,
  alt,
  priority,
  radius,
  ratio,
  className,
  wrapperClassName,
  ...props
}: ProductImgProps) {
  const resolvedWrapperClassName = cn(
    productImgWrapperStyles({ ratio, radius }),
    wrapperClassName,
    'box-border',
  );
  const resolvedImgClassName = cn(productImgStyles({ radius }), className, 'box-border');
  const resolvedLoading = props.loading ?? (priority ? 'eager' : 'lazy');
  const resolvedDecoding = props.decoding ?? 'async';
  const resolvedFetchPriority = props.fetchPriority ?? (priority ? 'high' : 'auto');

  return (
    <div className={resolvedWrapperClassName}>
      <img
        src={src}
        alt={alt}
        className={resolvedImgClassName}
        loading={resolvedLoading}
        decoding={resolvedDecoding}
        fetchPriority={resolvedFetchPriority}
        {...props}
      />
    </div>
  );
}
