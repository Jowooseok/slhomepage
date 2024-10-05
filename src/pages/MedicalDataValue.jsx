import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Images from "../assets/Images";

const MedicalDataValue = () => {
    // 애니메이션 제어용
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  
    useEffect(() => {
      if (inView) controls.start("visible");
  
    }, [
      controls,
      inView,
  
   
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
    <div className="bg-[#FFF9F7] ">
      {" "}
      <section className=" flex flex-col gap-4 md:gap-8 items-center py-8 lg:mx-8 lg:p-48 lg:pt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-start font-bold w-full pl-4 md:pl-8 ">
          Medical Data Value
        </h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:p-8 p-4 pt-0 md:pt-0">
          <video src={Images.MedicalDataValue1} alt="MedicalDataValue1"  />
          <img src={Images.MedicalDataValue2} alt="MedicalDataValue2"  />
          <img src={Images.MedicalDataValue3} alt="MedicalDataValue3"  />
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MedicalDataValue;
