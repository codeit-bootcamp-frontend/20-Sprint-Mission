import type { Item } from '../types/item';

export function normalizeKeyword(keyword: string) {
  return keyword.trim().toLowerCase();
}

export function filterItemsByKeyword(items: Item[], keyword: string) {
  const normalizedKeyword = normalizeKeyword(keyword);
  if (!normalizedKeyword) {
    return items;
  }
  return items.filter((item) => item.name.toLowerCase().includes(normalizedKeyword));
}
