import { Title } from "@/features/title/Title";
import Questions from "@/features/questions/Questions";
import Preview from "@/features/preview/Preview";
import { useState } from "react";
import Nav from "@/components/custom/Nav";
import Header from "@/components/custom/Header";

const App = () => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="w-screen h-full min-h-screen flex justify-center">
      <div className="w-full max-w-screen-md bg-zinc-50">
        <Header />
        <Nav isPreview={isPreview} setIsPreview={setIsPreview} />
        {isPreview ? (
          <Preview />
        ) : (
          <div className="px-8 pb-8">
            <Title />
            <Questions />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
