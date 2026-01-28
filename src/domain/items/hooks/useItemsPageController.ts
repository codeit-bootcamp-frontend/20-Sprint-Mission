import {
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';
import { useItems } from '../query/useItems';
import { useItemsPageDerived } from './useItemsPageDerived';
import { useItemsPageState } from './useItemsPageState';

const BREAKPOINT_MD = 768;
const BREAKPOINT_LG = 1024;
const PAGE_SIZE_SM = 4;
const PAGE_SIZE_MD = 6;
const PAGE_SIZE_LG = 10;
const BEST_PAGE_SIZE_SM = 1;
const BEST_PAGE_SIZE_MD = 2;
const BEST_PAGE_SIZE_LG = 4;
const PAGE_GROUP_SIZE = 5;
const FIRST_PAGE = 1;
const SSR_WIDTH_FALLBACK = 1024;

function getResponsiveSizes(width: number) {
  return {
    pageSize:
      width >= BREAKPOINT_LG ? PAGE_SIZE_LG : width >= BREAKPOINT_MD ? PAGE_SIZE_MD : PAGE_SIZE_SM,
    bestPageSize:
      width >= BREAKPOINT_LG
        ? BEST_PAGE_SIZE_LG
        : width >= BREAKPOINT_MD
          ? BEST_PAGE_SIZE_MD
          : BEST_PAGE_SIZE_SM,
  };
}

function subscribeToResize(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWindowWidth() {
  return window.innerWidth;
}

function getServerWidth() {
  return SSR_WIDTH_FALLBACK;
}

export function useItemsPageController() {
  const {
    selectedOrder,
    appliedKeyword,
    searchInput,
    currentPage,
    likedIds,
    setSearchInput,
    setCurrentPage,
    handleLikeToggle,
    applySearch,
    handleSelectOrder,
  } = useItemsPageState();

  const width = useSyncExternalStore(subscribeToResize, getWindowWidth, getServerWidth);
  const { pageSize, bestPageSize } = useMemo(() => getResponsiveSizes(width), [width]);
  const trimmedKeyword = useMemo(() => appliedKeyword.trim(), [appliedKeyword]);

  useEffect(() => {
    setCurrentPage(FIRST_PAGE);
  }, [pageSize, setCurrentPage]);

  const bestItemsParams = useMemo(
    () => ({
      page: FIRST_PAGE,
      pageSize: bestPageSize,
      orderBy: 'favorite' as const,
    }),
    [bestPageSize],
  );
  const itemsParams = useMemo(
    () => ({
      page: currentPage,
      pageSize,
      orderBy: selectedOrder,
      keyword: trimmedKeyword ? trimmedKeyword : undefined,
    }),
    [currentPage, pageSize, selectedOrder, trimmedKeyword],
  );

  const bestItemsQuery = useItems(bestItemsParams);
  const itemsQuery = useItems(itemsParams);

  const { totalPages, filteredItems, pageGroupStart, pageGroupEnd } = useItemsPageDerived({
    items: itemsQuery.data?.list,
    totalCount: itemsQuery.data?.totalCount,
    pageSize,
    currentPage,
    keyword: trimmedKeyword,
    pageGroupSize: PAGE_GROUP_SIZE,
  });

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    },
    [setSearchInput],
  );
  const handleSearchInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        applySearch();
      }
    },
    [applySearch],
  );
  const handlePrevPage = useCallback(() => {
    setCurrentPage((page) => Math.max(FIRST_PAGE, page - 1));
  }, [setCurrentPage]);
  const handleNextPage = useCallback(() => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  }, [setCurrentPage, totalPages]);

  const pageCount = Math.max(0, pageGroupEnd - pageGroupStart + 1);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => pageGroupStart + index);

  return {
    selectedOrder,
    searchInput,
    currentPage,
    likedIds,
    filteredItems,
    totalPages,
    pageNumbers,
    bestItemsQuery,
    itemsQuery,
    setCurrentPage,
    handleLikeToggle,
    handleSelectOrder,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handlePrevPage,
    handleNextPage,
  };
}
