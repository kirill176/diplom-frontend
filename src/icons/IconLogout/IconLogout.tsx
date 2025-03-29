import { useTheme } from "@mui/material";
import type { FC } from "react";

const IconLogout: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#000000";
  return (
    <span className="icon-logout">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 112 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.311752 70.2767C0.311752 72.121 1.04441 73.8898 2.34854 75.194C3.65267 76.4981 5.42146 77.2307 7.26578 77.2307H60.0468L44.0526 93.1555C43.4008 93.8019 42.8834 94.5711 42.5304 95.4185C42.1773 96.2659 41.9956 97.1748 41.9956 98.0928C41.9956 99.0108 42.1773 99.9198 42.5304 100.767C42.8834 101.615 43.4008 102.384 44.0526 103.03C44.699 103.682 45.4682 104.199 46.3156 104.552C47.163 104.905 48.0719 105.087 48.9899 105.087C49.9079 105.087 50.8169 104.905 51.6643 104.552C52.5117 104.199 53.2808 103.682 53.9273 103.03L81.7434 75.2141C82.3765 74.5527 82.8728 73.7729 83.2037 72.9192C83.8993 71.2262 83.8993 69.3272 83.2037 67.6342C82.8728 66.7806 82.3765 66.0007 81.7434 65.3394L53.9273 37.5233C53.2789 36.8749 52.5092 36.3606 51.662 36.0096C50.8149 35.6587 49.9069 35.4781 48.9899 35.4781C48.073 35.4781 47.165 35.6587 46.3178 36.0096C45.4707 36.3606 44.701 36.8749 44.0526 37.5233C43.4042 38.1716 42.8899 38.9414 42.539 39.7885C42.1881 40.6357 42.0075 41.5437 42.0075 42.4606C42.0075 43.3776 42.1881 44.2855 42.539 45.1327C42.8899 45.9799 43.4042 46.7496 44.0526 47.398L60.0468 63.3227H7.26578C5.42146 63.3227 3.65267 64.0553 2.34854 65.3595C1.04441 66.6636 0.311752 68.4324 0.311752 70.2767ZM90.7141 0.736465H21.1738C15.6409 0.736465 10.3345 2.93443 6.42211 6.84683C2.50972 10.7592 0.311752 16.0656 0.311752 21.5985V42.4606C0.311752 44.3049 1.04441 46.0737 2.34854 47.3779C3.65267 48.682 5.42146 49.4146 7.26578 49.4146C9.1101 49.4146 10.8789 48.682 12.183 47.3779C13.4871 46.0737 14.2198 44.3049 14.2198 42.4606V21.5985C14.2198 19.7542 14.9525 17.9854 16.2566 16.6813C17.5607 15.3772 19.3295 14.6445 21.1738 14.6445H90.7141C92.5584 14.6445 94.3272 15.3772 95.6313 16.6813C96.9355 17.9854 97.6681 19.7542 97.6681 21.5985V118.955C97.6681 120.799 96.9355 122.568 95.6313 123.872C94.3272 125.176 92.5584 125.909 90.7141 125.909H21.1738C19.3295 125.909 17.5607 125.176 16.2566 123.872C14.9525 122.568 14.2198 120.799 14.2198 118.955V98.0928C14.2198 96.2485 13.4871 94.4797 12.183 93.1756C10.8789 91.8714 9.1101 91.1388 7.26578 91.1388C5.42146 91.1388 3.65267 91.8714 2.34854 93.1756C1.04441 94.4797 0.311752 96.2485 0.311752 98.0928V118.955C0.311752 124.488 2.50972 129.794 6.42211 133.707C10.3345 137.619 15.6409 139.817 21.1738 139.817H90.7141C96.247 139.817 101.553 137.619 105.466 133.707C109.378 129.794 111.576 124.488 111.576 118.955V21.5985C111.576 16.0656 109.378 10.7592 105.466 6.84683C101.553 2.93443 96.247 0.736465 90.7141 0.736465Z"
          fill={fillColor}
        />
      </svg>
    </span>
  );
};

export default IconLogout;
