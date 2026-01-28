import { triggerStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';
import arrowDown from '../assets/ic_arrow_down.svg';

interface DropdownTriggerProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  variant?: 'default' | 'icon';
  iconSrc?: string;
  ariaLabel?: string;
  id?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export function DropdownTrigger({
  label,
  disabled,
  onClick,
  variant = 'default',
  iconSrc,
  ariaLabel,
  id,
  ariaExpanded,
  ariaControls,
}: DropdownTriggerProps) {
  const isIcon = variant === 'icon';
  const icon = iconSrc ?? arrowDown;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(triggerStyle({ disabled, variant }))}
      id={id}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-haspopup="listbox"
      aria-label={isIcon ? (ariaLabel ?? label) : undefined}
    >
      {isIcon ? (
        <img src={icon} alt="" aria-hidden className="h-6 w-6" />
      ) : (
        <>
          <span className="whitespace-nowrap text-left">{label}</span>
          <img src={arrowDown} alt="" aria-hidden className="h-4 w-4 self-center" />
        </>
      )}
    </button>
  );
}
