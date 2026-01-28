import type { KeyboardEvent } from 'react';
import { itemStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';

interface DropdownItemProps {
  label: string;
  selected?: boolean;
  onSelect: () => void;
}

export function DropdownItem({ label, selected, onSelect }: DropdownItemProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <li
      role="option"
      aria-selected={selected}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(itemStyle({ selected }))}
    >
      {label}
    </li>
  );
}
