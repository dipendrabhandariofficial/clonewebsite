import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Sass",
    "Javascript",
    "jQuery",
    "React",
    "Firebase",
    "RESTful APIs",
    "Wordpress",
    "Squarespace",
    "Adobe Creative Cloud",
    "Sketch",
    "SEO practices",
    "Git collaboration",
    "Responsive web design",
    "Web accessibility",
  ];
  useGSAP(() => {
    gsap.from(".image2", {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 0.5,
    });

    gsap.from("h2,h1,p", {
      opacity: 0,
      x: 200,
      duration: 1,
      delay: 0.5,
      // stagger:0.3
    });
  });
  return (
    <>
      {/* about */}
      <div className="h-screen w-screen ">
        <div className="flex gap-6">
          <div className="image2 w-1/2 item-left ">
            <img src="https://www.kaystocks.com/assets/me.jpg" alt="" />
          </div>
          <div className="paragraph text-center  justify-center flex-col gap-6 px-10 py-28 w-1/2 . h-screen ">
            <div className="pr-64 ">
              {" "}
              <h1 className="lowercase  text-[64px] font-[lora] text-[#2c2c2c] tracking-[1px]">
                Hi, I'm Kay!
              </h1>
            </div>
            <div className="w-auto text-left  font-sans font-[100] text-[15px] pl-16 text-[#2c2c2c] flex flex-col gap-4">
              <div>
                <p className="pr-8 ">
                  {" "}
                  I am a creative developer and graphic designer who's
                  passionate about building digital experiences that nurture
                  community, inclusivity, and knowledge. I am a graduate of Juno
                  College of Technology's Web Development Immersive Bootcamp and
                  I have a BA in Media Communications from the University of
                  Guelph-Humber.
                </p>
              </div>
              <div>
                <p className="">
                  Whether the internet or the outdoors, I love exploring, and I
                  apply this open mindset to my creative projects. I am happiest
                  when I am using my passions{" "}
                  <p>
                    {" "}
                    to help you pursue yours! If you're interested in working
                    together,
                    <a href="#" className="underline">
                      {" "}
                      get in touch here
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My skills  */}
      <div className="skills w-screen h-[60vh]  px-60 flex flex-col items-left py-16 text-[#2c2c2c]   ">
        <div className="myskills lowercase font-serif text-[#2c2c2c] text-[46px] pb-8 font-[100] tracking-[1px] ">
          <p>My skills</p>
        </div>
        <div className="skillslists grid grid-rows-4 grid-cols-4 gap-4 h-auto w-auto animate-fadeInUp delay-500 duration-75 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item text-left font-sans text-[18px] font-[100] text-[#2c2c2c] "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* skills ......end */}
      {/* photo start */}
      <div className="h-screen w-full  px-32  py-20  ">
        <div className="  h-[55%] w-[100%] grid grid-cols-4 gap-4">
          <div>
            {" "}
            <img
              src="https://www.kaystocks.com/assets/meOnMountain.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            {" "}
            <img
              src="https://www.kaystocks.com/assets/hike.jpg"
              alt=""
              className="h-full w-full object-cover bg-center"
            />
          </div>
          <div>
            <img
              src="https://www.kaystocks.com/assets/meTakingPhoto.jpg"
              alt=""
              className="h-full w-full object-cover bg-center"
            />
          </div>
        </div>
      </div>
      {/* photo ends here ............... */}

      {/* blog  */}
      <div className=" w-full h-auto    ">
        <div className="h-[10%] text-center text-[#2c2c2c] font-[serif] font-[100] text-[30px]  tracking-[2px] pt-8">
          <h3>Sometimes i write things</h3>
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
              <p className="text-[#2c2c2c]  tracking-[1px] font-[open serif]  font-[300]">
                {" "}
                April 28, 2020
              </p>
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
              <p className="text-[#2c2c2c]  tracking-[1px]  font-[open serif]  font-[300]">
                {" "}
                April 28, 2020
              </p>
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
              <p className="text-[#2c2c2c]  tracking-[1px]  font-[open serif]  font-[300]">
                {" "}
                April 28, 2020
              </p>
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
              <p className="text-[#2c2c2c]  tracking-[1px] font-[open serif]  font-[300] ">
                {" "}
                April 28, 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
