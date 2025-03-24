import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import { bytesToKb, bytesToMb } from "../../utils/transformBytes";
import { FileType } from "../../models/user";
import IconDotsMenu from "../../icons/IconDotsMenu";
import { format } from "date-fns";
import FileMenu from "../FileMenu";
import { getIcon } from "./getIcon";

const FileComponent: FC<FileType> = (file) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const icon = getIcon(file.type.split("/")[0], file.type, file.name);

  return (
    <Card
      sx={{
        width: "150px",
        height: "200px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          width: "150px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          wordBreak: "break-word",
        }}
      >
        <Box sx={{ maxWidth: "100px", maxHeight: "100px" }}>{icon}</Box>
        <Typography
          variant="body2"
          sx={{
            display: "block",
            maxWidth: "100px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {file.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {file.size < 1024 ** 2
            ? `${bytesToKb(file.size)} KB`
            : `${bytesToMb(file.size)} MB`}
        </Typography>
        {file.createdAt && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              position: "absolute",
              right: "5px",
              bottom: "5px",
              fontSize: "11px",
              color: "#757575",
            }}
          >
            {format(new Date(file.createdAt), "MMMM dd, yyyy")}
          </Typography>
        )}
      </CardContent>
      <IconButton
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          width: "30px",
          height: "30px",
        }}
        onClick={() => setIsShow(!isShow)}
      >
        <IconDotsMenu />
        {isShow && (
          <FileMenu setIsShow={setIsShow} id={file._id} name={file.name} />
        )}
      </IconButton>
    </Card>
  );
};

export default FileComponent;
