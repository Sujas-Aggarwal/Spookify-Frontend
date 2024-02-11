import React from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

function RightMain() {
  const route = useParams().route;
  const workingRoutes = ["home", "search", "trending"];
  if (!workingRoutes.includes(route)) {
    return (
    <div className="absolute w-[calc(66%-8px)] justify-center items-center flex rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] right-0 top-0">
       <ErrorPage />
    </div>)
  }
  return (
    <div className="absolute w-[calc(66%-8px)] rounded-[12px] h-full bg-[linear-gradient(var(--color-3),var(--color-2))] right-0 top-0">
      {route}
    </div>
  );
}

export default RightMain;
