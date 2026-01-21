export type FundingRoundTypeKey =
  | "preA"
  | "seriesA"
  | "seriesB"
  | "seriesC"
  | "seriesIPO"
  | "undisclosedRound"
  | "publicOffering"
  | "total";

export interface FundingRoundTypeMeta {
  name: string;
  dataKey: FundingRoundTypeKey;
  color: string;
}
