import { useState } from "react";
import { BlueButton } from "./BlueButton";
import { Dropdown } from "./Dropdown";
import { Search } from "./Search";
import { useEffect } from "react";
import { api } from "../api/axiosInstance";
import { Product } from "./Product";
import { Pagination } from "./Pagination";
import { useDeviceType } from "../hook/useDeviceType";

const OPTIONS = [
  { title: "최신순", value: "recent" },
  { title: "좋아요순", value: "favorite" },
];

const PAGINATION_SIZE = 5;

export function AllProducts() {
  const deviceType = useDeviceType();
  const pageSize = deviceType == "phone" ? 4 : deviceType == "tablet" ? 6 : 10;
  const [order, setOrder] = useState("recent");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadProduct();
  }, [page, order, pageSize, keyword]);

  async function loadProduct() {
    const url = `products?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${encodeURIComponent(
      keyword
    )}`;
    const res = await api.get(url);
    setProducts(res.data.list);
    const pageCount = Math.floor(
      (res.data.totalCount + pageSize - 1) / pageSize
    );
    setTotalPage(pageCount);
    const pageStart =
      Math.floor((page - 1) / PAGINATION_SIZE) * PAGINATION_SIZE;
    const pageEnd = Math.min(pageStart + PAGINATION_SIZE, pageCount - 1);
    setPages(
      new Array(pageEnd - pageStart + 1)
        .fill(0)
        .map((_, index) => index + pageStart + 1)
    );
  }

  return (
    <div className="flex flex-col items-center mt-[24px] md:mt-[40px] pb-8">
      {/* 전체 상품 헤더 */}
      <div
        className="w-full grid font-bold text-[20px] leading-8 text-[#111827]

        gap-x-[14px]
        gap-y-[8px]
        grid-cols-[1fr_77px_42px]
        grid-rows-2
        [grid-template-areas:'title_button_button''search_search_order']

        md:gap-x-[12px]
        md:grid-cols-[1fr_242px_133px_130px]
        lg:grid-cols-[1fr_325px_133px_130px]
        md:grid-rows-1
        md:[grid-template-areas:'title_search_button_order']
      "
      >
        <div className="[grid-area:title] leading-[42px]">전체 상품</div>

        {/* 검색창 */}
        <Search
          className="[grid-area:search]"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {/* 상품 등록 버튼 */}
        <BlueButton className="[grid-area:button]">상품 등록하기</BlueButton>

        {/* sorting dropdown */}
        <Dropdown
          className="[grid-area:order]"
          options={OPTIONS}
          value={order}
          onSelect={setOrder}
        />
      </div>

      {/* 상품 목록 */}
      <div className="w-full mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-8 md:gap-x-4 md:gap-y-10 lg-x-6">
        {products.map((it) => (
          <Product key={it.id} item={it} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPage={totalPage}
        pages={pages}
        onPageClick={setPage}
        className="mt-10"
      />
    </div>
  );
}
