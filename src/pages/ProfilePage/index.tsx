import { Box, Link, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AttentionMessage from "../../components/AttentionMessage";
import { useAppSelector } from "../../hooks/redux";
import { bytesToGb } from "../../utils/transformBytes";
import GridTable from "../../components/GridTable";
import { useGetUser } from "../../hooks/useGetUser";

const Profile = () => {
  const navigate = useNavigate();
  const { isActivated, userName, email, diskSpace, files } = useAppSelector(
    (state) => state.user
  );

  useGetUser();

  return (
    <Box
      sx={{ p: 3, display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Paper
        elevation={3}
        sx={(theme) => ({
          maxWidth: "1200px",
          mx: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          flexGrow: 1,
          p: 3,
          borderRadius: 3,
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
        >
          Profile
        </Typography>

        <Link
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
          className="flex items-center gap-2 text-blue-500 hover:underline"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Return Back
        </Link>

        {!isActivated && (
          <AttentionMessage message="A confirmation email has been sent to your email address. Please follow the link in the email to activate your account." />
        )}

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="body1" className="p-field">
              <strong>User Name:</strong> {userName}
            </Typography>
            <Typography variant="body1" className="p-field">
              <strong>Email:</strong> {email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="body1" className="p-field">
              <strong>Your available disk space:</strong> {bytesToGb(diskSpace)}{" "}
              Gb
            </Typography>
            <Typography variant="body1" className="p-field">
              <strong>You already uploaded:</strong> {files.length} files
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            gap: "8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", p: 0.5, fontWeight: "bold" }}
          >
            Generated Links
          </Typography>
          <GridTable />
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
