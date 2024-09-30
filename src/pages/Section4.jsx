import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";

const Section4 = ({
  section4Ref,
  section4TextRef,
  medicalRef,
  dentalRef,
  logoRef,
  availableTextRef,
}) => {
  return (
    <div
      id="section4"
      ref={section4Ref}
      className="relative w-full overflow-hidden md:p-8 p-4"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="flex flex-col h-full relative pt-16">
        <div className="grid grid-cols-12 h-full relative mt-8">
          <div className="col-span-4 flex flex-col justify-between h-full relative">
            <div ref={section4TextRef} className="text-container">
              <h2 className="lg:text-4xl md:text-2xl text-sm font-semibold text-[#171717]">
                The 50,000 CR scanners sold by Digiray to hospitals can be
                remotely updated
              </h2>
              <div className="flex flex-row items-center gap-2 text-blue-600 mt-4">
                <p className="text-sm md:text-xl">Learn more</p>
                <FaCircleArrowRight className="text-2xl" />
              </div>
            </div>
            <div className="flex-grow flex">
              <div className="relative h-full w-full">
                <div className="absolute lg:bottom-32 md:bottom-28 lg:left-16  bottom-16">
                  <div
                    className="flex flex-col flex-grow  items-center gap-1"
                    ref={medicalRef}
                  >
                    <p className=" md:text-xl text-sm">Medical</p>
                    <img
                      src={Images.MedicalEquipment}
                      alt="MedicalEquipment"
                      className="w-24 md:w-44 lg:w-52 object-contain "
                    />
                    <p className="text-xs md:text-base  text-indigo-800 text-center">
                      [FireCR Flash <br className="md:hidden" />
                      Medical Reader]
                    </p>
                  </div>
                </div>
                <div className=" absolute lg:bottom-6 lg:left-64 md:left-48 bottom-0  left-24">
                  <div
                    className="flex flex-col flex-grow items-center gap-1"
                    ref={dentalRef}
                  >
                    <p className=" md:text-xl text-sm">Dental</p>
                    <img
                      src={Images.DentalEquipment}
                      alt="DentalEquipment"
                      className="min-w-24 md:min-w-44 lg:w-52 object-contain  "
                    />
                    <p className="text-xs md:text-base  text-indigo-800 text-center">
                      [FireCR Dental <br className="md:hidden" />
                      Reader]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative z-30">
            <img
              ref={logoRef}
              src={Images.DigirayLogo}
              className="w-60 object-contain "
              alt="Digiray Logo"
            />
            <p
              ref={availableTextRef}
              className="lg:text-2xl md:text-lg text-xs text-center "
            >
              Only 'Digiray' is available
            </p>
          </div>

          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
