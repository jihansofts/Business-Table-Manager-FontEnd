import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: "d-none",
};
const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    ShowLoader: (state) => {
      state.loader = "";
    },
    HideLoader: (state) => {
      state.loader = "d-none";
    },
  },
});
export const { ShowLoader, HideLoader } = settingSlice.actions;
export default settingSlice.reducer;
