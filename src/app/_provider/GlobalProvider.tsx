"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import QueryProvider from "./QueryProvider";
import StyledComponentRegistry from "@/styles/StyledComponentRegistry";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

type Props = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  return (
    <QueryProvider>
      <StyledComponentRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentRegistry>
    </QueryProvider>
  );
};

export default GlobalProvider;
