import React from "react";
import home from "@/assets/home.svg";
import { Link, NavLink, useParams } from "react-router-dom";
function LeftNav() {
  const route = useParams().id;
  const nav = [
    {
      name: "Home",
      icon: "https://img.icons8.com/ios-filled/50/home.png",
      link: "home",
    },
    {
      name: "Search",
      icon: "https://img.icons8.com/ios-filled/50/search.png",
      link: "search",
    },
    {
      name: "Trending",
      icon: "https://img.icons8.com/external-anggara-glyph-anggara-putra/32/external-trending-social-media-interface-anggara-glyph-anggara-putra.png",
      link: "trending",
    },
  ];
  return (
    <div className="w-[34%] flex-col  h-[calc(100%-160px)] absolute left-0 top-0 gap-[6px]  flex justify-center items-center">
      <div className=" w-full rounded-[12px] p-4 flex flex-col shade2 justify-center ">

        <ul>
          {nav.map((item, index) => {
            return (
                <NavLink
                  to={`/${item.link}`}
                  key={index}
                  className="flex items-center p-3 w-full hover:bg-[--color-3] rounded-[12px] transition-all duration-150 ease-in-out"
                >
                  <img
                    style={{ opacity: route == item.link ? "1" : "0.5" }}
                    src={item.icon}
                    className="w-5 h-5 invert mt-[-2.5px]"
                  />
                  <p
                    style={{
                      fontWeight: route == item.link ? "600" : "normal",
                    }}
                    className="ml-3 text-[15px]"
                  >
                    {item.name}
                  </p>
                </NavLink>
            );
          })}
        </ul>

      </div>
      <div className="w-full h-full flex flex-col justify-center items-start p-5 gap-5 rounded-[12px]  bg-[#A59683]">
          <h1 className="font-bold text-2xl ">Spookify</h1>
          <p className=" text-md">I would rather trust than constantly living in the fear of getting betrayed</p>
        </div>
    </div>
  );
}

export default LeftNav;
