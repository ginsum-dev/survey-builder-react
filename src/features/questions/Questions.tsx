import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MultipleChoiceField from "./MultipleChoiceField";
import TextField from "./TextField";
import AddQuestion from "./AddQuestion";
import { textType } from "../../lib/constants";

export default function Questions() {
  const { questions } = useSelector((state: RootState) => state.questions);

  return (
    <div className="flex flex-col items-center gap-3">
      {questions.map(({ id, type, required, question, options }, index) => {
        return (
          <div
            key={id}
            className="w-full border border-gray-200 rounded-md p-4"
          >
            <div className="flex">
              {textType.includes(type) ? (
                <TextField id={id} question={question} />
              ) : (
                <MultipleChoiceField
                  id={id}
                  question={question}
                  options={options}
                  type={type}
                />
              )}
              {/* <SideInfo
                id={id}
                type={type}
                required={required}
                questionIndex={index}
              /> */}
            </div>
          </div>
        );
      })}
      <AddQuestion />
    </div>
  );
}
