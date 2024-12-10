import React from "react";

const Blog = () => {
  return (
    <div className=" w-screen h-auto  pt-20    ">
      <div className="h-[10%] text-center text-[#2c2c2c] font-[serif] font-[100] text-[30px]  tracking-[2px] pt-8">
        <h3>my blog posts</h3>
      </div>
      <div className="h-[80] w-full grid grid-cols-3 gap-5 pt-16 px-[138px]">
        <div className="hover:shadow-xl delay-100 duration-[400ms]  shadow-md flex flex-col justify-center items-center px-4 py-4">
          <div className="h-[60%]">
            <img
              className="image2"
              src="https://www.kaystocks.com/assets/blog-graphics-banner-04.png"
              alt=""
            />
          </div>
          <div className="h-[40%] flex flex-col pt-8 pr-10">
            <h4 className="text-[21px] capitalize  font-[lora] text-[#2c2c2c] tracking-[1px] font-[100]">
              {" "}
              User-testing my Pins N’ Patches app
            </h4>
            <p className="text-[#2c2c2c]  tracking-[1px] font-[open serif]  font-[300]"> April 28, 2020</p>
          </div>
        </div>

        <div className="hover:shadow-xl delay-100 duration-[400ms]  shadow-md flex flex-col justify-center items-center px-4 py-4">
          <div className="h-[60%]">
            <img
              className="image2"
              src="https://www.kaystocks.com/assets/blog-graphics-banner-03-03.png"
              alt=""
            />
          </div>
          <div className="h-[40%] flex flex-col pt-8 pr-10">
            <h4 className="text-[21px] capitalize  font-[lora] text-[#2c2c2c] tracking-[1px] ">
              {" "}
              My Juno Journey | Pt. 2
            </h4>
            <p className="text-[#2c2c2c]  tracking-[1px]  font-[open serif]  font-[300]"> April 28, 2020</p>
          </div>
        </div>

        <div className=" hover:shadow-xl shadow-md flex flex-col justify-center items-center px-4 py-4">
          <div className="h-[60%]">
            <img
              className="image2"
              src="https://www.kaystocks.com/assets/blog-graphics-banner-02-02.png"
              alt=""
            />
          </div>
          <div className="h-[40%] flex flex-col pt-8 pr-10">
            <h4 className="text-[21px] capitalize  font-[lora] text-[#2c2c2c] tracking-[1px]">
              {" "}
              My Juno Journey | Pt. 1
            </h4>
            <p className="text-[#2c2c2c]  tracking-[1px]  font-[open serif]  font-[300]"> April 28, 2020</p>
          </div>
        </div>

        <div className="hover:shadow-xl shadow-md flex flex-col justify-center items-center px-4 py-4">
          <div className="h-[60%]">
            <img
              className="image2"
              src="https://www.kaystocks.com/assets/blog-graphics-banner-01.png"
              alt=""
            />
          </div>
          <div className="h-[40%] flex flex-col pt-8 pr-10">
            <h4 className="text-[21px] capitalize font-[lora] text-[#2c2c2c] tracking-[1px] ">
              Why I took a break from social media
            </h4>
            <p className="text-[#2c2c2c]  tracking-[1px] font-[open serif]  font-[300] "> April 28, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
