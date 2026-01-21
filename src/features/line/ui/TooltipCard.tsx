import styled from "styled-components";

export const TooltipCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.tooltip.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.tooltip};
  min-width: 150px;
  opacity: 0.8;
`;

export const TooltipTitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const TooltipLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const TooltipSwatch = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${(p) => p.$color};
  flex: 0 0 auto;
`;

export const TooltipDelta = styled.span<{ $dir: "up" | "down" | "flat" }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-variant-numeric: tabular-nums;
  color: ${({ theme, $dir }) => {
    if ($dir === "up") return theme.colors.danger;
    if ($dir === "down") return theme.colors.primary;
    return theme.colors.text.secondary;
  }};
`;
