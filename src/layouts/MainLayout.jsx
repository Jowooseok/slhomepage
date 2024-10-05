// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Images from "../assets/Images";
import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function MainLayout({children}) {
  return (
    <div
      id="root"
      className="flex flex-col min-h-screen mx-auto tracking-tight leading-5 text-[#171717] font-medium bg-[##FFF9F7] font-helvetica"
      style={{ backgroundImage: `url(${Images.backgroundImage})` }}
    >
      <Navbar />
      <main className="mt-16">
        {children}
      </main>
      <footer
        className="flex flex-col sm:flex-row justify-around items-center sm:items-stretch px-4 sm:px-24 sm:py-20 py-8 pb-16"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="w-full sm:w-5/12 sm:flex items-center justify-center py-4 sm:py-0 hidden">
        <a href="https://m.digiray.co.kr/" className=" bg-white rounded-md">
          <img src={Images.DigirayLogo} alt="footerLogoImage" className=' max-w-md md:p-8'  />
          </a>
        </div>
        <div className="w-full sm:w-0.5 h-auto bg-white my-4 sm:my-0 ">{""}</div> 
        <div className="flex flex-col w-full sm:w-5/12 text-center sm:text-left text-white gap-6">
        <a href="https://m.digiray.co.kr/" className='w-full h-full flex items-center justify-center'>
        <img src={Images.DigirayLogo} alt="footerLogoImage" className="w-2/5  bg-white sm:hidden  p-4 rounded-md" />
        </a>
          <p className="font-bold text-lg sm:text-xl">Find us on</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://twitter.com/savethelife_SL" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaTwitter style={{ color: "#000000" }} />
              </div>
              <p className="underline">Twitter</p>
            </a>
            <a href="https://t.me/slfoundation" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaTelegramPlane style={{ color: "#000000" }} />
              </div>
              <p className="underline">Telegram</p>
            </a>
            <a href="https://www.linkedin.com/company/slfoundation" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaLinkedinIn style={{ color: "#000000" }} />
              </div>
              <p className="underline">Linkedin</p>
            </a>
            <a href="https://github.com/save-the-life" target="_blank" className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6">
              <div className="bg-white rounded-full p-2">
                <FaGithub style={{ color: "#000000" }} />
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
