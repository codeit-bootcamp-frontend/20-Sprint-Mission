import { useMemo } from 'react';
import type { Item } from '../types/item';
import { filterItemsByKeyword } from '../utils/itemsFilter';
import { getPageGroupRange, getTotalPages } from '../utils/itemsPagination';

type UseItemsPageDerivedParams = {
  items?: Item[];
  totalCount?: number;
  pageSize: number;
  currentPage: number;
  keyword: string;
  pageGroupSize: number;
};

export function useItemsPageDerived({
  items = [],
  totalCount = 0,
  pageSize,
  currentPage,
  keyword,
  pageGroupSize,
}: UseItemsPageDerivedParams) {
  const totalPages = useMemo(() => getTotalPages(totalCount, pageSize), [totalCount, pageSize]);

  const filteredItems = useMemo(() => filterItemsByKeyword(items, keyword), [items, keyword]);

  const { pageGroupStart, pageGroupEnd } = useMemo(
    () => getPageGroupRange(currentPage, totalPages, pageGroupSize),
    [currentPage, totalPages, pageGroupSize],
  );

  return { totalPages, filteredItems, pageGroupStart, pageGroupEnd };
}
