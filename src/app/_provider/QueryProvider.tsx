"use client";

import React from "react";

import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (_error, query) => {
      console.error("Query error:", _error);
      alert(query.meta?.errorMessage || "오류가 발생하였습니다. 관리자에게 문의하세요."); // 패치 중 에러 났을 때 대처 방법 더 고민해보기
    },
  }),
});

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
