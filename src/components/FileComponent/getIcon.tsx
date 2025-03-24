import IconAudio from "../../icons/IconAudio";
import IconExel from "../../icons/IconExel";
import IconFile from "../../icons/IconFile";
import IconFolder from "../../icons/IconFolder";
import IconImage from "../../icons/IconImage";
import IconPdf from "../../icons/IconPdf";
import IconProgram from "../../icons/IconProgram";
import IconTxt from "../../icons/IconTxt";
import IconWord from "../../icons/IconWord";

export const getIcon = (type: string, mimeType: string, fileName: string) => {
  if (type === "image") return <IconImage />;
  if (type === "audio") return <IconAudio />;
  if (type === "text") return <IconTxt />;

  if (type === "application") {
    if (mimeType.includes("pdf")) return <IconPdf />;
    if (mimeType.includes("msword") || mimeType.includes("wordprocessingml"))
      return <IconWord />;
    if (mimeType.includes("excel") || mimeType.includes("spreadsheetml"))
      return <IconExel />;
    if (
      mimeType.includes("zip") ||
      mimeType.includes("rar") ||
      mimeType.includes("7z") ||
      mimeType.includes("compressed")
    )
      return <IconFolder />;
    if (
      fileName.endsWith(".exe") ||
      fileName.endsWith(".apk") ||
      fileName.endsWith(".dmg") ||
      fileName.endsWith(".sh") ||
      fileName.endsWith(".bat")
    )
      return <IconProgram />;
  }

  return <IconFile />;
};
