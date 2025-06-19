import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  changeOptionText,
  moveOption,
  removeOptionText,
} from "../questions/questionSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dragHandle from "@/assets/drag-handle.svg";
import deleteIcon from "@/assets/x-icon.png";

export default function Option({
  id,
  text,
  type,
  hasDelete,
  optionId,
}: {
  id: string;
  optionId: string;
  text: string;
  type: string;
  hasDelete: boolean;
}) {
  const dispatch = useDispatch();

  const [, drag, preview] = useDrag(() => ({
    type: "option",
    item: { optionId },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  const [, drop] = useDrop({
    accept: "option",
    hover: (draggedItem: any) => {
      const dragId = draggedItem.optionId;
      const hoverId = optionId;

      if (dragId === hoverId) {
        return;
      }

      dispatch(moveOption({ id, fromId: dragId, toId: hoverId }));
    },
  });

  const previewRef = preview as unknown as React.RefObject<HTMLDivElement>;
  const dropRef = drop as unknown as React.RefObject<HTMLDivElement>;
  const dragRef = drag as unknown as React.RefObject<HTMLDivElement>;

  return (
    <div ref={previewRef} className="flex w-full justify-between">
      <div className="flex w-full items-center gap-1">
        <div ref={dropRef}>
          <div ref={dragRef} className="flex items-center w-4 h-8 bg-stone-100">
            <img src={dragHandle} className="w-4" />
          </div>
        </div>
        {type === "checkbox" && <Checkbox disabled />}
        {type === "multipleChoice" && (
          <RadioGroup>
            <RadioGroupItem value="" disabled />
          </RadioGroup>
        )}
        <Input
          type="text"
          placeholder="옵션을 입력해주세요"
          value={text}
          className="text-sm h-9"
          onChange={(e) =>
            dispatch(
              changeOptionText({
                id,
                text: e.target.value,
                optionId,
              })
            )
          }
        />
      </div>
      {hasDelete && (
        <Button
          className="w-6 p-0"
          variant="ghost"
          onClick={() => dispatch(removeOptionText({ id, optionId }))}
        >
          <img src={deleteIcon} className="w-4" />
        </Button>
      )}
    </div>
  );
}
