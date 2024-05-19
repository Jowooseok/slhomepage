import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import medicalClientCompany from "../assets/medicalClientCompany.png";
import dentalClientCompany from "../assets/dentalClientCompany.png"; 

const VendorCompany = () => {
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
    <div>
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 lg:mx-8 lg:mb-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Vendor Company
        </h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <div className=" grid lg:grid-cols-2 gap-4">
          <img src={medicalClientCompany} alt="medicalClientCompany"  />
          <img src={dentalClientCompany} alt="dentalClientCompany"  />
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default VendorCompany;
