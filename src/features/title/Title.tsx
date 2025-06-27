import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { changeTitle, changeDesc } from "./titleSlice";
import { Input } from "@/components/ui/input";

export const Title = () => {
  const { title, description } = useSelector((state: RootState) => state.title);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 p-6 mb-4">
      <Input
        type="text"
        className="text-xl h-12"
        placeholder="설문지 제목을 입력해주세요"
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <Input
        type="text"
        className="text-sm h-9"
        placeholder="설문지 설명을 입력해주세요"
        value={description}
        onChange={(e) => dispatch(changeDesc(e.target.value))}
      />
    </div>
  );
};
