import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "../state-slice/settingSlice";
import productReducer from "../state-slice/productSlice";

export default configureStore({
  reducer: {
    settings: settingReducer,
    product: productReducer,
  },
});
