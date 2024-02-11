import React,{useEffect, useState} from "react";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
function Toggler() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("color-theme"));
  useEffect(()=>{
    localStorage.setItem("color-theme",currentTheme)
    document.documentElement.classList.toggle("dark");
  },[currentTheme])
  return <img src={currentTheme=="dark"?moon:sun} alt={currentTheme} onClick={()=>{setCurrentTheme(currentTheme=="light"?"dark":"light")}} width={32} className="bg-[#EFF3F5] dark:invert rounded-md p-1 cursor-pointer"/>;
}

export default Toggler;
