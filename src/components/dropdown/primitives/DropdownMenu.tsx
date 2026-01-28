import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { menuStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';

interface DropdownMenuProps {
  open: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
  onEscape?: () => void;
}

export function DropdownMenu({
  open,
  children,
  className,
  id,
  ariaLabelledBy,
  onEscape,
}: DropdownMenuProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const resolvedClassName = cn(menuStyle(), className, 'box-border');

  useEffect(() => {
    if (!open) return;
    const listEl = listRef.current;
    if (!listEl) return;
    const options = Array.from(listEl.querySelectorAll<HTMLElement>('[role="option"]'));
    if (!options.length) return;
    const selected = options.find((option) => option.getAttribute('aria-selected') === 'true');
    (selected ?? options[0]).focus();
  }, [open]);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (!open) return;
    const listEl = listRef.current;
    if (!listEl) return;
    const options = Array.from(listEl.querySelectorAll<HTMLElement>('[role="option"]'));
    if (!options.length) return;

    const currentIndex = options.indexOf(document.activeElement as HTMLElement);
    const fallbackIndex = options.findIndex(
      (option) => option.getAttribute('aria-selected') === 'true',
    );
    const baseIndex = currentIndex >= 0 ? currentIndex : Math.max(fallbackIndex, 0);

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      options[(baseIndex + 1) % options.length].focus();
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      options[(baseIndex - 1 + options.length) % options.length].focus();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      options[0].focus();
    }
    if (event.key === 'End') {
      event.preventDefault();
      options[options.length - 1].focus();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      onEscape?.();
    }
  };

  if (!open) return null;

  return (
    <ul
      id={id}
      role="listbox"
      aria-labelledby={ariaLabelledBy}
      ref={listRef}
      onKeyDown={handleKeyDown}
      className={resolvedClassName}
    >
      {children}
    </ul>
  );
}
