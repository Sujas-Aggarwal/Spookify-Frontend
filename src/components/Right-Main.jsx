import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import Toggler from "./darkModeToggler";
function RightMain() {
  const route = useParams().route;
  const navigate = useNavigate();
  const workingRoutes = ["home", "search", "trending"];
  if (!workingRoutes.includes(route)) {
    return (
      <div className="w-full justify-center items-center flex rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] ">
        <ErrorPage />
      </div>
    );
  }
  return (
    <div className="w-full relative overflow-hidden  sm:rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] ">
        <div className="nav w-full h-[10vh] flex justify-between rounded-t-[12px] items-center top-0 left-0 absolute ">
          <div className="px-[15px] flex justify-center items-center gap-[10px]">
            <img
              onClick={() => navigate(-1)}
              src={arrowLeft}
              alt="Back"
              className="dark:active:invert active:scale-110 cursor-pointer "
              width={36}
            />
            <img
              onClick={() => navigate(1)}
              src={arrowRight}
              alt="Forward"
              className="dark:active:invert active:scale-110  cursor-pointer"
              width={36}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center px-[15px]">
            <a href="https://www.github.com/Sujas-Aggarwal" className="shade1 px-4 flex justify-center gap-1 items-center rounded-full py-2 text-sm font-[500] hover:opacity-60" target="_blank"> 
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="dark:invert -mt-[2px]" width={18}/>
            Github</a>
            <Toggler/>
          </div>
      </div>
    </div>
  );
}

export default RightMain;
