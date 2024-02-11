import React,{useEffect, useState} from "react";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
function Toggler() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("color-theme") || "light");
  useEffect(()=>{
    localStorage.setItem("color-theme",currentTheme)
    if (currentTheme=="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[currentTheme])
  return <img src={currentTheme=="dark"?moon:sun} alt={currentTheme} onClick={()=>{setCurrentTheme(currentTheme=="light"?"dark":"light")}} width={34} className="bg-[#EFF3F5] dark:invert rounded-md dark:p-[6px] p-2 cursor-pointer"/>;
}

export default Toggler;
