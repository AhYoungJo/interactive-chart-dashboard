"use client";

import styled from "styled-components";
import { Sidebar } from "@/shared/ui/Sidebar";

const AppShell = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 24px;
`;

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppShell>
      <Sidebar />
      <Main>{children}</Main>
    </AppShell>
  );
};
