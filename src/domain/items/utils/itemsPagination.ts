const FIRST_PAGE = 1;

export function getTotalPages(totalCount: number, pageSize: number) {
  return Math.max(FIRST_PAGE, Math.ceil(totalCount / pageSize));
}

export function getPageGroupRange(currentPage: number, totalPages: number, pageGroupSize: number) {
  const pageGroupStart =
    Math.floor((currentPage - FIRST_PAGE) / pageGroupSize) * pageGroupSize + FIRST_PAGE;
  const pageGroupEnd = Math.min(pageGroupStart + pageGroupSize - 1, totalPages);

  return { pageGroupStart, pageGroupEnd };
}
