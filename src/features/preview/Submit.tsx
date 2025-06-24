import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SubmitModalType {
  list: { id: string; question: string; answer: string; type: string }[];
  disabled: boolean;
}

export default function SubmitModal({ list, disabled }: SubmitModalType) {
  return (
    <Dialog>
      <DialogTrigger disabled={disabled}>
        <div
          className={`w-[130px] h-9 py-2 rounded-lg text-sm text-neutral-50 shadow  ${
            disabled
              ? "bg-neutral-300"
              : "bg-neutral-900 hover:bg-neutral-900/90"
          }`}
        >
          제출하기
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2 mb-2">
          <DialogTitle>제출 하시겠습니까?</DialogTitle>
          <DialogDescription>작성하신 내용은 아래와 같습니다</DialogDescription>
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-7">
          {list.map(({ id, question, answer, type }) => (
            <div key={id} className="flex flex-col border-b pb-2 gap-2">
              <div>{question}</div>
              <div className="text-sm pl-1 text-zinc-600">
                {type === "checkbox"
                  ? answer.split(":")[0]
                  : answer || "답변을 작성해주세요"}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <DialogClose asChild>
            <Button variant="outline" className="w-[140px]">
              제출 완료
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
