import api, { ENDPOINTS } from "@/api";
import useBreakpoint from "@/hooks/useBreakpoint";
import { PAGINATION_ITEMS } from "@/pages/itemsPage/ItemsPage";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./AllProductSection.styles";
import SortButtonContainer from "./SortButtonContainer";

import { PATH } from "@/app/router";
import icLeftArrow from "@/assets/imgs/arrow_left.png";
import icRightArrow from "@/assets/imgs/arrow_right.png";
import icArrowDown from "@/assets/imgs/ic_arrow_down.png";
import icHeart from "@/assets/imgs/ic_heart.png";
import icSearch from "@/assets/imgs/ic_search.png";
import BlueButton from "@/components/common/BlueButton";
import ProductItem from "./ProductItem";

const SORT_OPTIONS = [
  { text: "최신순", value: "recent" },
  { text: "좋아요순", value: "favorite" },
];

const LIKE_ICON = {
  src: icHeart,
  alt: "좋아요",
};

const PRICE_UNIT = "원";

const fetchProducts = async (params) => {
  return await api.get(ENDPOINTS.products, { ...params });
};

const AllProductSection = () => {
  const defaultSort = SORT_OPTIONS[0].text;
  const [productItems, setProductItems] = useState([]);
  const [sortBy, setSortBy] = useState(defaultSort);
  const [totalPage, setTotalPage] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    minPage: 1,
    maxPage: PAGINATION_ITEMS.pageRange,
    current: 1,
  });
  const cacheRef = useRef(new Map());
  const bp = useBreakpoint();

  // 뷰포트별 pageSize를 서버에 그대로 전달
  const showCount = useMemo(() => {
    const { disktop, tablet, mobile } = PAGINATION_ITEMS.itemsPerPage;
    return bp === "mobile" ? mobile : bp === "tablet" ? tablet : disktop;
  }, [bp]);

  // 캐시 키는 쿼리 조합(정렬/페이지/페이지크기)을 모두 포함해야 충돌X
  const cacheKey = useMemo(() => {
    const sort = SORT_OPTIONS.find((v) => v.text === sortBy)?.value;
    const page = currentPage.current;
    const pageSize = showCount;
    return JSON.stringify({ sort, page, pageSize });
  }, [sortBy, currentPage.current, showCount]);

  useEffect(() => {
    setCurrentPage((p) => ({
      ...p,
      current: 1,
      minPage: 1,
      maxPage: PAGINATION_ITEMS.pageRange,
    }));
  }, [showCount]);

  useEffect(() => {
    const sort = SORT_OPTIONS.find((v) => v.text === sortBy)?.value;

    const params = {
      params: {
        page: currentPage.current,
        pageSize: showCount,
        orderBy: sort,
      },
    };

    // 캐시에 있으면 즉시 보여주기
    const cached = cacheRef.current.get(cacheKey);

    if (cached) {
      setProductItems(cached.list);
      setTotalPage(
        Array.from(
          { length: Math.ceil(cached.totalCount / showCount) },
          (_, i) => i + 1
        )
      );
      // 캐시가 있어도 백그라운드 리프레시가 필요하면 여기서 선택적으로 프리패치만 수행
    }

    // 캐시에 없으면 네트워크 요청 후 캐시 저장
    if (!cached) {
      (async () => {
        try {
          const data = await fetchProducts(params);
          cacheRef.current.set(cacheKey, {
            list: data.list,
            totalCount: data.totalCount,
          });
          setProductItems(data.list);
          setTotalPage(
            Array.from(
              { length: Math.ceil(data.totalCount / showCount) },
              (_, i) => i + 1
            )
          );
        } catch (e) {
          if (e.name !== "AbortError") {
            console.error(e);
          }
        }
      })();
    }

    // 다음 페이지 프리패치
    const prefetch = async (pageToPrefetch) => {
      const preKey = JSON.stringify({
        sort,
        page: pageToPrefetch,
        pageSize: showCount,
      });
      if (cacheRef.current.has(preKey)) return;

      try {
        const data = await fetchProducts({
          params: { ...params.params, page: pageToPrefetch },
        });
        cacheRef.current.set(preKey, {
          list: data.list,
          totalCount: data.totalCount,
        });
      } catch (e) {
        console.log(e);
      }
    };

    // 다음 페이지가 있으면 살짝 미리 받아두기
    const nextPage = currentPage.current + 1;
    if (
      nextPage <=
      Math.ceil(
        (cached?.totalCount ?? totalPage.length * showCount) / showCount
      )
    ) {
      prefetch(nextPage);
    }
  }, [cacheKey]);

  const handleSelectSort = (value) => {
    if (sortBy !== value) {
      setSortBy(value);
      // 정렬 변경 시 현재 페이지를 1로 초기화
      setCurrentPage((p) => ({
        ...p,
        current: 1,
        minPage: 1,
        maxPage: PAGINATION_ITEMS.pageRange,
      }));
    }
  };

  const handlePage = (num) =>
    setCurrentPage((pre) => ({ ...pre, current: num }));

  const handleNextPage = () => {
    if (currentPage.maxPage < totalPage.length) {
      setCurrentPage((pre) => ({
        minPage: pre.minPage + PAGINATION_ITEMS.pageRange,
        maxPage: pre.maxPage + PAGINATION_ITEMS.pageRange,
        current: pre.minPage + PAGINATION_ITEMS.pageRange,
      }));
    }
  };

  const handlePrevPage = () => {
    if (currentPage.minPage > 1) {
      setCurrentPage((pre) => ({
        minPage: pre.minPage - PAGINATION_ITEMS.pageRange,
        maxPage: pre.maxPage - PAGINATION_ITEMS.pageRange,
        current: pre.minPage - PAGINATION_ITEMS.pageRange,
      }));
    }
  };

  return (
    <>
      <S.Nav>
        <S.SubTitle>전체 상품</S.SubTitle>
        <S.SearchInputContainer>
          <img src={icSearch} alt="검색" />
          <S.SearchInput placeholder="검색할 상품을 입력해주세요" />
        </S.SearchInputContainer>
        <S.ButtonContainer to={PATH.ADDITEM} as={Link}>
          <BlueButton size="sm" fontSize="sm">
            상품 등록하기
          </BlueButton>
        </S.ButtonContainer>
        <SortButtonContainer options={SORT_OPTIONS} onClick={handleSelectSort}>
          <S.SortButton>
            {sortBy}
            <img src={icArrowDown} alt="정렬 기준 선택" />
          </S.SortButton>
        </SortButtonContainer>
      </S.Nav>
      <S.AllProductContainer>
        {productItems.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            like={LIKE_ICON}
            priceUnit={PRICE_UNIT}
          />
        ))}
      </S.AllProductContainer>
      <S.PageButtonContainer>
        <S.PageButton onClick={handlePrevPage}>
          <img src={icLeftArrow} alt="이전 페이지" />
        </S.PageButton>
        {totalPage
          ?.slice(currentPage.minPage - 1, currentPage.maxPage)
          .map((num) => (
            <S.PageButton
              onClick={() => handlePage(num)}
              key={num}
              $current={num === currentPage.current}
            >
              {num}
            </S.PageButton>
          ))}
        <S.PageButton onClick={handleNextPage}>
          <img src={icRightArrow} alt="다음 페이지" />
        </S.PageButton>
      </S.PageButtonContainer>
    </>
  );
};

export default AllProductSection;
