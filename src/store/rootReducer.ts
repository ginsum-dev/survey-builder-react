import { combineReducers } from "@reduxjs/toolkit";
import titleReducer from "@/features/title/titleSlice";

const rootReducer = combineReducers({
  title: titleReducer,
});

export default rootReducer;
