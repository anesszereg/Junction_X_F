import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
export default store;
