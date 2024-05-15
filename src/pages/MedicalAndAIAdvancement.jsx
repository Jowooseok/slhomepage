import React from "react";
import mobileMedicalAndAIAdvancementPage from "../assets/mobileMedicalAndAIAdvancementPage.png";
import MedicalAndAIAdvancementPage from "../assets/MedicalAndAIAdvancementPage.png"; 

const MedicalAndAIAdvancement = () => {
  return (
    <div>
      {" "}
      <section className=" flex flex-col gap-8 items-center lg:px-36 py-8 lg:mb-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Medical & AI Advancement
        </h1>
        <div className=" grid">
          <img src={mobileMedicalAndAIAdvancementPage} alt="mobileMedicalAndAIAdvancementPage" className="lg:hidden "  />
          <img src={MedicalAndAIAdvancementPage} alt="MedicalAndAIAdvancementPage" className="hidden lg:block "  />
        </div>
      </section>
    </div>
  );
};

export default MedicalAndAIAdvancement;
