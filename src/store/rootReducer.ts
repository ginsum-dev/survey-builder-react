import { combineReducers } from "@reduxjs/toolkit";
import titleReducer from "@/features/title/titleSlice";
import questionReducer from "@/features/questions/questionSlice";

const rootReducer = combineReducers({
  title: titleReducer,
  questions: questionReducer,
});

export default rootReducer;
