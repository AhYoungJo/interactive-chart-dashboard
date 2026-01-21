import { NextRequest, NextResponse } from "next/server";
import lineChartData from "@/data/linechart.json";
import type { LineChartDataItem, LineChartApiResponse } from "@/types/chart";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = lineChartData as LineChartDataItem[];

  const response: LineChartApiResponse = {
    items: data,
    total: data.length,
  };

  return NextResponse.json(response);
}
