import React, { useState } from "react";
import LeftNav from "@/components/Left-Nav";
import RightMain from "@/components/Right-Main";
import { MyContext } from "./components/my-context.jsx";
function App() {
  const [currSong, setCurrSong] = useState("");
  return (
    <MyContext.Provider value={{ currSong, setCurrSong }}>
      <div className="w-full relative h-screen flex md:flex-row flex-col-reverse justify-center items-center sm:p-[6px] gap-[6px]">
          <LeftNav />
          <RightMain />
      </div>
    </MyContext.Provider>
  );
}

export default App;
