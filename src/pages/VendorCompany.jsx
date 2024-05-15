import React from "react";
import medicalClientCompany from "../assets/medicalClientCompany.png";
import dentalClientCompany from "../assets/dentalClientCompany.png"; 

const VendorCompany = () => {
  return (
    <div>
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 lg:mx-8 lg:mb-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Vendor Company
        </h1>
        <div className=" grid lg:grid-cols-2 gap-4">
          <img src={medicalClientCompany} alt="medicalClientCompany"  />
          <img src={dentalClientCompany} alt="dentalClientCompany"  />
        </div>
      </section>
    </div>
  );
};

export default VendorCompany;
