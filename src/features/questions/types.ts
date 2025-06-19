import { OptionType } from "../options/types";

export interface QuestionType {
  id: string;
  type: string;
  question: string;
  options?: OptionType[];
  required: boolean;
}

export interface ChangeQuestionTextType {
  id: string;
  text: string;
}
