import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mobileMedicalAndAIAdvancementPage from "../assets/mobileMedicalAndAIAdvancementPage.png";
import MedicalAndAIAdvancementPage from "../assets/MedicalAndAIAdvancementPage.png"; 

const MedicalAndAIAdvancement = () => {
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
      <section className=" flex flex-col gap-8 items-center lg:px-36 py-8 lg:mb-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Medical & AI Advancement
        </h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <div className=" grid">
          <img src={mobileMedicalAndAIAdvancementPage} alt="mobileMedicalAndAIAdvancementPage" className="lg:hidden "  />
          <img src={MedicalAndAIAdvancementPage} alt="MedicalAndAIAdvancementPage" className="hidden lg:block "  />
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MedicalAndAIAdvancement;
