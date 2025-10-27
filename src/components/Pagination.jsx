import styles from "./Pagination.module.css";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

// 페이지네이션 컴포넌트: < 1 2 3 4 5 >
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 표시할 페이지 번호 배열 계산 (현재 페이지 중심으로 최대 5개)
  const getPageNumbers = () => {
    const pages = [];
    // 시작 페이지: 현재 페이지 - 2 (최소 1)
    let startPage = Math.max(1, currentPage - 2); //Math.max(a, b)는 a와 b 중 큰 값을 반환
    // 끝 페이지: 시작 + 4 (최대 totalPages)
    let endPage = Math.min(totalPages, startPage + 4); //Math.min(a, b)는 a와 b 중 작은 값을 반환

    // 총 페이지가 5개 미만일 때 시작 페이지 재조정
    // 예: 총 7페이지, 현재 6페이지 → [3, 4, 5, 6, 7] 표시
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    // startPage부터 endPage까지 배열에 추가
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers(); // 표시할 페이지 번호 배열
  const hasPrevious = currentPage > 1; // 이전 페이지 존재 여부
  const hasNext = currentPage < totalPages; // 다음 페이지 존재 여부

  return (
    <div className={styles.pagination}>
      {/* 이전 버튼: 1페이지에서 비활성화 */}
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevious}
      >
        <img src={arrowLeft} alt="이전" />
      </button>

      {/* 페이지 번호 버튼들: 현재 페이지는 active 클래스 적용 */}
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼: 마지막 페이지에서 비활성화 */}
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        <img src={arrowRight} alt="다음" />
      </button>
    </div>
  );
};

export default Pagination;
