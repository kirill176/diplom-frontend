import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FileType, UserType } from "../../models/user";

const initialState: UserType = {
  _id: "",
  email: "",
  isActivated: false,
  userName: "",
  diskSpace: 0,
  usedSpace: 0,
  files: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser(state, action: PayloadAction<UserType>) {
      state = action.payload;
      return state;
    },
    logoutUser() {
      return initialState;
    },
    refetchFiles(state, action: PayloadAction<FileType[]>) {
      state.files = action.payload;
      const usedSp = action.payload.reduce(
        (sum: number, file: FileType) => sum + file.size,
        0
      );
      state.usedSpace = usedSp;
    },
  },
});

export const { loginUser, logoutUser, refetchFiles } = userSlice.actions;

export default userSlice.reducer;
