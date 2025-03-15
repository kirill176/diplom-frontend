import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AttentionMessage from "../../components/AttentionMessage";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", padding: "16px" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Profile
      </Typography>
      <Link
        to=""
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
        className="flex items-center gap-2 text-blue-500 hover:underline"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Return Back
      </Link>
      <AttentionMessage message="A confirmation email has been sent to your email address. Please follow the link in the email to activate your account." />
    </Box>
  );
};

export default Profile;
