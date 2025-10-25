import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./AllSection.module.css";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import search from "../assets/search.png";

const AllSection = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderByOption, setOrderByOption] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 반응형 pageSize 설정
  const [pageSize, setPageSize] = useState(10);

  // 화면 크기에 따라 pageSize 변경
  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setPageSize(4); // 모바일: 2열 * 2행
      } else if (width <= 768) {
        setPageSize(6); // 태블릿: 3열 * 2행
      } else {
        setPageSize(10); // 데스크톱: 5열 * 2행
      }
    };

    updatePageSize();
    const mobile = window.matchMedia("(max-width: 480px)");
    const tablet = window.matchMedia("(max-width: 768px)");

    const handleChange = () => updatePageSize();
    mobile.addEventListener("change", handleChange);
    tablet.addEventListener("change", handleChange);

    return () => {
      mobile.removeEventListener("change", handleChange);
      tablet.removeEventListener("change", handleChange);
    };
  }, []);

  // pageSize 변경 시 1페이지로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  // API 호출: 서버에서 정렬, 검색, 페이징 처리
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products",
          {
            params: {
              page: currentPage,
              pageSize: pageSize,
              orderBy: orderByOption,
              keyword: searchKeyword,
            },
          }
        );

        setProducts(response.data.list);
        setTotalCount(response.data.totalCount);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, pageSize, orderByOption, searchKeyword]);
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / pageSize);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className={styles["all-container"]}>
      <div className={styles["all-title-container"]}>
        <div className={styles["all-title"]}>
          <p className={styles["all-title-text"]}>전체 상품</p>
        </div>
        <div className={styles["all-title-right-container"]}>
          <div className={styles["all-title-right-container-left"]}>
            <img src={search} alt="search" />
            <input
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              type="text"
              placeholder="검색할 상품을 입력해주세요."
            />
          </div>

          <div className={styles["all-title-right-container-middle"]}>
            <Link
              to="/additem"
              className={styles["all-title-right-container-middle-button"]}
            >
              상품 등록하기
            </Link>
          </div>

          <div className={styles["all-title-right-container-right"]}>
            <select
              name="orderBy"
              value={orderByOption}
              onChange={(e) => setOrderByOption(e.target.value)}
              className={styles["all-title-right-container-right-select"]}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles["all-products"]}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllSection;
