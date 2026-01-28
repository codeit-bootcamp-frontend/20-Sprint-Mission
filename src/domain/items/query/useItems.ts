import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { queryKeys } from '@shared/query/queryKeys';
import { getItems } from '../apis/getProducts';
import type { GetItemsParams } from '../types/item';

export function useItems(params: GetItemsParams = {}) {
  return useQuery({
    queryKey: [...queryKeys.items, params],
    queryFn: () => getItems(params),
    placeholderData: keepPreviousData,
  });
}
