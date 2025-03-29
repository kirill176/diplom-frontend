import { useTheme } from "@mui/material";
import type { FC } from "react";

const IconDotsMenu: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#000000";
  return (
    <span className="icon-dots-menu">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.625 50C40.625 55.1688 44.8312 59.375 50 59.375C55.1688 59.375 59.375 55.1688 59.375 50C59.375 44.8312 55.1688 40.625 50 40.625C44.8312 40.625 40.625 44.8312 40.625 50Z"
          fill={fillColor}
        />
        <path
          d="M40.625 81.25C40.625 86.4188 44.8312 90.625 50 90.625C55.1688 90.625 59.375 86.4188 59.375 81.25C59.375 76.0812 55.1688 71.875 50 71.875C44.8312 71.875 40.625 76.0812 40.625 81.25Z"
          fill={fillColor}
        />
        <path
          d="M40.625 18.75C40.625 23.9188 44.8312 28.125 50 28.125C55.1688 28.125 59.375 23.9188 59.375 18.75C59.375 13.5812 55.1688 9.375 50 9.375C44.8312 9.375 40.625 13.5812 40.625 18.75Z"
          fill={fillColor}
        />
      </svg>
    </span>
  );
};

export default IconDotsMenu;
