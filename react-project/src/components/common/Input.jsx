export function Input({ className, ...rest }) {
  return (
    <input
      className={`rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] px-[24px] pt-[16px] pb-[14px] text-[#1F2937] placeholder-[#9CA3AF] ${className}`}
      {...rest}
    ></input>
  );
}
