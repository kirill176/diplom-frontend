import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, FormEvent, useState } from "react";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../../redux/api/AuthAPI";
import { AuthRoutes } from "../../models/api";
import { useAppDispatch } from "../../hooks/redux";
import { loginned } from "../../redux/reducers/authReducer";
import { loginUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils/getErrors";

type AuthFormProps = {
  type: AuthRoutes;
};

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [login, { error: loginError }] = useLoginMutation();
  const [registration, { error: registrationError }] =
    useRegistrationMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password && email) {
      const callback = type === AuthRoutes.Login ? login : registration;
      try {
        const { accessToken, user } = await callback({
          email,
          password,
        }).unwrap();
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        dispatch(loginned());
        dispatch(loginUser(user));
        navigate("/");
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginY: "20px",
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        {loginError && (
          <Typography variant="body2" color="error">
            Error: {getErrorMessage(loginError)}
          </Typography>
        )}
        {registrationError && (
          <Typography variant="body2" color="error">
            Error: {getErrorMessage(registrationError)}
          </Typography>
        )}
      </Box>

      <Button
        type="submit"
        variant="contained"
        disabled={password.length === 0 || email.length === 0}
        sx={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        {type === AuthRoutes.Login ? "Login" : "Registration"}
      </Button>
    </Box>
  );
};

export default AuthForm;
