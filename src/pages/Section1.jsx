import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import Videos from "../assets/Videos";

const Section1 = ({ videoRef, overlayRef, headingRef, subheadingRef, formRef, buttonRef, handleSubmit }) => {
  const [email, setEmail] = useState("");

  return (
    <div id="home" name="home" className="relative w-full overflow-hidden md:p-8 md:pt-0 p-4 pt-0" style={{ height: "calc(100vh - 4rem)" }}>
      <div className="relative w-full h-full flex justify-center items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          src={Videos.IntroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute  inset-0 bg-black opacity-50 rounded-3xl"></div>
        <div ref={overlayRef} className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 md:p-8 space-y-8 text-white h-full w-full">
          <h1 className="absolute lg:top-1/4 top-1/3 lg:pt-8 h-full text-xl md:text-4xl lg:text-6xl 2xl:text-7xl font-medium mb-4 leading-snug ">
            <span ref={headingRef}>Unlocking Medical Data for Everyone.</span>
            <br />
            <span ref={subheadingRef}>Take Charge of your Health.</span>
          </h1>

          <form ref={formRef} className="absolute lg:top-1/2 pt-28 md:pt-0 px-8 md:px-0 w-full  max-w-md " onSubmit={(e) => handleSubmit(e, email, setEmail)}>
            <p className="text-base md:text-2xl mb-4">Subscribe for updates</p>
            <div className="flex flex-col sm:flex-row items-center">
              <input
                className="appearance-none bg-transparent border border-white rounded-2xl w-full h-12 text-white px-4 leading-tight focus:outline-none text-sm md:text-base mb-2 sm:mb-0 sm:mr-2"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-full sm:w-28 font-semibold rounded-2xl text-sm md:text-base" type="submit">
                Subscribe
              </button>
            </div>
          </form>

          <div className=" absolute bottom-14">
            <a ref={buttonRef} href="https://drive.google.com/file/d/1FQozCroeIAvCReiDOJkTK6bgh76t4nJ5/view" target="_blank" rel="noopener noreferrer" className="flex items-center text-base md:text-xl focus:outline-none">
              <FaPlayCircle className="mr-2" />
              Play Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
