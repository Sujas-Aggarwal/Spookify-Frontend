import React, { useState } from "react";
import LeftNav from "@/components/Left-Nav";
import RightMain from "@/components/Right-Main";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./components/my-context.jsx";
function App() {
  const navigate = useNavigate();
  const route = useParams().route;
  const [currSong, setCurrSong] = useState("");
  return (
    <MyContext.Provider value={{ currSong, setCurrSong }}>
      <div className="w-full h-screen flex justify-center items-center p-[6px] gap-[6px]">
          <LeftNav />
          <RightMain />
      </div>
    </MyContext.Provider>
  );
}

export default App;
