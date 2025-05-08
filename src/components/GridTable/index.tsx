import {
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { FC, useState } from "react";
import { baseUrl } from "../../constants/api";
import { format } from "date-fns";
import { useAppSelector } from "../../hooks/redux";
import IconDeactivate from "../../icons/IconDeactivate";
import { useDeactivateLinkMutation } from "../../redux/api/FileAPI";
import { useGetUser } from "../../hooks/useGetUser";

const GridTable: FC = () => {
  const { generatedLinks } = useAppSelector((state) => state.user);
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const [deactivate] = useDeactivateLinkMutation();
  const refetch = useGetUser();
  const handleDeactivate = async (id: string) => {
    await deactivate({ id });
    await refetch();
  };

  const handleCopy = (link: string) => {
    setClickedLink(link);
    navigator.clipboard.writeText(`${baseUrl}/download/${link}`);
    setTimeout(() => setClickedLink(null), 500);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        overflow: "auto",
        padding: "0 4px",
        border: "none",
        borderRadius: "8px",
      }}
    >
      <Table sx={{ borderCollapse: "separate" }}>
        <TableHead sx={{ position: "sticky", top: "0.1px", zIndex: 1 }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Link</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>File</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Expires</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Attempts</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Deactivate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generatedLinks.map((link) => (
            <TableRow key={link._id}>
              <Tooltip title="Click to copy" arrow={false} enterDelay={500}>
                <TableCell
                  sx={{
                    maxWidth: 220,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                    transition: "all 0.2s, ease 0s",
                    color:
                      clickedLink === link.link
                        ? "success.main"
                        : "primary.main",
                    backgroundColor:
                      clickedLink === link.link
                        ? "rgba(0, 255, 0, 0.1)"
                        : "transparent",
                    padding: 1,
                  }}
                  onClick={() => handleCopy(link.link)}
                >
                  <span>{`${baseUrl}/download/${link.link}`}</span>
                </TableCell>
              </Tooltip>
              <TableCell
                sx={{
                  maxWidth: 150,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {link.fileName}
              </TableCell>
              <TableCell>
                {format(new Date(link.createdAt), "dd MMM yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(link.expirationDate), "dd MMM yyyy")}
              </TableCell>
              <TableCell>
                <Chip
                  label={
                    link.attempts > 3 ||
                    new Date(link.expirationDate) <= new Date()
                      ? "Expired"
                      : link.used
                      ? "Used"
                      : "Not used"
                  }
                  color={
                    link.attempts > 3 ||
                    new Date(link.expirationDate) <= new Date()
                      ? "error"
                      : link.used
                      ? "success"
                      : "default"
                  }
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={`${link.attempts}`}
                  color={link.attempts > 3 ? "error" : "info"}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <Tooltip
                onClick={() => handleDeactivate(link._id)}
                title={
                  link.attempts > 3 ||
                  new Date(link.expirationDate) <= new Date()
                    ? "Link already expired"
                    : "Click to deactivate link"
                }
                arrow={false}
                enterDelay={500}
              >
                <TableCell>
                  <IconButton
                    sx={{ maxWidth: 35 }}
                    disabled={
                      link.attempts > 3 ||
                      new Date(link.expirationDate) <= new Date()
                    }
                  >
                    <IconDeactivate
                      disabled={
                        link.attempts > 3 ||
                        new Date(link.expirationDate) <= new Date()
                      }
                    />
                  </IconButton>
                </TableCell>
              </Tooltip>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GridTable;
