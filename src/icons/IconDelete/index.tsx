import { useTheme } from "@mui/material";
import type { FC } from "react";

const IconDelete: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#000000";
  return (
    <span className="icon-delete">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 100H29.5C21.25 100 14.75 93.25 14.75 85.25V40C14.75 38.5 15.75 37.5 17.25 37.5C18.75 37.5 19.75 38.5 19.75 40V85.25C19.75 90.75 24.25 95 29.5 95H70C75.5 95 79.75 90.5 79.75 85.25V40C79.75 38.5 80.75 37.5 82.25 37.5C83.75 37.5 84.75 38.5 84.75 40V85.25C84.75 93.25 78 100 70 100Z"
          fill={fillColor}
        />
        <path
          d="M83.25 12.25H64.25C63 5.25 57 0 49.75 0C42.5 0 36.5 5.25 35.25 12.25H16.25C10.5 12.25 6 16.75 6 22.5C6 28.25 10.5 32.5 16.25 32.5H83.5C89.25 32.5 93.75 28 93.75 22.25C93.75 16.5 89 12.25 83.25 12.25ZM49.75 5C54.25 5 58 8 59 12.25H40.25C41.5 8 45.25 5 49.75 5ZM83.25 27.5H16.25C13.5 27.5 11 25.25 11 22.25C11 19.5 13.25 17 16.25 17H83.5C86.25 17 88.75 19.25 88.75 22.25C88.5 25.25 86.25 27.5 83.25 27.5Z"
          fill={fillColor}
        />
        <path
          d="M32.25 87.75C30.75 87.75 29.75 86.75 29.75 85.25V43.5C29.75 42 30.75 41 32.25 41C33.75 41 34.75 42 34.75 43.5V85.25C34.75 86.5 33.5 87.75 32.25 87.75Z"
          fill={fillColor}
        />
        <path
          d="M67.25 87.75C65.75 87.75 64.75 86.75 64.75 85.25V43.5C64.75 42 65.75 41 67.25 41C68.75 41 69.75 42 69.75 43.5V85.25C69.75 86.5 68.5 87.75 67.25 87.75Z"
          fill={fillColor}
        />
        <path
          d="M49.75 87.75C48.25 87.75 47.25 86.75 47.25 85.25V43.5C47.25 42 48.25 41 49.75 41C51.25 41 52.25 42 52.25 43.5V85.25C52.25 86.5 51 87.75 49.75 87.75Z"
          fill={fillColor}
        />
      </svg>
    </span>
  );
};

export default IconDelete;
