import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Images from "../assets/Images";
import Vedio from "../assets/Videos";
import { FaCirclePlay } from "react-icons/fa6";

const MedicalAISolution = () => {
  // 섹션 1 애니메이션 제어용
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 섹션 2 애니메이션 제어용
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 섹션 3 애니메이션 제어용
  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView1) controls1.start("visible");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
  }, [controls3, inView3]);

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
      {/* 섹션 1 */}
      <section className="flex flex-col gap-4 md:gap-8 items-center py-8 md:pb-4 lg:p-20 lg:pb-8 lg:pt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-start font-bold w-full pl-4 md:pl-8 ">
          Medical AI Solution
        </h1>
        <motion.div
          ref={ref1} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls1} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 md:p-8 p-4 pt-0 md:pt-0 w-full inset-0">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              style={{ pointerEvents: "none" }}
              className="rounded-3xl w-full"
            >
              <source src={Vedio.CRXVedio} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center md:gap-8 gap-4 text-sm md:text-base lg:text-xl">
              <p>
                Interprets, and supplies medical imaging data to advance medical
                imaging diagnostic technology and provides Medical AI second
                opinions at a cost close to free.
              </p>
              <a
                href="https://youtu.be/_RhzLKkZ-lk"
                className="flex flex-row items-center gap-2 justify-start text-[#0147e5] lg:text-2xl text-xl "
              >
                <FaCirclePlay className="lg:w-10 lg:h-10 w-8 h-8" />
                <p>Watch the Video</p>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 섹션 2 */}
      <section className="md:pb-16 pb-8">
        <motion.div
          ref={ref2} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls2} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <img
            src={Images.AIAccuracyPC}
            alt="AIAccuracyPC"
            className="hidden md:block"
          />
          <img
            src={Images.AIAccuracyMobile}
            alt="AIAccuracyMobile"
            className="block md:hidden"
          />
        </motion.div>
      </section>

      {/* 섹션 3 */}
      <section className="md:pb-16 lg:p-28 md:p-8 md:pt-0 lg:pt-0 pt-0">
        <motion.div
          ref={ref3} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls3} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <img
            src={Images.AIMobilePC}
            alt="AIMobilePC"
            className="hidden md:block"
          />
          <img
            src={Images.AIMobile}
            alt="AIMobile"
            className="md:hidden p-4"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default MedicalAISolution;
