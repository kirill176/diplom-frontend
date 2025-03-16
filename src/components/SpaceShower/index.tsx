import { Box, LinearProgress, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { bytesToGb } from "../../utils/bytesToGb";

const SpaceShower = () => {
  const { diskSpace, usedSpace } = useAppSelector((state) => state.user);

  const usedPercentage = diskSpace ? (usedSpace / diskSpace) * 100 : 0;
  console.log(bytesToGb(diskSpace));

  return (
    <Box>
      <Typography>
        Space used: {bytesToGb(usedSpace)} / {bytesToGb(diskSpace)} Gb
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <LinearProgress
          variant="determinate"
          value={usedPercentage}
          sx={{
            height: 10,
            borderRadius: 5,
            minWidth: "300px",
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: usedPercentage > 80 ? "red" : "green",
            },
          }}
        />
        <Typography sx={{ display: "block" }}>
          {usedPercentage.toFixed(2)}% used
        </Typography>
      </Box>
    </Box>
  );
};

export default SpaceShower;
