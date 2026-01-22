"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { LineChartApiResponse } from "@/types/chart";
import LineChartSkeleton from "./LineChartSkeleton";
import FundingRoundLineChart1 from "./FundingRoundLineChart1";
import FundingRoundLineChart2 from "./FundingRoundLineChart2";
import { useRenderTime } from "@/shared/hooks/useRenderTime";
import { ChartHeaderPanel, RenderTimeInfo, RenderTimeValue } from "@/shared/ui/ChartHeaderPanel";
import { ButtonGroup, ChartButton } from "@/shared/ui/ChartButton";

const getLineChartData = async (): Promise<LineChartApiResponse> => {
  const url = "/api/mock/chart/line";
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("문제가 발생했습니다!");
  }
  return data;
};

const useFetchLineChartData = () => {
  const { data, isLoading, error } = useQuery<LineChartApiResponse>({
    queryKey: ["lineChartData"],
    queryFn: async () => await getLineChartData(),
    staleTime: 1000 * 60 * 60 * 2,
    retry: 1,
    meta: {
      errorMessage: "라인 차트 데이터를 불러오는데 실패하였습니다. 관리자에게 문의하세요.",
    },
  });
  return { data, isLoading, error };
};

const LineChartPage = () => {
  const { data, isLoading } = useFetchLineChartData();
  const [isLineChart1, setIsLineChart1] = useState(true);
  const { renderTime, handleRendered } = useRenderTime(data?.items ?? []);
  return (
    <>
      <ChartHeaderPanel>
        <ButtonGroup>
          <ChartButton $active={isLineChart1} onClick={() => setIsLineChart1(true)}>
            Line Chart 1
          </ChartButton>
          <ChartButton $active={!isLineChart1} onClick={() => setIsLineChart1(false)}>
            Line Chart 2
          </ChartButton>
        </ButtonGroup>

        <RenderTimeInfo>
          <span>차트 렌더링 소요 시간:</span>
          <RenderTimeValue $isLoading={renderTime === null}>
            {renderTime ? `${renderTime.toFixed(2)} ms` : "측정 중..."}
          </RenderTimeValue>
        </RenderTimeInfo>
      </ChartHeaderPanel>

      {isLoading ? (
        <LineChartSkeleton />
      ) : (
        <>
          {isLineChart1 ? (
            <FundingRoundLineChart1 data={data?.items ?? []} onRendered={handleRendered} />
          ) : (
            <>
              <p
                style={{
                  fontSize: "12px",
                  border: "1px solid #e0e0e0",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                ⓘ 특정 라인만 자세히 보고 싶다면 범례나 그래프의 선을 클릭해 보세요. 선택한 라인만
                강조되며, 다시 클릭하면 전체가 표시됩니다.
              </p>
                {/* 라인차트2 */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default LineChartPage;
