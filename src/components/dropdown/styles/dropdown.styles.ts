import { cva } from 'class-variance-authority';

export const triggerStyle = cva(
  "rounded-[12px] border border-solid border-gray-200 box-border transition font-['Pretendard']",
  {
    variants: {
      variant: {
        default:
          'grid h-[42px] min-w-[130px] w-auto grid-cols-[1fr_auto] items-center gap-[10px] px-[20px] py-[8px] text-[16px] font-normal leading-[26px] text-gray-800',
        icon: 'flex h-[42px] w-[42px] items-center justify-center p-0',
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-100 text-gray-400',
        false: 'cursor-pointer bg-white hover:bg-gray-50',
      },
    },
    defaultVariants: {
      disabled: false,
      variant: 'default',
    },
  },
);

export const menuStyle = cva(
  'absolute z-10 mt-1 min-w-full w-max rounded-[12px] border border-solid border-gray-200 bg-white shadow-md',
);

export const itemStyle = cva(
  "flex h-[42px] w-full cursor-pointer items-center justify-center px-[20px] py-[8px] text-center text-[16px] font-normal leading-[26px] text-gray-800 box-border font-['Pretendard'] hover:bg-gray-100",
  {
    variants: {
      selected: {
        true: 'bg-gray-100 font-medium',
        false: '',
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
