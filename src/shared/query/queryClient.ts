import { QueryClient } from '@tanstack/react-query';

const STALE_TIME_MS = 1000 * 60 * 5;
const GC_TIME_MS = 1000 * 60 * 10;
const RETRY_COUNT = 1;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_MS,
      gcTime: GC_TIME_MS,
      retry: RETRY_COUNT,
      refetchOnWindowFocus: false,
    },
  },
});
