import React, { useEffect, useState } from "react";
import LeftNav from "@/components/Left-Nav";
import LeftPlayer from "@/components/Left-Player";
import RightMain from "@/components/Right-Main";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./components/my-context.jsx";
function App() {
  const navigate = useNavigate();
  const route = useParams().route;
  const [currSong, setCurrSong] = useState("");
  return (
    <MyContext.Provider value={{ currSong, setCurrSong }}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="h-[calc(100%-10px)] relative flex-wrap w-[calc(100%-10px)]">
          <LeftNav />
          <LeftPlayer currSong={null} />
          <RightMain route={route} />

        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
