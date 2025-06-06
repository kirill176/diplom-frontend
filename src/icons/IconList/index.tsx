import { useTheme } from "@mui/material";
import type { FC } from "react";

const IconList: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#231F20";
  return (
    <span className="icon-list">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 55 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.3471 15.5595H3.69182C2.13882 15.5595 0.879868 16.8184 0.879868 18.3714V18.6674C0.879868 20.2204 2.13882 21.4794 3.69182 21.4794H51.3471C52.9001 21.4794 54.159 20.2204 54.159 18.6674V18.3714C54.159 16.8184 52.9001 15.5595 51.3471 15.5595Z"
          fill={fillColor}
        />
        <path
          d="M51.3471 30.3593H3.69182C2.13882 30.3593 0.879868 31.6182 0.879868 33.1712V33.4672C0.879868 35.0202 2.13882 36.2792 3.69182 36.2792H51.3471C52.9001 36.2792 54.159 35.0202 54.159 33.4672V33.1712C54.159 31.6182 52.9001 30.3593 51.3471 30.3593Z"
          fill={fillColor}
        />
        <path
          d="M51.3471 0.75972H3.69182C2.13882 0.75972 0.879868 2.01867 0.879868 3.57168V3.86767C0.879868 5.42067 2.13882 6.67963 3.69182 6.67963H51.3471C52.9001 6.67963 54.159 5.42067 54.159 3.86767V3.57168C54.159 2.01867 52.9001 0.75972 51.3471 0.75972Z"
          fill={fillColor}
        />
      </svg>
    </span>
  );
};

export default IconList;
