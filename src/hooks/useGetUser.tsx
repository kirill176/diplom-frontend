import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../redux/api/UserAPI";
import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";
import { loginned } from "../redux/reducers/authReducer";
import { loginUser } from "../redux/reducers/userReducer";

export const useGetUser = () => {
  const token = localStorage.getItem("accessToken");
  const { isAuthenticated } = useAppSelector(
    (state: { auth: { isAuthenticated: boolean } }) => state.auth
  );
  const { data, refetch } = useGetUserQuery({}, { skip: !token });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data || isAuthenticated) {
      dispatch(loginned());
      dispatch(loginUser(data));
    }
  }, [data, isAuthenticated]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return refetch;
};
