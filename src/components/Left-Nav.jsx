import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "./my-context";
import logo from "/logo.ico";
function LeftNav() {
  const { currSong, setCurrSong } = useContext(MyContext);
  const route = useParams().route;
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
    <div className="w-full absolute left-0 bottom-0 z-50  md:relative md:w-[50%] md:flex-col  md:h-full  gap-[6px]  flex flex-col-reverse justify-center items-center">
      <div className=" w-full md:rounded-[12px] p-1 md:p-4 flex flex-col items-center md:items-start  shade2 justify-around md:justify-center ">
        <h1 className="font-bold font-[Montserrat] hidden md:flex  px-2 py-3 items-center gap-2">
          <img src={logo} width={32} /> Spookify
        </h1>
        <div className="flex flex-row md:flex-col w-full">
          {nav.map((item, index) => {
            return (
              <NavLink
                to={`/${item.link}`}
                key={index}
                className="flex items-center justify-center md:justify-start p-3 w-full active:bg-[--color-3] rounded-[12px] transition-all duration-150 ease-in-out"
              >
                <img
                  style={{ opacity: route == item.link ? "1" : "0.5" }}
                  src={item.icon}
                  className="w-5 h-5 dark:invert mt-[-2.5px]"
                />
                <p
                  style={{
                    fontWeight: route == item.link ? "600" : "normal",
                  }}
                  className="ml-3 text-[15px] hidden md:flex"
                >
                  {item.name}
                </p>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="w-full select-none text-white h-full hidden md:flex flex-col justify-center items-start p-5 gap-2 rounded-[12px]  bg-[#ad3f3f]">
        <h1 className="font-bold text-2xl ">Spookify</h1>
        <p className=" text-md">
          I would rather trust than constantly living in the fear of getting
          betrayed
        </p>
      </div>
      <div className="w-full">
        <iframe
          id="frame"
          className="select-none rounded-[12px] h-[80px] md:h-[152px]"
          src="https://open.spotify.com/embed/track/7JJmb5XwzOO8jgpou264Ml?utm_source=generator"
          width="100%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default LeftNav;
