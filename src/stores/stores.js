import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/slece/todoslices";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
