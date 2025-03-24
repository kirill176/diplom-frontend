import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FileOperationType = {
  id: string | undefined;
  name: string;
};

const initialState: FileOperationType = {
  id: undefined,
  name: "",
};

const fileOperationIdSlice = createSlice({
  name: "fileId",
  initialState: initialState,
  reducers: {
    setFileId(state, action: PayloadAction<FileOperationType>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    resetFileId() {
      return initialState;
    },
  },
});

export const { setFileId, resetFileId } = fileOperationIdSlice.actions;

export default fileOperationIdSlice.reducer;
