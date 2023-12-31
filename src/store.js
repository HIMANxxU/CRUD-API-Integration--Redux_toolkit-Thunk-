import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
export default store;
