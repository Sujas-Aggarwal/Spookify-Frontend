import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const notFoundError = (error?.message || error?.statusText || "Not Found")=="Not Found"
  console.error(error);
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col dark:bg-[--dark-1] dark:text-white">
      <div className="flex flex-col justify-center items-center text-xl">
        <h1><span className="font-bold text-red-600">{notFoundError? "404":"500"} </span>| {notFoundError? "Page Not Found":"Internal Error Occured"}</h1>
       {!notFoundError && <p className="text-xs">Our team is working to resolve the issue</p>}
      </div>
    </div>
  );
}
