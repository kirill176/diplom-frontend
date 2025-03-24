import { Box, Typography } from "@mui/material";
import LogoComponent from "../../components/Auth/LogoComponent";
import AuthForm from "../../components/Auth/AuthForm";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../models/api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { resetRedirect } from "../../redux/reducers/authReducer";

const LoginPage = () => {
  const { shouldRedirect } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (shouldRedirect) {
      dispatch(resetRedirect());
    }
  }, [shouldRedirect]);

  return (
    <Box
      sx={{
        maxWidth: "800px",
        minWidth: "400px",
        border: "2px solid #ABBDE0",
        borderRadius: "8px",
        paddingX: "15px",
        paddingY: "30px",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <LogoComponent />
      <Typography variant="h3">Login</Typography>
      <AuthForm type={AuthRoutes.Login} />
      <Typography sx={{ paddingTop: "10px" }}>
        You have no account? <Link to="/registration">Regstration</Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
