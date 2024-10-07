// Section3.js
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";

const Section3 = ({
  section3Ref,
  section3TextRef,
  accumulationTextRef,
  blockChainBGRef,
  xray2021Ref,
  xray2022Ref,
  xray2023Ref,
  xray2024Ref,
  onBlockChainTextRef,
  managementMockupRef,
  transactionTextRef,
  usdTextRef,
}) => {
  return (
    <div

      ref={section3Ref}
      className="relative w-full overflow-hidden md:p-8 p-4"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="flex flex-col h-full relative pt-16">
        <div className="grid grid-cols-12 h-full mt-8 relative">
          {/* Left Column */}
          <div className="col-span-4 flex flex-col justify-between h-full relative">
            {/* 1. "Managed medical data generates added value. Learn more" 텍스트 */}
            <div ref={section3TextRef} className="text-container">
              <h2       id="MedicalDataValue"
      name="MedicalDataValue" className="lg:text-4xl md:text-2xl text-sm font-semibold text-[#171717]">
                Managed medical data <br />
                generates added value.
              </h2>
              <a
                href="/MedicalDataValue"
                className="flex flex-row items-center gap-2 text-blue-600 mt-4"
              >
                <p className="text-sm md:text-xl">Learn more</p>
                <FaCircleArrowRight className="text-2xl" />
              </a>
            </div>
            <div className="flex-grow flex font-medium">
              <div className="relative h-full w-full">
                {/* 2. "Accumulation, Storage, and Management..." 텍스트 */}
                <p
                  ref={accumulationTextRef}
                  className="absolute bottom-24 lg:bottom-[310px] md:bottom-[200px] 2xl:left-28 lg:left-20  text-xs md:text-base lg:text-lg text-neutral-800 lg:text-center"
                >
                  Accumulation, Storage, and Management of <br className="hidden lg:block" /> Personal Medical Data
                  & AI Diagnosis
                </p>
                {/* 3. BlockChainBG 이미지 */}
                <img
                  ref={blockChainBGRef}
                  src={Images.BlockChainBG}
                  alt="blockCain-background"
                  className="lg:w-[520px] md:min-w-[320px] min-w-[180px] bottom-2 md:bottom-8 absolute z-0"
                />
                {/* 4. X-ray 이미지 1 */}
                <img
                  ref={xray2021Ref}
                  src={Images.Xray2021}
                  alt="xray-2021"
                  className="object-contain absolute lg:w-24 lg:bottom-[100px] 2xl:bottom-[100px] 2xl:left-28 lg:left-20 md:bottom-[68px] md:left-14 md:w-16 bottom-8 left-[40px] w-8 z-10"
                />
                {/* 5. X-ray 이미지 2 */}
                <img
                  ref={xray2022Ref}
                  src={Images.Xray2022}
                  alt="xray-2022"
                  className="object-contain absolute lg:w-28 lg:bottom-[156px] 2xl:left-52 lg:left-44 md:bottom-[108px] md:left-28 md:w-20 bottom-12 left-[70px] w-10 z-20"
                />
                {/* 6. X-ray 이미지 3 */}
                <img
                  ref={xray2023Ref}
                  src={Images.Xray2023}
                  alt="xray-2023"
                  className="object-contain absolute lg:w-32 lg:bottom-24 2xl:left-[300px] lg:left-[265px] md:bottom-[74px] md:w-20 md:left-44 bottom-8 w-10 left-[104px] z-30"
                />
                {/* 7. X-ray 이미지 4 */}
                <img
                  ref={xray2024Ref}
                  src={Images.Xray2024}
                  alt="xray-2024"
                  className="absolute lg:left-40 lg:bottom-6 lg:w-40 2xl:left-48 md:bottom-8 w-14 bottom-2 md:w-24 left-16 md:left-28 z-40"
                />
                {/* 8. "On BlockChain" 텍스트 */}
                <p
                  ref={onBlockChainTextRef}
                  className="absolute md:left-16 -bottom-4 md:-bottom-2 text-xs md:text-base lg:text-lg min-w-48 text-neutral-800 text-center lg:left-36 2xl:left-44 lg:-bottom-2 font-semibold "
                >
                  On BlockChain
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative z-30">
            {/* 9. 목업 이미지 */}
            <img
              ref={managementMockupRef}
              src={Images.ManagementMockup}
              className="w-60 object-contain"
              alt="management-mockup"
            />
            {/* 10. 텍스트 */}
            <p
              ref={transactionTextRef}
              className="lg:text-2xl md:text-lg text-xs text-center"
            >
              Processed X-ray data price Transactions{" "}
              <br className="lg:block md:hidden" />{" "}
              <span ref={usdTextRef} className="  font-semibold">30 ~100 USD</span>
            </p>
          </div>

          {/* Right Column */}
          <div className="col-span-4 lg:flex hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
