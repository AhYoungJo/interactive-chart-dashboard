import { useState, useRef, useCallback, useEffect } from "react";

export const useRenderTime = (data: unknown[]) => {
  const [renderTime, setRenderTime] = useState<number | null>(null);
  const renderStartRef = useRef<number | null>(null);

  const handleRendered = useCallback(() => {
    if (renderStartRef.current == null) return;
    const ms = performance.now() - renderStartRef.current;
    setRenderTime(ms);
    renderStartRef.current = null;
  }, []);

  useEffect(() => {
    renderStartRef.current = performance.now();
    setRenderTime(null);
  }, [data]);

  return { renderTime, handleRendered };
};
