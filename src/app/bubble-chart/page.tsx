"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ChartApiResponse, CategoryType } from "@/types/chart";
import BubbleChart from "./BubbleChart";
import BubbleChartSkeleton from "./BubbleChartSkeleton";
import { useRenderTime } from "@/shared/hooks/useRenderTime";
import { ChartHeaderPanel, RenderTimeInfo, RenderTimeValue } from "@/shared/ui/ChartHeaderPanel";
import { CategorySelect } from "@/shared/ui/CategorySelect";

const getBubbleChartData = async (category: CategoryType): Promise<ChartApiResponse> => {
  const url = category ? `/api/mock/chart/bubble?category=${category}` : "/api/mock/chart/bubble";
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("문제가 발생했습니다!");
  }
  return data;
};

const useFetchBubbleChartData = (category: CategoryType) => {
  const { data, isLoading, error } = useQuery<ChartApiResponse>({
    queryKey: ["bubbleChartData", category],
    queryFn: async () => await getBubbleChartData(category),
    // 규모(티어) 분류 데이터는 실시간성이 상대적으로 낮다고 가정.
    // 이에, n시간 뒤에 같은 카테고리 재요청 시 캐시한 데이터로 리패치하는 것이 이득임
    staleTime: 1000 * 60 * 60 * 2,
    retry: 1,
    meta: {
      errorMessage: "버블 차트 데이터를 불러오는데 실패하였습니다. 관리자에게 문의하세요.",
    },
  });
  return { data, isLoading, error };
};

const BubbleChartPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("large");
  const { data, isLoading } = useFetchBubbleChartData(selectedCategory);
  const { renderTime, handleRendered } = useRenderTime(data?.items ?? []);

  return (
    <>
      <ChartHeaderPanel>
        <CategorySelect
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
        >
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </CategorySelect>

        <RenderTimeInfo>
          <span>차트 렌더링 소요 시간:</span>
          <RenderTimeValue $isLoading={renderTime === null}>
            {renderTime ? `${renderTime.toFixed(2)} ms` : "측정 중..."}
          </RenderTimeValue>
        </RenderTimeInfo>
      </ChartHeaderPanel>

      {isLoading ? (
        <BubbleChartSkeleton />
      ) : (
        <BubbleChart data={data?.items ?? []} onRendered={handleRendered} />
      )}
    </>
  );
};

export default BubbleChartPage;
