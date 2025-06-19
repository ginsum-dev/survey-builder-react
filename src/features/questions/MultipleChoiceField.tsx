import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OptionType } from "../options/types";
import { addOptionText, changeQuestionText } from "./questionSlice";
import OptionList from "../options/OptionList";

interface MultipleChoiceType {
  id: string;
  question: string;
  options?: OptionType[];
  type: string;
}

export default function MultipleChoiceField({
  id,
  question,
  options = [],
  type,
}: MultipleChoiceType) {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-center px-2 pr-3">
      <Input
        type="text"
        placeholder="질문을 입력해주세요"
        value={question}
        onChange={(e) =>
          dispatch(changeQuestionText({ id, text: e.target.value }))
        }
      />
      <OptionList options={options} type={type} id={id} />
      <Button
        className="w-[130px] mt-2"
        variant="outline"
        onClick={() => dispatch(addOptionText({ id }))}
      >
        옵션 추가
      </Button>
    </div>
  );
}
