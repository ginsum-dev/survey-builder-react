import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MultipleChoiceField from "./MultipleChoiceField";
import TextField from "./TextField";
import AddQuestion from "./AddQuestion";
import { textType } from "../../lib/constants";
import SideInfo from "./SideInfo";

export default function Questions() {
  const { questions } = useSelector((state: RootState) => state.questions);

  return (
    <div className="flex flex-col items-center gap-3">
      {questions.map(({ id, type, required, question, options }, index) => {
        return (
          <div
            key={id}
            className="w-full  rounded-md py-8 px-6 bg-white border border-gray-50"
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
              <SideInfo
                id={id}
                type={type}
                required={required}
                questionIndex={index}
              />
            </div>
          </div>
        );
      })}
      <AddQuestion />
    </div>
  );
}
