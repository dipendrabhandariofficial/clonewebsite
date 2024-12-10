import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-screen sticky space-x-2 h-[82px] px-6">
      <div className="flex justify-between items-center w-full px-16 pt-4 pb-4 leading-[21px]">
        <div className="pl-12">
          {/* Logo as a Link */}
          <Link to="/" className="text-2xl">
            <p className="text-4xl inline font-[lora,serif] font-[100] text-[40px] hover:text-[#8c6a02]">k.</p>
          </Link>
        </div>

        <div className="px-12 pt-1">
          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center justify-center text-black font-[300] text-[12px] tracking-[1.5px]">
            <li className="hover:text-[#8c6a02] uppercase text-[#2c2c2c]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#8c6a02] uppercase text-[#2c2c2c]">
              <Link to="/Work">Work</Link>
            </li>
            <li className="hover:text-[#8c6a02] uppercase text-[#2c2c2c]">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-[#8c6a02] uppercase text-[#2c2c2c]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
