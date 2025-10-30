import api, { ENDPOINTS } from "@/api";
import useBreakpoint from "@/hooks/useBreakpoint";
import { ITEMS_DATA, PAGINATION_ITEMS } from "@/pages/ItemsPage";
import { useEffect, useMemo, useRef, useState } from "react";
import AllProductCard from "./AllProductCard";
import * as S from "./AllProductSection.styles";
import SortButtonContainer from "./SortButtonContainer";

const fetchProducts = async (params, signal) => {
  // api.get에서 AbortController의 signal을 옵션으로 전달할 수 있게 해두셨다면 아래처럼 넘겨주세요.
  return await api.get(ENDPOINTS.products, { ...params, signal });
};

const AllProductSection = () => {
  const defaultSort = ITEMS_DATA.sections.all.sort.options[0].text;
  const [productItems, setProductItems] = useState([]);
  const [sortBy, setSortBy] = useState(defaultSort);
  const [totalPage, setTotalPage] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    minPage: 1,
    maxPage: 5,
    current: 1,
  });
  const bp = useBreakpoint();

  // 뷰포트별 pageSize를 서버에 그대로 전달
  const showCount = useMemo(() => {
    const { disktop, tablet, mobile } = ITEMS_DATA.sections.all.itemsPerPage;
    return bp === "mobile" ? mobile : bp === "tablet" ? tablet : disktop;
  }, [bp]);

  // 캐시: key => { list, totalCount }
  const cacheRef = useRef(new Map());

  // 캐시 키는 쿼리 조합(정렬/페이지/페이지크기)을 모두 포함해야 충돌X
  const cacheKey = useMemo(() => {
    const sort = ITEMS_DATA.sections.all.sort.options.find(
      (v) => v.text === sortBy
    )?.value;
    const page = currentPage.current;
    const pageSize = showCount;
    return JSON.stringify({ sort, page, pageSize });
  }, [sortBy, currentPage.current, showCount]);

  useEffect(() => {
    const sort = ITEMS_DATA.sections.all.sort.options.find(
      (v) => v.text === sortBy
    )?.value;

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

    // 4) 인접 페이지 프리패치 (다음 페이지 정도)
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
        <S.SubTitle>{ITEMS_DATA.sections.all.title}</S.SubTitle>
        <S.SearchInputContainer>
          <img
            src={ITEMS_DATA.sections.all.search.src}
            alt={ITEMS_DATA.sections.all.search.alt}
          />
          <S.SearchInput
            placeholder={ITEMS_DATA.sections.all.search.searchPlaceholder}
          />
        </S.SearchInputContainer>
        <S.AddProductButton>
          {ITEMS_DATA.sections.all.addItem}
        </S.AddProductButton>
        <SortButtonContainer onClick={handleSelectSort}>
          <S.SortButton>
            {sortBy}
            <img src={ITEMS_DATA.sections.all.sortSrc} />
          </S.SortButton>
        </SortButtonContainer>
      </S.Nav>

      <S.AllProductContainer>
        {productItems.map((item) => (
          <AllProductCard
            key={item.id}
            item={item}
            like={ITEMS_DATA.actions.like}
            priceUnit={ITEMS_DATA.actions.priceUnit}
          />
        ))}
      </S.AllProductContainer>
      <S.PageButtonContainer>
        <S.PageButton onClick={handlePrevPage}>
          <img
            src={PAGINATION_ITEMS.icLeft.src}
            alt={PAGINATION_ITEMS.icLeft.alt}
          />
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
          <img
            src={PAGINATION_ITEMS.icRigit.src}
            alt={PAGINATION_ITEMS.icRigit.alt}
          />
        </S.PageButton>
      </S.PageButtonContainer>
    </>
  );
};

export default AllProductSection;
