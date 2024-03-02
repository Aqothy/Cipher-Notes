import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./features/tokenSlice";
import userReducer from "./features/userSlice"
import noteSlice from "./features/noteSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    note: noteSlice
  },
});
