import styled from "styled-components";
import { Skeleton } from "@/shared/ui/Skeleton";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BubbleChartSkeleton = () => {
  return (
    <Wrap>
      <Skeleton $w="100%" $h={500} $radius={16} />
    </Wrap>
  );
};

export default BubbleChartSkeleton;
