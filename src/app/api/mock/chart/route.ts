import { NextRequest, NextResponse } from "next/server";
import chartData from "@/data/linechart.json";
import type { ChartDataItem, ChartApiResponse } from "@/types/chart";

const CATEGORY_THRESHOLDS = {
  large: 5000000000,
  medium: 2000000000,
};

function getCategory(dealAmount: number): string {
  if (dealAmount >= CATEGORY_THRESHOLDS.large) return "large";
  if (dealAmount >= CATEGORY_THRESHOLDS.medium) return "medium";
  return "small";
}

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const companyId = searchParams.get("companyId");
  const minDealAmount = searchParams.get("minDealAmount");
  const maxDealAmount = searchParams.get("maxDealAmount");
  const minDealCount = searchParams.get("minDealCount");
  const maxDealCount = searchParams.get("maxDealCount");
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder");
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  let filteredData = chartData as unknown as ChartDataItem[];

  // 카테고리 필터링 처리
  if (category && ["large", "medium", "small"].includes(category)) {
    filteredData = filteredData.filter((item) => getCategory(item.dealAmount) === category);
  }

  // 회사 ID 필터링 처리
  if (companyId) {
    filteredData = filteredData.filter((item) => item.companyId === parseInt(companyId, 10));
  }

  // 거래 금액 범위 필터링 처리
  if (minDealAmount) {
    filteredData = filteredData.filter((item) => item.dealAmount >= parseFloat(minDealAmount));
  }
  // 거래 건수 범위 필터링 처리
  if (maxDealAmount) {
    filteredData = filteredData.filter((item) => item.dealAmount <= parseFloat(maxDealAmount));
  }

  // 정렬 처리
  if (minDealCount) {
    filteredData = filteredData.filter((item) => item.dealCount >= parseInt(minDealCount, 10));
  }
  if (maxDealCount) {
    filteredData = filteredData.filter((item) => item.dealCount <= parseInt(maxDealCount, 10));
  }

  // 페이지네이션 처리
  if (sortBy) {
    const validSortFields = ["dealAmount", "dealCount", "upfrontPayment", "company"];
    if (validSortFields.includes(sortBy)) {
      filteredData = [...filteredData].sort((a, b) => {
        const aValue = a[sortBy as keyof ChartDataItem];
        const bValue = b[sortBy as keyof ChartDataItem];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortOrder === "desc" ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
        }

        return 0;
      });
    }
  }

  const total = filteredData.length;

  if (offset) {
    filteredData = filteredData.slice(parseInt(offset, 10));
  }
  if (limit) {
    filteredData = filteredData.slice(0, parseInt(limit, 10));
  }

  const response: ChartApiResponse = {
    items: filteredData,
    total,
  };

  return NextResponse.json(response);
}
