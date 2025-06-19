import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeQuestionTextType, QuestionType } from "./types";
import { OptionTextType } from "../options/types";
import { getId } from "@/lib/utils";

export interface QuestionState {
  questions: QuestionType[];
}

const initialState: QuestionState = {
  questions: [],
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions = [...state.questions, action.payload];
    },
    changeQuestionText: (
      state,
      action: PayloadAction<ChangeQuestionTextType>
    ) => {
      const sliceQuestions = [...state.questions];
      const updateQuestions = sliceQuestions.map((el) => {
        if (action.payload.id === el.id) {
          return { ...el, question: action.payload.text };
        }
        return el;
      });
      state.questions = updateQuestions;
    },
    changeOptionText: (state, action: PayloadAction<OptionTextType>) => {
      const sliceQuestions = [...state.questions];
      const updateQuestions = sliceQuestions.map((el) => {
        if (action.payload.id === el.id) {
          if (el.options) {
            const updateOptions = [...el.options];
            const findOptionIndex = updateOptions.findIndex(
              ({ id }) => id === action.payload.optionId
            );
            updateOptions[findOptionIndex] = {
              ...updateOptions[findOptionIndex],
              text: action.payload.text,
            };
            return { ...el, options: updateOptions };
          }
        }
        return el;
      });
      state.questions = updateQuestions;
    },
    addOptionText: (state, action: PayloadAction<{ id: string }>) => {
      const sliceQuestions = [...state.questions];
      const updateQuestions = sliceQuestions.map((el) => {
        if (action.payload.id === el.id) {
          if (el.options) {
            return {
              ...el,
              options: [
                ...el.options,
                { id: `${action.payload.id}-${getId()}`, text: "" },
              ],
            };
          }
        }
        return el;
      });
      state.questions = updateQuestions;
    },
    removeOptionText: (
      state,
      action: PayloadAction<{ id: string; optionId: string }>
    ) => {
      const sliceQuestions = [...state.questions];
      const updateQuestions = sliceQuestions.map((el) => {
        if (action.payload.id === el.id) {
          if (el.options) {
            const updateOptions = el.options.filter(
              ({ id }) => id !== action.payload.optionId
            );

            return { ...el, options: updateOptions };
          }
        }
        return el;
      });
      state.questions = updateQuestions;
    },
    moveOption: (
      state,
      action: PayloadAction<{ id: string; fromId: string; toId: string }>
    ) => {
      const sliceQuestions = [...state.questions];
      const updateQuestions = sliceQuestions.map((el) => {
        if (action.payload.id === el.id) {
          if (el.options) {
            const updatedOptions = [...el.options];
            const findFromIndex = updatedOptions.findIndex(
              ({ id }) => id === action.payload.fromId
            );
            const findToIndex = updatedOptions.findIndex(
              ({ id }) => id === action.payload.toId
            );
            const [movedOption] = updatedOptions.splice(findFromIndex, 1);
            updatedOptions.splice(findToIndex, 0, movedOption);
            return { ...el, options: updatedOptions };
          }
        }
        return el;
      });
      state.questions = updateQuestions;
    },
  },
});

export const {
  addQuestion,
  changeQuestionText,
  changeOptionText,
  addOptionText,
  removeOptionText,
  moveOption,
} = questionSlice.actions;
export default questionSlice.reducer;
