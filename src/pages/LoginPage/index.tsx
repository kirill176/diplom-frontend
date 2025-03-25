import { Paper, Typography } from "@mui/material";
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
    <Paper
      elevation={6}
      sx={(theme) => ({
        maxWidth: "500px",
        width: "90%",
        borderRadius: "12px",
        padding: "40px",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: `0px 10px 30px ${theme.palette.customColors.shadow}`,
        border: `1px solid ${theme.palette.customColors.border}`,
      })}
    >
      <LogoComponent />
      <Typography variant="h4" fontWeight="bold" color="primary" mb={2}>
        Login
      </Typography>
      <AuthForm type={AuthRoutes.Login} />
      <Typography sx={{ paddingTop: "15px", fontSize: "14px", color: "gray" }}>
        Don't have an account?{" "}
        <Link
          to="/registration"
          style={{
            color: "#1976d2",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Register
        </Link>
      </Typography>
    </Paper>
  );
};

export default LoginPage;
