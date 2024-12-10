import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Passion from "../Components/Passion";
import Test from "../Components/Test";
import Togethere from "../Components/Togethere";
import Blog from "../Components/Blog";

function Home() {
  useGSAP(() => {
    gsap.from(".image", {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 0.5,
    });

    gsap.from("h2,h1", {
      opacity: 0,
      x: 200,
      duration: 1,
      delay: 0.5,
      // stagger:0.3
    });
  });
  return (
    <>
    <div className="h-[100%]  flex pb-24  w-screen ">
      <div className="w-[50%]  h-[60%]  ">
        <img
          className="image"
          src="https://www.kaystocks.com/assets/homeHeader.jpg"
          alt="img not found "
        />
      </div>
      <div className="w-[50%] h-[60%]  flex flex-col items-center justify-center  -translate-x-40 pl-[48px] pt-14">
        <h1 className=" font-[lora,serif] text-[70px] font-[300] lowercase tracking-[2px] text-[#2c2c2c]  pt-14">
          Kay Evans-Stocks
        </h1>
        <h2 className="font-[open sans]  font-[300] uppercase  tracking-[1px] pl-14 ">
          Front-End Developer & Designer
        </h2>
      </div>
    </div>
    {/*  */}
        <Passion/>
        <Test/>
        <Togethere/>
        <Blog/>
    
    </>
  );
}

export default Home;
