"use client";

import React, { useState } from "react";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const StyledComponentRegistry = ({ children }: { children: React.ReactNode }) => {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof document !== "undefined") {
    return <>{children}</>;
  }

  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
};

export default StyledComponentRegistry;
