import type { TooltipContentProps } from "recharts";
import React from "react";
import { LineChartDataItem } from "@/types/chart";
import {
  TooltipCard,
  TooltipTitle,
  TooltipLine,
  TooltipSwatch,
} from "@/features/line/ui/TooltipCard";
import { transferToDisplayKey } from "@/features/line/utils/formatters";

const LineTooltip = ({ active, payload, label }: TooltipContentProps<number, string>) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <TooltipCard>
      <TooltipTitle>{label}</TooltipTitle>
      {payload.map((item) => {
        const row = item.payload as LineChartDataItem;
        const displayKey = transferToDisplayKey(String(item.dataKey));
        const displayText =
          row.displayAmount?.[displayKey as keyof LineChartDataItem["displayAmount"]] ?? "-";
        return (
          <TooltipLine key={item.dataKey}>
            <TooltipSwatch $color={item.color} />
            {item.name ?? item.dataKey}: {displayText}
          </TooltipLine>
        );
      })}
    </TooltipCard>
  );
};

export default LineTooltip;
