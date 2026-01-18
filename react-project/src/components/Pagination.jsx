import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";

// 페이지네이션 컴포넌트
export function Pagination({
  currentPage,
  totalPage,
  pages,
  onPageClick,
  className = "",
}) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {/* 이전 버튼 */}
      <button
        type="button"
        className="cursor-pointer disabled:opacity-[0.5] disabled:pointer-events-none"
        disabled={currentPage == 1}
        onClick={() => onPageClick(currentPage - 1)}
      >
        <img src={left} />
      </button>

      {/* 페이지 버튼 */}
      {pages.map((it) => (
        <Page
          key={it}
          currentPage={it}
          selected={it == currentPage}
          onClick={onPageClick}
        />
      ))}

      {/* 다음 버튼 */}
      <button
        type="button"
        className="cursor-pointer disabled:opacity-[0.5] disabled:pointer-events-none"
        disabled={currentPage == totalPage}
        onClick={() => onPageClick(currentPage + 1)}
      >
        <img src={right} />
      </button>
    </div>
  );
}

// 개별 페이지 컴포넌트
function Page({ currentPage, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(currentPage)}
      className={`w-10 h-10 rounded-full cursor-pointer text-[16px] leading-[26px] font-semibold ${
        selected
          ? "bg-[#2F80ED] border border-[#2F80ED] text-[#FFFFFF] pointer-events-none"
          : "bg-[#FFFFFF] border border-[#E5E7EB] text-[#6B7280]"
      }`}
    >
      {currentPage}
    </button>
  );
}
