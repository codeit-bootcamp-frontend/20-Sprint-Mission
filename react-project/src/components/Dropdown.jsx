import { useState } from "react";
import arrowDown from "../assets/images/arrow_down.svg";
import sort from "../assets/images/sort.svg";

export function Dropdown({ className = "", options, value, onSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const currentItem = options.find((it) => it.value == value);

  function onItemClick(item) {
    onSelect(item.value);
    setShowDropdown(false);
  }

  return (
    <div className={`relative h-[42px] ${className}`}>
      <button
        type="button"
        className="cursor-pointer w-full h-full"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="hidden md:flex w-full h-full justify-center items-center border border-[#E5E7EB] bg-[#FFFFFF] text-[16px] leading-[26px] font-normal rounded-[12px]">
          <div className="w-[66px]">{currentItem?.title}</div>
          <img src={arrowDown} />
        </div>
        <div className="block md:hidden border border-[#E5E7EB] p-[9px] bg-[#FFFFFF] rounded-[12px]">
          <img src={sort} />
        </div>
      </button>

      {showDropdown && (
        <div className="mt-1 flex flex-col absolute right-0 bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB]">
          {options.map((item, index) => (
            <DropdownItem key={index} item={item} onClick={onItemClick} />
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={`cursor-pointer flex justify-center font-normal text-[16px] leading-[26px] pt-[9px] pb-[7px] w-[130px] border-t border-t-[#E5E7EB] first:border-t-0`}
    >
      {item.title}
    </button>
  );
}
