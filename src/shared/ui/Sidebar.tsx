"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const SidebarWrapper = styled.aside`
  width: 220px;
  min-width: 220px;
  background-color: ${({ theme }) => theme.colors.sidebar.background};
  color: ${({ theme }) => theme.colors.sidebar.text};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.sidebar.activeText : theme.colors.sidebar.activeBg};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.sidebar.activeBg : "transparent"};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? "#d0d6ff" : theme.colors.sidebar.hoverBg};
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.sidebar.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <SidebarWrapper>
      <Title>Charts</Title>
      <Nav>
        <NavItem href="/bubble-chart" $active={isActive("/bubble-chart")}>
          Bubble Chart
        </NavItem>
        <NavItem href="/line-chart" $active={isActive("/line-chart")}>
          Line Chart
        </NavItem>
      </Nav>
    </SidebarWrapper>
  );
};
