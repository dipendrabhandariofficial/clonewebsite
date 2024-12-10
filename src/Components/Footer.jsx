import React from "react";
import {  FaGithub, FaInstagram, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen h-auto mt-24 px-24 py-6 bg-[#656F62]">
      {/* Top Section */}
      <div className="flex justify-between px-12">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-16">
          <div className="text-[40px] font-serif hover:text-[#ffeec8] text-[#f3f6f4]">
            <a href="/">k.</a>
          </div>
          <ul className="flex space-x-5 uppercase">
            <li>
              <a
                href="/"
                className="text-[12px] font-light hover:text-[#FFEEC8] text-[#f3f6f4]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/work"
                className="text-[12px] font-light hover:text-[#FFEEC8] text-[#f3f6f4]"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-[12px] font-light hover:text-[#FFEEC8] text-[#f3f6f4]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="text-[12px] font-light hover:text-[#FFEEC8] text-[#f3f6f4]"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 ">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3f6f4] hover:text-[#ffeec8]"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3f6f4] hover:text-[#ffeec8]"
          >
            <FaGithub size={14} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3f6f4] hover:text-[#ffeec8]"

          >
            <FaInstagram size={14} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3f6f4] hover:text-[#ffeec8]"

          >
            <FaTwitter size={14} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3f6f4] hover:text-[#ffeec8]"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaSpotify size={14} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center mt-8">
        <p className="uppercase  text-[14px] text-[#f3f6f4]  font-[300]">
          © 2020 Kay Evans-Stocks
        </p>
      </div>
    </footer>
  );
};

export default Footer;
