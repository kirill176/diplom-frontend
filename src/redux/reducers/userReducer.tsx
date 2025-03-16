import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  id: string;
  email: string;
  isActivated: boolean;
  userName: string;
  diskSpace: number;
  usedSpace: number;
};

const initialState: UserType = {
  id: "",
  email: "",
  isActivated: false,
  userName: "",
  diskSpace: 0,
  usedSpace: 0,
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
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
