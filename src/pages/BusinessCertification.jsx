import {useEffect} from "react";
import Images from "../assets/Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const BusinessCertification = () => {
  
  // 애니메이션 제어용
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 애니메이션 제어용
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 두 번째 요소의 애니메이션 제어와 참조
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
 
  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
  }, [
    controls,
    inView,
    controls1,
    inView1,
    controls2,
    inView2,
 
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
    <div className="lg:mb-20 lg:px-48">
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 lg:mx-8">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          AI Technology info
        </h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <img src={Images.aiTechnologyInfo} alt="aiTechnologyInfo" className="" />
        </motion.div>
      </section>
      <section className=" flex flex-col gap-8 items-center py-8 lg:mx-8">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
        X-Ray Device Products info
        </h1>
        <motion.div
          ref={ref1} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls1} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <div className=" grid sm:grid-cols-2 gap-4" >
    
          <img src={Images.fireCRDentalReader} alt="fireCRDentalReader"  />
          <img src={Images.fireCRFlashMedicalReader} alt="fireCRFlashMedicalReader" />
     
        </div>
        </motion.div>
      </section>
      <section className=" flex flex-col gap-8 items-center py-8 lg:mx-8">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
        38+ Certificate
        </h1>
        <motion.div
          ref={ref2} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls2} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
        <div className=" grid sm:grid-cols-2 gap-4" >
    
          <img src={Images.DentalClientCompany} alt="DentalClientCompany"  />
          <img src={Images.OverseasCertification} alt="OverseasCertification" />
         
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BusinessCertification;
