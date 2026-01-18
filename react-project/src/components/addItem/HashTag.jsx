import x from "../../assets/images/x.svg";

export function HashTag({ tag, className, onDelete }) {
  return (
    <div
      className={`flex items-center gap-[8px] rounded-[26px] bg-[#F3F4F6] text-[#1F2937] text-[16px] leading-[26px] font-normal px-[16px] py-[5px] ${className}`}
    >
      <div>{tag}</div>
      <button type="button" onClick={() => onDelete(tag)}>
        <img src={x} />
      </button>
    </div>
  );
}
