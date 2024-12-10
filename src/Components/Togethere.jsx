import React from "react";

const Togethere = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center w-full  bg-[#F3F6F4] py-10 ">
      <h3 className=" lowercase  font-[lora,sans] text-[#2c2c2c] text-[30px] tracking-[2px] font-[200] leading-[30px]">
        let's work together !
      </h3>
      <p className="uppercase pt-4 text-[#2c2c2c]  tracking-[1px]  font-[open serif]  font-[300] hover:text-[#8c6a02]">
        {" "}
        <a href="#"> get in touch</a>
      </p>
    </div>
  );
};

export default Togethere;
