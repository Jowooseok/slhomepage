import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Images from "../assets/Images";

const CompanyIntroduction = () => {
  // 각각의 섹션에 대해 애니메이션 제어용 및 감지 요소 설정
  const controlsXRay = useAnimation();
  const controlsAI = useAnimation();
  const controlsVendor = useAnimation();
  const controlsPatent = useAnimation();
  const controlsCertificate = useAnimation();

  const [refXRay, inViewXRay] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refAI, inViewAI] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refVendor, inViewVendor] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refPatent, inViewPatent] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refCertificate, inViewCertificate] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inViewXRay) controlsXRay.start("visible");
    if (inViewAI) controlsAI.start("visible");
    if (inViewVendor) controlsVendor.start("visible");
    if (inViewPatent) controlsPatent.start("visible");
    if (inViewCertificate) controlsCertificate.start("visible");
  }, [controlsXRay, controlsAI, controlsVendor, controlsPatent, controlsCertificate, inViewXRay, inViewAI, inViewVendor, inViewPatent, inViewCertificate]);

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#FFF9F7]">
      <img src={Images.IntroDigiray} alt="companyIntro" className="lg:pt-16 md:pt-8 hidden md:block" />

      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold w-full md:pt-8">X-Ray Device</h1>
        <motion.div
          ref={refXRay} // X-Ray 섹션 감지
          initial="hidden"
          animate={controlsXRay}
          variants={variants}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
            <img src={Images.MedicalDevice} alt="MedicalDevice" />
            <img src={Images.DentalDevice} alt="DentalDevice" />
            <img src={Images.DentalAnimalsDevice} alt="DentalAnimalsDevice" />
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold w-full md:pt-8">AI Software</h1>
        <motion.div
          ref={refAI} // AI Software 섹션 감지
          initial="hidden"
          animate={controlsAI}
          variants={variants}
        >
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
            <img src={Images.AISoftware1} alt="AISoftware1" className="w-full" />
            <img src={Images.AISoftware2} alt="AISoftware2" className="w-full" />
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold w-full md:pt-8">Vendor Company</h1>
        <motion.div
          ref={refVendor} // Vendor 섹션 감지
          initial="hidden"
          animate={controlsVendor}
          variants={variants}
        >
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
            <img src={Images.Vendor1} alt="Vendor1" />
            <img src={Images.Vendor2} alt="Vendor2" />
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold w-full md:pt-8">Patent</h1>
        <motion.div
          ref={refPatent} // Patent 섹션 감지
          initial="hidden"
          animate={controlsPatent}
          variants={variants}
        >
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
            <img src={Images.Patent1} alt="Patent1" />
            <img src={Images.Patent2} alt="Patent2" />
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold w-full md:pt-8">Certificate</h1>
        <motion.div
          ref={refCertificate} // Certificate 섹션 감지
          initial="hidden"
          animate={controlsCertificate}
          variants={variants}
        >
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
            <img src={Images.Certificate1} alt="Certificate1" />
            <img src={Images.Certificate2} alt="Certificate2" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompanyIntroduction;
