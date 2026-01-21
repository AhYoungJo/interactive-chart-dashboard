export interface ChartDataItem {
  company: string;
  companyNameDisplay: string;
  companyId: number;
  dealAmount: number;
  dealAmountDisplay: string;
  upfrontPayment: number;
  upfrontPaymentDisplay: string;
  dealCount: number;
  companyColorCode: string | null;
}

export interface ChartApiResponse {
  items: ChartDataItem[];
  total: number;
}

export type CategoryType = "large" | "medium" | "small" | "";

export interface CategoryOption {
  value: CategoryType;
  label: string;
}

export interface ChartApiParams {
  category?: CategoryType;
  companyId?: number;
  minDealAmount?: number;
  maxDealAmount?: number;
  minDealCount?: number;
  maxDealCount?: number;
  sortBy?: "dealAmount" | "dealCount" | "upfrontPayment" | "company";
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}

// Line Chart Types
export interface LineChartDataItem {
  date: string;
  preA: number;
  total: number;
  seriesA: number;
  seriesB: number;
  seriesC: number;
  seriesIPO: number;
  undisclosedRound: number;
  publicOffering: number;
  displayAmount: {
    displayPreA: string;
    displaySeriesA: string;
    displaySeriesB: string;
    displaySeriesC: string;
    displaySeriesIPO: string;
    displayTotal: string;
    displayUndisclosedRound: string;
    displayPublicOffering: string;
  };
}

export interface LineChartApiResponse {
  items: LineChartDataItem[];
  total: number;
}
