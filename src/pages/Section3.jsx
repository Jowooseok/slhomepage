import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";

const Section3 = ({ section3Ref, section3TextRef, xray2021Ref, xray2022Ref, xray2023Ref, managementMockupRef, transactionTextRef }) => {
  return (
    <div id="section3" ref={section3Ref} className="relative w-full overflow-hidden md:p-8 p-4" style={{ height: "calc(100vh - 4rem)" }}>
      <div className="flex flex-col h-full relative pt-16">
        <div className="grid grid-cols-12 h-full mt-8 relative">
          <div className="col-span-4 flex flex-col justify-between h-full relative">
          <div ref={section3TextRef} className="text-container">
          <h2 className="lg:text-4xl md:text-2xl text-sm font-semibold text-[#171717]">
            Managed medical data <br />
            generates added value.
          </h2>
          <div className="flex flex-row items-center gap-1 text-blue-600 mt-4">
            <p className="text-sm md:text-xl">Learn more</p>
            <FaCircleArrowRight className="text-2xl" />
          </div>
        </div>
            <div className="flex-grow flex">
              <div className="relative h-full w-full">
                <img ref={xray2021Ref} src={Images.Xray2021} alt="xray-2021" className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-32 bottom-20 lg:left-16 z-0 opacity-0" />
                <img ref={xray2022Ref} src={Images.Xray2022} alt="xray-2022" className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-24 lg:left-28 bottom-16 md:left-12 left-4 z-10 opacity-0" />
                <img ref={xray2023Ref} src={Images.Xray2023} alt="xray-2023" className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-12 lg:left-40 bottom-10 md:left-24 left-9 z-20 opacity-0" />
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative z-30">
            <img ref={managementMockupRef} src={Images.ManagementMockup} className="w-60 object-contain opacity-0" alt="management-mockup" />
            <p ref={transactionTextRef} className="lg:text-2xl md:text-lg text-xs text-center opacity-0">
              Processed X-ray data price Transactions <br className=" lg:block hidden" /> range 30 ~100 USD
            </p>
          </div>

          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
