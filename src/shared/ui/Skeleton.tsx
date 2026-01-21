import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

type SkeletonProps = {
  $w?: string | number;
  $h?: string | number;
  $radius?: number;
};

export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ $w }) => (typeof $w === "number" ? `${$w}px` : ($w ?? "100%"))};
  height: ${({ $h }) => (typeof $h === "number" ? `${$h}px` : ($h ?? "16px"))};
  border-radius: ${({ $radius }) => ($radius ? `${$radius}px` : "8px")};

  background: linear-gradient(
    90deg,
    rgba(230, 230, 230, 1) 25%,
    rgba(245, 245, 245, 1) 50%,
    rgba(230, 230, 230, 1) 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;
