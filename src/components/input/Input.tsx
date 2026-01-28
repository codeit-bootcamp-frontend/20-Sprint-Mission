import { cva, type VariantProps } from 'class-variance-authority';
import type {
  InputHTMLAttributes,
  KeyboardEvent,
  TextareaHTMLAttributes,
  CompositionEvent,
} from 'react';
import { useRef } from 'react';
import { cn } from '@src/shared/utils/cn';

const fieldStyles = cva(
  "w-full rounded-[12px] bg-[#F3F4F6] px-[24px] py-[16px] font-['Pretendard'] text-[16px] font-normal leading-[26px] text-gray-900 outline-none placeholder:text-[#9CA3AF]",
  {
    variants: {
      size: {
        md: 'h-[56px]',
        lg: 'h-[282px]',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  },
);

type TagSubmitHandler = (value: string) => void;

type BaseProps = VariantProps<typeof fieldStyles> & {
  taggable?: boolean;
  onTagSubmit?: TagSubmitHandler;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCompositionStart?: (event: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCompositionEnd?: (event: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type InputFieldProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onKeyDown'> & {
    multiline?: false;
  };

type TextareaFieldProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'onKeyDown'> & {
    multiline: true;
  };

export type InputProps = InputFieldProps | TextareaFieldProps;

const getTrimmedValue = (value: string) => value.trim();

export default function Input({
  size,
  disabled,
  className,
  taggable = false,
  onTagSubmit,
  multiline,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  ...props
}: InputProps) {
  const resolvedSize = size ?? (multiline ? 'lg' : 'md');
  const isComposingRef = useRef(false);

  const handleCompositionStart = (
    event: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    isComposingRef.current = true;
    onCompositionStart?.(event);
  };

  const handleCompositionEnd = (
    event: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    isComposingRef.current = false;
    onCompositionEnd?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onKeyDown?.(event);
    if (
      !taggable ||
      event.key !== 'Enter' ||
      isComposingRef.current ||
      event.nativeEvent.isComposing
    ) {
      return;
    }
    event.preventDefault();
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = getTrimmedValue(target.value);
    if (!value) {
      return;
    }
    onTagSubmit?.(value);
  };

  const resolvedClassName = cn(
    fieldStyles({ size: resolvedSize, disabled }),
    className,
    { 'resize-none': multiline },
    'box-border',
  );

  if (multiline) {
    return (
      <textarea
        className={resolvedClassName}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      type="text"
      className={resolvedClassName}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}
