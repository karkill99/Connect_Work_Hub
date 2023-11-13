import { configureStore } from "@reduxjs/toolkit";
import { workerSlice } from "./slices/workerSlice";
import { customerSlice } from "./slices/customerSlice";
import { authSlice } from "./slices/authSlice";

const store = configureStore({
  reducer: {
   customer: customerSlice.reducer,
    Worker: workerSlice.reducer,
    Auth: authSlice.reducer
  }
});

export default store;
