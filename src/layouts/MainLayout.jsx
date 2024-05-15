// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.png";
import footerLogoImage from "../assets/footerLogoImage.png";
import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function MainLayout({ children }) {
  return (
    <div
      id="root"
      className="flex flex-col min-h-screen mx-auto tracking-tight leading-5 text-white font-medium"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <footer
        className="flex flex-col sm:flex-row justify-around items-center sm:items-stretch px-4 sm:px-24 sm:py-8 pb-8"
        style={{ backgroundColor: "#0147E5" }}
      >
        <div className="w-full sm:w-5/12 sm:flex items-center justify-center py-4 sm:py-0 hidden">
          <img src={footerLogoImage} alt="footerLogoImage" className="w-4/5  max-w-md" />
        </div>
        <div className="w-full sm:w-0.5 h-auto bg-white my-4 sm:my-0 ">{""}</div> 
        <div className="flex flex-col w-full sm:w-5/12 text-center sm:text-left text-white gap-6">
          <p className="font-bold text-lg sm:text-xl">Find us on</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://twitter.com/savethelife_SL" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaTwitter style={{ color: "#0147E5" }} />
              </div>
              <p className="underline">Twitter</p>
            </a>
            <a href="https://t.me/slfoundation" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaTelegramPlane style={{ color: "#0147E5" }} />
              </div>
              <p className="underline">Telegram</p>
            </a>
            <a href="https://www.linkedin.com/company/slfoundation" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaLinkedinIn style={{ color: "#0147E5" }} />
              </div>
              <p className="underline">Linkedin</p>
            </a>
            <a href="https://github.com/save-the-life/SL-overview" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaGithub style={{ color: "#0147E5" }} />
              </div>
              <p className="underline">Github</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
