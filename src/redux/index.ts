import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthAPI } from "./api/AuthAPI";
import AuthReducer from "./reducers/authReducer";
import UserReducer from "./reducers/userReducer";
import ThemeReducer from "./reducers/themeReducer";
import { UserAPI } from "./api/UserAPI";

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    auth: AuthReducer,
    user: UserReducer,
    theme: ThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthAPI.middleware, UserAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
