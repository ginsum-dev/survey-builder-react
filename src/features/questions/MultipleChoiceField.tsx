import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OptionType } from "../options/types";
import { addOptionText, changeQuestionText } from "./questionSlice";
import OptionList from "../options/OptionList";
import { PlusIcon } from "lucide-react";

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
        className="w-[80px] mt-4"
        variant="outline"
        onClick={() => dispatch(addOptionText({ id }))}
      >
        <div className="text-xs text-zinc-600">옵션 추가</div>
      </Button>
    </div>
  );
}
