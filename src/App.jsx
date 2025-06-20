import { Title } from "@/features/title/Title";
import Questions from "@/features/questions/Questions";
const App = () => {
  return (
    <div className="w-screen h-full min-h-screen flex justify-center">
      <div className="w-full max-w-screen-md p-8 bg-zinc-50">
        <Title />
        <Questions />
      </div>
    </div>
  );
};

export default App;
