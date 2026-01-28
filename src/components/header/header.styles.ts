import { cva } from 'class-variance-authority';

export const headerContainer = cva(
  'w-full h-[70px] flex items-center justify-between px-4 md:px-6 border-b border-gray-200 bg-white',
);

export const navItem = cva('text-[18px] leading-[26px] font-bold tracking-[0] transition-colors', {
  variants: {
    active: {
      true: 'text-primary-100',
      false: 'text-gray-700 hover:text-gray-900',
    },
  },
  defaultVariants: {
    active: false,
  },
});
export const profileImage = cva('w-10 h-10 rounded-full object-cover cursor-pointer');
