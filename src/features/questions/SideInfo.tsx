import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { useDispatch } from "react-redux";
import {
  changeQuestionType,
  changeRequired,
  copyQuestion,
  removeQuestion,
} from "@/features/questions/questionSlice";
import { answerType } from "@/lib/constants";

interface SlideInfoType {
  id: string;
  type: string;
  required: boolean;
  questionIndex: number;
}

export default function SideInfo({
  id,
  type,
  required,
  questionIndex,
}: SlideInfoType) {
  const dispatch = useDispatch();

  const findAnswer = answerType.find(({ id: answerId }) => answerId === type);

  return (
    <div className="w-[160px] py-2 pl-4">
      <div className="flex flex-col gap-3">
        <Select
          onValueChange={(value) =>
            dispatch(changeQuestionType({ id, type: value }))
          }
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder={findAnswer?.label || ""} />
          </SelectTrigger>
          <SelectContent>
            {answerType.map(({ id, label }) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-1">
          <Button
            variant="outline"
            onClick={() => dispatch(copyQuestion({ questionIndex }))}
          >
            <div className="text-xs text-zinc-600">복제</div>
          </Button>
          <Button
            variant="outline"
            onClick={() => dispatch(removeQuestion({ id }))}
          >
            <div className="text-xs text-zinc-600">삭제</div>
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Switch
            checked={required}
            onCheckedChange={() => dispatch(changeRequired({ id }))}
          />
          <div className="text-xs">필수</div>
        </div>
      </div>
    </div>
  );
}
