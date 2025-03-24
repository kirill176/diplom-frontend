import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  type: string | undefined;
};

const initialState: ModalState = {
  type: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    resetModal() {
      return initialState;
    },
  },
});

export const { openModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
