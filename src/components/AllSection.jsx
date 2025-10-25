import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./AllSection.module.css";
import ProductCard from "./ProductCard";
import search from "../assets/search.png";

const AllSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [orderByOption, setOrderByOption] = useState("recent");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const sortedProducts = useMemo(() => {
    return [...allProducts]
      .sort((a, b) => {
        if (orderByOption === "recent") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (orderByOption === "favorite") {
          return b.favoriteCount - a.favoriteCount;
        }
      })
      .filter((product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
  }, [allProducts, orderByOption, searchKeyword]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products"
        );

        setAllProducts(response.data.list);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);
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
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllSection;
