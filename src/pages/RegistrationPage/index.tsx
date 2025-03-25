import { Paper, Typography } from "@mui/material";
import LogoComponent from "../../components/Auth/LogoComponent";
import AuthForm from "../../components/Auth/AuthForm";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../models/api";

const RegistrationPage = () => {
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
        Registration
      </Typography>
      <AuthForm type={AuthRoutes.Registration} />
      <Typography sx={{ paddingTop: "15px", fontSize: "14px", color: "gray" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#1976d2",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </Typography>
    </Paper>
  );
};

export default RegistrationPage;
