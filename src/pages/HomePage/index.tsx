import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useRefreshQuery } from "../../redux/api/AuthAPI";
import { loginUser } from "../../redux/reducers/userReducer";
import { loginned } from "../../redux/reducers/authReducer";
import HeaderComponent from "../../components/HeaderComponent";

const HomePage: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useRefreshQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && !isLoading && !isError) {
      const { accessToken, user } = data;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      dispatch(loginned());
      dispatch(loginUser(user));
    } else if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, data, isLoading, isError, dispatch]);

  return (
    <Box>
      <HeaderComponent />
    </Box>
  );
};

export default HomePage;
