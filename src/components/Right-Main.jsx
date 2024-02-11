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
      <div className="absolute w-[calc(66%-8px)] justify-center items-center flex rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] right-0 top-0">
        <ErrorPage />
      </div>
    );
  }
  return (
    <div className="absolute w-[calc(66%-8px)] overflow-hidden  rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] right-0 top-0">
      <div className="relative w-full h-full  flex  flex-col">
        <div className="nav w-full h-[10vh] flex justify-between rounded-t-[12px] items-center top-0 left-0 absolute ">
          <div className="px-[15px] flex justify-center items-center gap-[10px]">
            <img
              onClick={() => navigate(-1)}
              src={arrowLeft}
              alt="Back"
              className="active:invert active:scale-110 cursor-pointer "
              width={36}
            />
            <img
              onClick={() => navigate(1)}
              src={arrowRight}
              alt="Forward"
              className="active:invert active:scale-110  cursor-pointer"
              width={36}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center px-[15px]">
            <a href="https://www.github.com/Sujas-Aggarwal" className="shade1 px-5 rounded-full py-2 text-sm font-bold" target="_blank">Github</a>
            <Toggler/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightMain;
