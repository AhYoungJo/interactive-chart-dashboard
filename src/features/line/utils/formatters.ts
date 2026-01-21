/**
 * Y축 틱 포맷터 - 백만 단위로 변환
 */
export const formatYAxisTick = (v: number): string => `$ ${(v / 1e6).toFixed(1)} M`;

/**
 * dataKey를 displayKey로 변환
 */
export const transferToDisplayKey = (dataKey: string): string => {
  switch (dataKey) {
    case "preA":
      return "displayPreA";
    case "seriesA":
      return "displaySeriesA";
    case "seriesB":
      return "displaySeriesB";
    case "seriesC":
      return "displaySeriesC";
    case "seriesIPO":
      return "displaySeriesIPO";
    case "undisclosedRound":
      return "displayUndisclosedRound";
    case "publicOffering":
      return "displayPublicOffering";
    case "total":
      return "displayTotal";
    default:
      return "";
  }
};

// 증감률 계산
export const formatDeltaMoney = (v: number): string => {
  const sign = v > 0 ? "+" : v < 0 ? "−" : "";
  const abs = Math.abs(v);

  if (abs >= 1e9) return `${sign}$ ${(abs / 1e9).toFixed(1)} B`;
  if (abs >= 1e6) return `${sign}$ ${(abs / 1e6).toFixed(1)} M`;
  if (abs >= 1e3) return `${sign}$ ${(abs / 1e3).toFixed(1)} K`;
  return `${sign}$ ${abs.toFixed(0)}`;
};
