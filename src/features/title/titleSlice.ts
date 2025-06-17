import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TitleState {
  title: string;
  description: string;
}

const initialState: TitleState = {
  title: "",
  description: "",
};

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeDesc: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const { changeTitle, changeDesc } = titleSlice.actions;
export default titleSlice.reducer;
