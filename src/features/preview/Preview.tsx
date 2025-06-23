import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { findOptionId } from "@/lib/utils";
import { RootState } from "@/store";
// import SubmitModal from "./SubmitModal";
import usePreview from "./usePreview";

export default function Preview() {
  const { title, description } = useSelector((state: RootState) => state.title);

  const {
    questions,
    answers,
    getAnswerText,
    getAnswerOptionId,
    changeTextAnswer,
    changeOptionAnswer,
    changeCheckboxAnswer,
    resetAnswer,
  } = usePreview();

  return (
    <div className="flex flex-col pb-8 gap-6">
      <div>
        <div>{title}</div>
        <div>{description}</div>
        <hr />
        <div className="text-sm text-red-600">* 표시는 필수 질문임</div>
      </div>
      {questions.map(({ id, question, type, options, required }) => (
        <div key={id}>
          <div className="flex gap-1">
            <div>{question}</div>
            {required && <div className="text-red-600">*</div>}
          </div>

          {type === "singleLineText" && (
            <Input
              className="w-[300px]"
              value={getAnswerText(id)}
              onChange={(e) => changeTextAnswer({ id, text: e.target.value })}
            />
          )}
          {type === "multiLineText" && (
            <Textarea
              placeholder="Type your message here."
              value={getAnswerText(id)}
              onChange={(e) => changeTextAnswer({ id, text: e.target.value })}
            />
          )}
          {type === "multipleChoice" && (
            <RadioGroup
              onValueChange={(value) =>
                changeOptionAnswer({
                  id,
                  text: value,
                  optionId: findOptionId(options, value) || "",
                })
              }
            >
              <div className="flex flex-col gap-2">
                {options?.map(({ id: optionId, text }) => (
                  <div key={optionId} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={text}
                      id={optionId}
                      checked={getAnswerOptionId(id)[0] === optionId}
                    />
                    <label
                      htmlFor={optionId}
                      className="text-sm font-medium leading-none"
                    >
                      {text}
                    </label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          )}
          {type === "checkbox" && (
            <div className="flex flex-col gap-2">
              {options?.map(({ id: optionId, text }) => (
                <div key={optionId} className="flex items-center space-x-2">
                  <Checkbox
                    id={optionId}
                    checked={getAnswerOptionId(id).includes(optionId)}
                    onCheckedChange={() =>
                      changeCheckboxAnswer({ id, text, optionId })
                    }
                  />
                  <label
                    htmlFor={optionId}
                    className="text-sm font-medium leading-none"
                  >
                    {text}
                  </label>
                </div>
              ))}
            </div>
          )}
          {type === "dropdown" && (
            <Select
              onValueChange={(value) =>
                changeOptionAnswer({
                  id,
                  text: value,
                  optionId: findOptionId(options, value) || "",
                })
              }
              value={getAnswerText(id)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"선택"} />
              </SelectTrigger>
              <SelectContent>
                {options?.map(({ id: optionId, text }) => (
                  <SelectItem key={optionId} value={text || "."}>
                    {text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      ))}
      <div className="flex w-full justify-center gap-2">
        {/* <SubmitModal
          list={answers}
          disabled={
            !!answers.find(({ required, answer }) => required && !answer)
          }
        /> */}
        <Button variant={"outline"} className="w-[130px]" onClick={resetAnswer}>
          양식 지우기
        </Button>
      </div>
    </div>
  );
}
