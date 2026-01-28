import { cva } from 'class-variance-authority';
import { cn } from '@src/shared/utils/cn';
import searchIcon from './assets/ic_search.svg';
import type { InputHTMLAttributes } from 'react';

const containerStyle = cva(
  "flex items-center gap-[10px] rounded-[12px] bg-[#F3F4F6] px-[16px] py-[9px] font-['Pretendard']",
  {
    variants: {
      size: {
        md: 'h-[42px] w-[325px]',
      },
      disabled: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  },
);

const inputStyle = cva(
  'min-w-0 flex-1 bg-transparent text-[16px] font-normal leading-[26px] text-gray-900 outline-none placeholder:text-[#9CA3AF]',
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
      },
    },
    defaultVariants: {
      align: 'left',
    },
  },
);

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  containerClassName?: string;
  size?: 'md';
  align?: 'left' | 'center';
}

export default function SearchBar({
  containerClassName,
  className,
  size = 'md',
  align = 'left',
  placeholder = '검색할 상품을 입력해주세요',
  disabled,
  'aria-label': ariaLabel,
  ...props
}: SearchBarProps) {
  const resolvedContainerClassName = cn(
    containerStyle({ size, disabled }),
    containerClassName,
    { 'pointer-events-none': disabled },
    'box-border',
  );

  const resolvedInputClassName = cn(inputStyle({ align }), className, 'placeholder:font-normal');

  return (
    <div className={resolvedContainerClassName}>
      <img src={searchIcon} alt="" aria-hidden className="h-6 w-6" />
      <input
        type="search"
        className={resolvedInputClassName}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel ?? '상품 검색'}
        {...props}
      />
    </div>
  );
}
