import { createSlice } from "@reduxjs/toolkit";
const todoListSlice = createSlice({
  name: "counter",
  initialState: {
    list: [],
    name: "MY'TODOS",
    doneList: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDoneList: (state, action) => {
      state.doneList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setName, setDoneList } = todoListSlice.actions;

export default todoListSlice.reducer;
