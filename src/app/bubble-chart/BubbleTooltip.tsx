import type { TooltipContentProps } from "recharts";
import React from "react";
import {
  BubbleTooltipCard,
  BubbleTooltipTitle,
  BubbleTooltipLine,
} from "@/features/bubble/ui/BubbleTooltipCard";

const BubbleTooltip = ({ active, payload }: TooltipContentProps<number, string>) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <BubbleTooltipCard>
      <BubbleTooltipTitle>{data.companyNameDisplay}</BubbleTooltipTitle>
      <BubbleTooltipLine>Deal Amount: {data.dealAmountDisplay}</BubbleTooltipLine>
      <BubbleTooltipLine>Deal Count: {data.dealCount} deals</BubbleTooltipLine>
      <BubbleTooltipLine>Upfront Payment: {data.upfrontPaymentDisplay}</BubbleTooltipLine>
    </BubbleTooltipCard>
  );
};

export default BubbleTooltip;
