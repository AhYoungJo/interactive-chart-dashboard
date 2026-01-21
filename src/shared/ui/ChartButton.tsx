import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ChartButton = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.text.secondary)};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.cardBackground};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.primaryDark : theme.colors.light};
    border-color: ${({ theme, $active }) =>
      $active ? theme.colors.primaryDark : theme.colors.primary};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.primary)};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;
