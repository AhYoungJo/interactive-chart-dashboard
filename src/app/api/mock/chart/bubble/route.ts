import { NextRequest, NextResponse } from "next/server";
import bubbleChartData from "@/data/bubblechart.json";
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

  let filteredData = bubbleChartData as ChartDataItem[];

  if (category && ["large", "medium", "small"].includes(category)) {
    filteredData = filteredData.filter((item) => getCategory(item.dealAmount) === category);
  }

  const response: ChartApiResponse = {
    items: filteredData,
    total: filteredData.length,
  };

  return NextResponse.json(response);
}
