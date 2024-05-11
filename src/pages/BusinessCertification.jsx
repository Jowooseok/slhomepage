import React from "react";
import aiTechnologyInfo from "../assets/aiTechnologyInfo.png";
import fireCRDentalReader from "../assets/fireCRDentalReader.png";
import fireCRFlashMedicalReader from "../assets/fireCRFlashMedicalReader.png";
import DentalClientCompany from "../assets/DomesticCertification.png";
import OverseasCertification from "../assets/OverseasCertification.png";

const BusinessCertification = () => {
  return (
    <div className="lg:mb-20">
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 mx-8">
        <h1 className="text-xl lg:text-3xl text-center font-bold text-white">
          AI Technology info
        </h1>
        <img src={aiTechnologyInfo} alt="aiTechnologyInfo" className=" lg:w-4/5" />
      </section>
      <section className=" flex flex-col gap-8 items-center py-8 mx-8">
        <h1 className="text-xl lg:text-3xl text-center font-bold text-white">
        X-Ray Device Products info
        </h1>
        <div className=" grid lg:grid-cols-2 gap-4" >
          <img src={fireCRDentalReader} alt="fireCRDentalReader"  />
          <img src={fireCRFlashMedicalReader} alt="fireCRFlashMedicalReader" />
        </div>
      </section>
      <section className=" flex flex-col gap-8 items-center py-8 mx-8">
        <h1 className="text-xl lg:text-3xl text-center font-bold text-white">
        38+ Certificate
        </h1>
        <div className=" grid lg:grid-cols-2 gap-4" >
          <img src={DentalClientCompany} alt="DentalClientCompany"  />
          <img src={OverseasCertification} alt="OverseasCertification" />
        </div>
      </section>
    </div>
  );
};

export default BusinessCertification;
