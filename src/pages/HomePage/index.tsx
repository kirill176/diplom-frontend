import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box>
      <Typography variant="h1">Home Page</Typography>
    </Box>
  );
};

export default HomePage;
