import React from "react";

const Work = () => {
  return (
    <div className=" min-h-screen  w-screen flex flex-col gap-12  items-start px-32 pt-8 pb-4 tracking-[1px] text-[#2c2c2c] ">
      <div className="text-[64px] font-serif  lowercase leading-none">Work</div>
      <div className=" flex items-start gap-4 text-[14px]">
        <button
          type="button"
          className="button1 duration-150 hover:bg-[#c3a764]   bg-gray-100 py-2 px-8 rounded-md font-sans "
        >
          All
        </button>
        <button
          type="button"
          className="button1 duration-150 hover:bg-[#c3a764]    bg-gray-100 py-2 px-8 rounded-md font-sans"
        >
          WEB
        </button>
        <button
          type="button"
          className="button1 duration-150 hover:bg-[#c3a764]    bg-gray-100 py-2 px-8 rounded-md font-sans"
        >
          GRAPHIC
        </button>
      </div>
      {/* photos */}
      <div className="photos grid grid-cols-3 gap-4 h-full w-full">
        <div className=" h-full w-full flex flex-col gap-4"> 
          <img src="https://www.kaystocks.com/assets/lacasita_lacasita.png" alt="" className="w-full h-auto" />
         
          <img src="https://www.kaystocks.com/assets/inthemood_inthemood.png" alt="" className="w-full h-auto" />
          <img src="https://www.kaystocks.com/assets/dxss_dxss.png" alt="" className="w-full h-auto" />
          <div className="h-auto w-full bg-red-600"></div>
        </div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-red-500 h-full w-full"></div>
      </div>
    </div>
  );
};

export default Work;
