import { useId, useState } from 'react';
import type { DropdownProps } from '../types/types';
import { DropdownTrigger } from '../primitives/DropdownTrigger';
import { DropdownMenu } from '../primitives/DropdownMenu';
import { DropdownItem } from '../primitives/DropdownItem';

/**
 * Dropdown Component
 *
 * @template T
 *
 * @param options
 * 사용자에게 선택지로 노출될 항목 목록입니다.
 * label은 화면에 표시되고, value는 선택 결과로 onSelect에 전달됩니다.
 *
 * @param value
 * 현재 선택된 항목의 value입니다.
 * 전달하지 않으면 미선택 상태로 렌더링됩니다.
 *
 * @param placeholder
 * value가 없을 때 Trigger에 표시되는 안내 텍스트입니다.
 * 예: "정렬 기준", "카테고리 선택"
 *
 * @param onSelect
 * 사용자가 항목을 선택했을 때 호출됩니다.
 * 선택된 항목의 value를 인자로 전달합니다.
 *
 * @param disabled
 * 드롭다운을 클릭할 수 없도록 비활성화합니다.
 */
export function Dropdown<T>({
  options,
  value,
  placeholder = '선택하세요',
  onSelect,
  disabled,
  triggerVariant,
  triggerIconSrc,
  triggerAriaLabel,
  menuClassName,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const triggerId = useId();
  const menuId = useId();

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (selectedValue: T) => {
    onSelect(selectedValue);
    setOpen(false);
  };

  return (
    <div className="relative w-fit">
      <DropdownTrigger
        label={selectedOption?.label ?? placeholder}
        disabled={disabled}
        variant={triggerVariant}
        iconSrc={triggerIconSrc}
        ariaLabel={triggerAriaLabel}
        id={triggerId}
        ariaExpanded={open}
        ariaControls={menuId}
        onClick={() => setOpen((prev) => !prev)}
      />

      <DropdownMenu
        open={open}
        className={menuClassName}
        id={menuId}
        ariaLabelledBy={triggerId}
        onEscape={() => setOpen(false)}
      >
        {options.map((option) => (
          <DropdownItem
            key={String(option.value)}
            label={option.label}
            selected={option.value === value}
            onSelect={() => handleSelect(option.value)}
          />
        ))}
      </DropdownMenu>
    </div>
  );
}
