import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import keyFeaturesPC from "../assets/keyFeaturesPC.png";
import benefitsPC from "../assets/benefitsPC.png";
import byDisease from "../assets/byDisease.png";
import byResearchSubject from "../assets/byResearchSubject.png";
import byRace from "../assets/byRace.png";
import byGender from "../assets/byGender.png";
import benefitsMobile from "../assets/benefitsMobile.png";

const MedicalAndAIAdvancement = () => {
  // 애니메이션 제어용
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
  }, [
    controls,
    inView,
    controls1,
    controls2,
    inView1,
    inView2,
    inView3,
    controls3,
  ]);

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
    <div>
      {" "}
      <section className=" flex flex-col lg:gap-16 gap-8 items-center lg:px-36 py-8 lg:mb-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Medical & AI Advancement
        </h1>

        <div className=" grid w-full">
          <motion.div
            ref={ref} // 감지할 요소의 참조 연결
            initial="hidden" // 초기 상태는 'hidden'
            animate={controls} // 애니메이션 컨트롤
            variants={variants} // 위에서 정의한 variants 사용
            className=" w-full"
          >
            <div className="flex flex-col justify-start lg:gap-8 gap-4 text-lg w-full">
              <h2 className="lg:text-3xl font-semibold">
                Harnessing the power of AI to enhance <br /> medical research
                and data analysis.
              </h2>
              <p className=" text-xs lg:text-lg">
                {" "}
                Our platform offers a streamlined approach to accessing and
                utilizing <br className="hidden lg:block" />
                medical data for improved research outcomes.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h2 className=" text-xl lg:text-3xl font-semibold">Key Features</h2>
          <motion.div
            ref={ref1} // 감지할 요소의 참조 연결
            initial="hidden" // 초기 상태는 'hidden'
            animate={controls1} // 애니메이션 컨트롤
            variants={variants} // 위에서 정의한 variants 사용
            className=" w-full"
          >
            <img src={keyFeaturesPC} alt="keyFeaturesPC" className="w-full hidden lg:block" />
            <div className="lg:hidden flex flex-col gap-4">
              <img src={byDisease} alt="byDisease" className="" />
              <img src={byResearchSubject} alt="byResearchSubject" className="" />
              <img src={byRace} alt="byRace" className="" />
              <img src={byGender} alt="byGender" className="" />

            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-xl lg:text-3xl  font-semibold">Benefits</h2>
          <motion.div
            ref={ref2} // 감지할 요소의 참조 연결
            initial="hidden" // 초기 상태는 'hidden'
            animate={controls2} // 애니메이션 컨트롤
            variants={variants} // 위에서 정의한 variants 사용
            className=" w-full"
          >
            <img src={benefitsPC} alt="benefitsPC" className="w-full hidden lg:block" />
            <img src={benefitsMobile} alt="benefitsMobile" className="w-full lg:hidden" />
          </motion.div>
        </div>
        <div className=" grid w-full">
          <div className="flex flex-col justify-start lg:gap-8 gap-4 text-lg w-full text-center">
            <h2 className=" text-xl lg:text-3xl  font-semibold">Enhancing Medical Research with AI</h2>
            <motion.div
              ref={ref3} // 감지할 요소의 참조 연결
              initial="hidden" // 초기 상태는 'hidden'
              animate={controls3} // 애니메이션 컨트롤
              variants={variants} // 위에서 정의한 variants 사용
              className=" w-full"
            >
              <p className=" lg:text-lg text-sm">
                Our platform integrates advanced AI technology to revolutionize
                how medical research is conducted.<br className=" hidden lg:block"/> By offering precise data
                categorization and easy access to essential medical information,<br className=" hidden lg:block"/>
                we empower researchers to achieve more accurate and timely
                results.<br className=" hidden lg:block"/> Join us in advancing the future of medical research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalAndAIAdvancement;
