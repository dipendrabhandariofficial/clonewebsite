import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger) 

function Test () {
  return (
    <div className="w-screen h-auto px-32 py-20 space-y-10">
        <div className="h-[10%] flex items-center justify-center lowercase  text-[#2c2c2c] font-[serif] font-[100] text-[30px]  tracking-[2px] pt-14 ">
        <h3>My Recent Work</h3>
      </div>
      <div className="grid grid-cols-3 gap-5 h-screen w-full ">
        <div className="hover:scale-[0.96] delay-100 duration-[450ms]">
          <img className="image1"
            src="https://www.kaystocks.com/assets/inthemood_inthemood.png"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-14 h-full">
          <div className=" h-[40%] hover:scale-[0.96] delay-100 duration-[450ms]">
            <img className="b image1"src="https://www.kaystocks.com/assets/dxss_dxss.png" alt="" />
          </div>
          <div className=" h-[60%] bg-cover ">
            <img className="image1"src="https://www.kaystocks.com/assets/brandon.png" alt="" />
          </div>
        </div>
        <div className="hover:scale-[0.96] delay-100 duration-[450ms] ">
          <img className=" c image1"src="https://www.kaystocks.com/assets/toned_toned.png" alt="" />
        </div>
      </div>
      <div className=" w-full h-[10%] text-center  ">
        <p className="uppercase  text-[#2c2c2c]  tracking-[1px] text-[14px] font-[open sans]  font-[300] hover:text-[#8c6a02]">
          {" "}
          <a href="#"> View all work</a>
        </p>
      </div>
    </div>
  );
};

export default Test;
