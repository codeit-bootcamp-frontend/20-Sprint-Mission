export interface DropdownOption<T = string> {
  label: string;
  value: T;
}

export interface DropdownProps<T = string> {
  options: DropdownOption<T>[];
  value?: T;
  placeholder?: string;
  onSelect: (value: T) => void;
  disabled?: boolean;
  triggerVariant?: 'default' | 'icon';
  triggerIconSrc?: string;
  triggerAriaLabel?: string;
  menuClassName?: string;
}
