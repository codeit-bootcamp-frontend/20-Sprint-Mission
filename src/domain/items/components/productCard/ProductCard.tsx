import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { Card, CardActions, CardContent, CardMedia } from '@src/components/card';
import HeartButton from '@src/components/button/heartButton';
import { cn } from '@src/shared/utils/cn';
import ProductImg from './productImg';

const productCardStyles = cva('', {
  variants: {
    size: {
      sm: 'w-full',
      md: 'w-full',
      lg: 'w-full',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const titleStyles = cva("font-['Pretendard'] font-medium text-gray-800", {
  variants: {
    size: {
      sm: 'text-[14px] leading-[24px]',
      md: 'text-[14px] leading-[24px]',
      lg: 'text-[14px] leading-[24px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const priceStyles = cva("font-['Pretendard'] font-bold text-gray-800", {
  variants: {
    size: {
      sm: 'text-[16px] leading-[26px]',
      md: 'text-[16px] leading-[26px]',
      lg: 'text-[16px] leading-[26px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const contentStyles = cva('gap-[6px] px-0 pt-[6px]', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const actionStyles = cva('mt-[-8px] px-0 pb-0 text-gray-500', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ProductCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof productCardStyles> {
  imageUrl: string;
  imageAlt?: string;
  imagePriority?: boolean;
  title: string;
  price?: string;
  likeCount?: number;
  isLiked?: boolean;
  onLikeToggle?: (nextLiked: boolean) => void;
  showLike?: boolean;
}

export default function ProductCard({
  imageUrl,
  imageAlt,
  imagePriority,
  title,
  price,
  likeCount,
  isLiked,
  onLikeToggle,
  showLike,
  size,
  className,
  ...props
}: ProductCardProps) {
  const shouldShowLike = showLike ?? true;
  const resolvedLikeCount = likeCount ?? 0;
  const resolvedClassName = cn(productCardStyles({ size }), className, 'box-border');
  const resolvedContentClassName = cn(contentStyles({ size }), 'box-border');
  const resolvedActionClassName = cn(actionStyles({ size }), 'box-border');

  return (
    <Card
      surface="flat"
      size={size}
      clickable
      className={cn(resolvedClassName, 'border-0')}
      {...props}
    >
      <CardMedia aspect="square" className="w-full">
        <ProductImg
          src={imageUrl}
          alt={imageAlt ?? title}
          priority={imagePriority}
          ratio="square"
          radius="lg"
          wrapperClassName="h-full w-full"
          className="h-full w-full object-cover"
        />
      </CardMedia>
      <CardContent size={size} className={resolvedContentClassName}>
        <p className={cn(titleStyles({ size }), 'line-clamp-1')}>{title}</p>
        {price && <p className={cn(priceStyles({ size }), 'line-clamp-1')}>{price}</p>}
      </CardContent>
      {shouldShowLike && (
        <CardActions size={size} className={resolvedActionClassName}>
          <HeartButton
            size="sm"
            liked={isLiked}
            count={resolvedLikeCount}
            onToggle={onLikeToggle}
          />
        </CardActions>
      )}
    </Card>
  );
}
