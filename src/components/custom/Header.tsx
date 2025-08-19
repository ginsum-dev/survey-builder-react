export default function Header() {
  return (
    <div className="flex flex-col justify-center px-8 py-6 gap-2">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Survey Builder</h1>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">
          다양한 유형의 설문지를 만들어보세요.
        </span>
        <span className="text-sm text-gray-500">
          질문 추가하기 버튼을 누르면 질문 유형을 선택할 수 있습니다.
        </span>
      </div>
    </div>
  );
}
