import { Title } from "@/features/title/Title";
import Questions from "@/features/questions/Questions";
const App = () => {
  return (
    <div className="w-screen h-full flex justify-center">
      <div className="w-full max-w-screen-md p-4">
        <Title />
        <Questions />
      </div>
    </div>
  );
};

export default App;
