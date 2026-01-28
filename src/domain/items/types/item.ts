export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
  ownerId: number;
  ownerNickname: string;
  createdAt: string;
}

export interface GetItemsResponse {
  totalCount: number;
  list: Item[];
}

export interface GetItemsParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'favorite' | 'recent';
  keyword?: string;
}
