// Section2.js
import React from "react";
import Images from "../assets/Images";
import { FaCircleArrowRight } from "react-icons/fa6";

const Section2 = ({
  section2Ref,
  section2TextRef,
  fireCRRef,
  softwareRef,
  qrCodeRef,
  aiMockupRef,
  aiDiagnosisRef,
  crScannerTextRef,    // 추가된 ref
  scanSnapTextRef      // 추가된 ref
}) => {
  return (
    <div

      ref={section2Ref}
      className="relative w-full overflow-hidden md:p-8 p-4"
      style={{ height: "calc(100vh - 4rem)" }} // Full screen height for section
    >
      <div className="flex flex-col h-full relative">
        {/* Section 2 Title */}
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 leading-snug text-center pt-16">
          Your Data Saves Lives
        </h2>

        {/* Section 2 Content Grid */}
        <div className="grid grid-cols-12 h-full mt-8 relative">
          {/* Left Column */}
          <div className="col-span-4 flex flex-col justify-between h-full relative">
            <div ref={section2TextRef} className="text-container">
              <h2  id="MedicalAISolution"
       name="MedicalAISolution" className="2xl:text-4xl lg:text-3xl md:text-2xl text-sm font-semibold text-[#171717]">
                Instant Access to Your  <br className=" hidden lg:block xl:block 2xl:hidden" />Health Data <br />
                Right on Your Phone!
              </h2>
              <a href="/MedicalAISolution" className="flex flex-row items-center gap-2 text-blue-600 mt-4">
                <p className="text-sm md:text-xl">Learn more</p>
                <FaCircleArrowRight className="text-2xl" />
              </a>
            </div>

            <div className="flex-grow flex">
              <div className="relative h-full w-full">
                {/* FireCR Image */}
                <img
                  ref={fireCRRef}
                  src={Images.FireCR}
                  alt="FireCR"
                  className="w-20 md:w-40 object-contain absolute bottom-5 opacity-0"
                />
                {/* CR Scanner Text */}
                <p
                  ref={crScannerTextRef}
                  className="absolute bottom-0 md:left-16 left-8 text-neutral-600 text-xs md:text-lg opacity-0"
                >
                  CR Scanner
                </p>
                {/* FireCR Software */}
                <img
                  ref={softwareRef}
                  src={Images.FireCRSoftware}
                  alt="FireCR-software"
                  className="w-28 md:w-52 object-contain absolute bottom-5 md:left-16 left-10 opacity-0"
                />
                {/* QRCode Image */}
                <img
                  ref={qrCodeRef}
                  src={Images.QRCode}
                  alt="QRCode"
                  className="w-20 md:w-40 object-contain absolute bottom-5 md:left-56 left-32 opacity-0"
                />
                {/* Scan the QR Code! Snap! Text */}
                <p
                  ref={scanSnapTextRef}
                  className="absolute text-center min-w-36 md:-bottom-8 -bottom-4 md:left-64 left-28 text-neutral-800 text-xs md:text-lg opacity-0"
                >
                  Scan the QR Code! <br className="lg:block md:hidden" /> Snap!
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative z-30">
            <img
              ref={aiMockupRef}
              src={Images.AIMockup}
              className="w-60 object-contain opacity-0"
              alt="AI Mockup"
            />
            <p       ref={aiDiagnosisRef} className="md:text-2xl text-xs opacity-0">
              Get a AI Diagnosis!
            </p>
          </div>

          {/* Right Column (Empty for layout purposes) */}
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
