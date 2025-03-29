import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Profile from "./pages/ProfilePage";
import ThemeButton from "./components/ThemeButton";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { logoutUser } from "./redux/reducers/userReducer";
import DownloadPage from "./pages/DownloadPage";

function App() {
  const navigate = useNavigate();
  const { shouldRedirect } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldRedirect) {
      dispatch(logoutUser());
      navigate("/login");
    }
  }, [shouldRedirect]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/download/:filename/:link" element={<DownloadPage />} />
      </Routes>
      <ThemeButton />
    </>
  );
}

export default App;
