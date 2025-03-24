import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthAPI } from "./api/AuthAPI";
import AuthReducer from "./reducers/authReducer";
import UserReducer from "./reducers/userReducer";
import ThemeReducer from "./reducers/themeReducer";
import ModalReducer from "./reducers/modalReducer";
import FileOperationReducer from "./reducers/fileOperationReducer";
import { UserAPI } from "./api/UserAPI";
import { FileAPI } from "./api/FileAPI";

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    [FileAPI.reducerPath]: FileAPI.reducer,
    auth: AuthReducer,
    user: UserReducer,
    theme: ThemeReducer,
    modal: ModalReducer,
    fileId: FileOperationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthAPI.middleware,
      UserAPI.middleware,
      FileAPI.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
