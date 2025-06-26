import { Button } from "../ui/button";

export default function Nav({
  isPreview,
  setIsPreview,
}: {
  isPreview: boolean;
  setIsPreview: (isPreview: boolean) => void;
}) {
  return (
    <div className="w-full flex justify-end px-8 py-2">
      <Button
        variant={"ghost"}
        onClick={() => setIsPreview(!isPreview)}
        className="text-sm text-zinc-600"
      >
        {isPreview ? "돌아가기" : "미리보기"}
      </Button>
    </div>
  );
}
