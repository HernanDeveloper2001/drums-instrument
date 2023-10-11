import {configureStore} from "@reduxjs/toolkit";
import { accessoriesSlice } from "../features/accessories/accessoriesSlice";

export const store = configureStore({
  reducer: {
    accessories: accessoriesSlice,
  }
})