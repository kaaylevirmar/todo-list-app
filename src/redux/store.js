import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slice/todoList_slice";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
  },
});
