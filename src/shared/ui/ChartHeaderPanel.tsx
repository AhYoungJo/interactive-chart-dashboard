import styled from "styled-components";

export const ChartHeaderPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const RenderTimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const RenderTimeValue = styled.span<{ $isLoading?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme, $isLoading }) =>
    $isLoading ? theme.colors.text.muted : theme.colors.primary};
  font-family: "Courier New", monospace;
`;
