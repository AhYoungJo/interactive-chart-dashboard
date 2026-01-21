import styled from "styled-components";

export const BubbleTooltipCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.tooltip.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.tooltip};
  min-width: 200px;
  opacity: 0.8;
`;

export const BubbleTooltipTitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const BubbleTooltipLine = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
