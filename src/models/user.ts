export type FileType = {
  _id: string;
  name: string;
  owner: string;
  path: string;
  size: number;
  type: string;
  createdAt: string;
};

export type UserType = {
  _id: string;
  email: string;
  isActivated: boolean;
  userName: string;
  diskSpace: number;
  usedSpace: number;
  files: FileType[];
};
