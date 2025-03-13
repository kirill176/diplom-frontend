import { Box, Button, TextField } from "@mui/material";
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

type AuthFormProps = {
  type: AuthRoutes;
};

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [login] = useLoginMutation();
  const [registration] = useRegistrationMutation();
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
        localStorage.setItem("accessToken", accessToken);
        dispatch(loginned());
        dispatch(loginUser(user));
        navigate("/");
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginY: "25px",
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button type="submit" variant="outlined" sx={{ width: "100%" }}>
        {type === AuthRoutes.Login ? "Login" : "Registration"}
      </Button>
    </Box>
  );
};

export default AuthForm;
