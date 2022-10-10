import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    placement="bottom"
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#112240",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#112240",
    color: "#a8b2d1",
    fontSize: "1.15rem",
  },
}));
