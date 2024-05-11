import React from "react";
import PCImage from "../assets/patentPagePC.png";
import mobileDomesticImage from "../assets/patentPageMobileDomestic.png";
import mobileOverseasImage from "../assets/patentPageMobileOverseas.png";

const Patent = () => {
  return (
    <div>
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 mx-8 lg:mb-16">
        <h1 className="text-xl lg:text-3xl text-center font-bold text-white">
          Patent
        </h1>
        <div className="hidden lg:block">
          <img src={PCImage} alt="PCImage"  />
        </div>
        <div className=" grid gap-4 lg:hidden">
          <img
            src={mobileDomesticImage}
            alt="mobileDomesticImage"
            className=" rounded"
          />
          <img
            src={mobileOverseasImage}
            alt="mobileOverseasImage"
            className=" rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default Patent;
