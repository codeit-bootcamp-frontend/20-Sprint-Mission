import { axiosInstance } from '@shared/apis/axios';
import type { GetItemsParams, GetItemsResponse } from '../types/item';

export const getItems = async (params: GetItemsParams = {}): Promise<GetItemsResponse> => {
  const { page, pageSize, orderBy, keyword } = params;
  const { data } = await axiosInstance.get<GetItemsResponse>('/products', {
    params: {
      page,
      pageSize,
      orderBy,
      keyword: keyword?.trim() || undefined,
    },
  });
  return data;
};
