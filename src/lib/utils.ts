import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface CalendarCellProps {
  children?: ReactNode;
  showSeeAll?: boolean;
  events?: any[];
  bg?: string;
  borderColor?: string;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  style?: BoxProps;
}