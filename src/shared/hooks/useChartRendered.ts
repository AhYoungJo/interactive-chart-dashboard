import { useEffect } from "react";

export const useChartRendered = (data: unknown[], onRendered: () => void) => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (onRendered) {
        onRendered();
      }
    });
    return () => cancelAnimationFrame(id);
  }, [data, onRendered]);
};
