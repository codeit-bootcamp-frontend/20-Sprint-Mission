import { useCallback, useState } from 'react';

type OrderBy = 'recent' | 'favorite';

const DEFAULT_ORDER: OrderBy = 'recent';
const FIRST_PAGE = 1;

export function useItemsPageState() {
  const [selectedOrder, setSelectedOrder] = useState<OrderBy>(DEFAULT_ORDER);
  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [likedIds, setLikedIds] = useState<Set<number>>(() => new Set());

  const handleLikeToggle = useCallback(
    (id: number) => (nextLiked: boolean) => {
      setLikedIds((prev) => {
        const next = new Set(prev);
        if (nextLiked) {
          next.add(id);
        } else {
          next.delete(id);
        }
        return next;
      });
    },
    [],
  );

  const applySearch = useCallback(() => {
    setAppliedKeyword(searchInput);
    setCurrentPage(FIRST_PAGE);
  }, [searchInput]);

  const handleSelectOrder = useCallback((value: OrderBy) => {
    setSelectedOrder(value);
    setCurrentPage(FIRST_PAGE);
  }, []);

  return {
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
  };
}
