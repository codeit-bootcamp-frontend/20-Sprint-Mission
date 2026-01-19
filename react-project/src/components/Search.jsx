import searchImg from "../assets/images/search-img.svg";

export function Search({ className = "", ...rest }) {
  return (
    <div
      className={`flex rounded-[12px] bg-[#F3F4F6] h-[42px] items-center gap-1 px-4 ${className}`}
    >
      <img src={searchImg} className="w-6 h-6 " />
      <input
        placeholder="검색할 상품을 입력해주세요"
        className="flex-1 font-normal text-[16px] leading-[26px] text-[#1F2937] placeholder-[#9CA3AF] border-none outline-none"
        {...rest}
      />
    </div>
  );
}
