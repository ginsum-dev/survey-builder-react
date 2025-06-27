import { combineReducers } from "@reduxjs/toolkit";
import titleReducer from "@/features/title/slice/titleSlice";
import questionReducer from "@/features/questions/slice/questionSlice";

const rootReducer = combineReducers({
  title: titleReducer,
  questions: questionReducer,
});

export default rootReducer;
