import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tokenBurningPage1 from "../assets/tokenBurningPage1.png";
import tokenBurningPage2 from "../assets/tokenBurningPage2.png";
import tokenBurningPage3 from "../assets/tokenBurningPage3.png";

const TokenBurning = () => {
    // 애니메이션 제어용
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
    const controls1 = useAnimation();
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  
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
      controls2,
      inView1,
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
    <div>
      {" "}
      <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
      <section className=" flex flex-col gap-8 items-center py-8 lg:px-32  lg:mb-16  ">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Token Burning
        </h1>
        <p className=" text-lg lg:text-3xl">
          Incase : 1 Data(1 SL Token) is 1$
        </p>
        <div className=" grid lg:mx-20 gap-16 ">
          <div className="flex flex-row items-center justify-center gap-4  lg:mt-16">
            <img
              src={tokenBurningPage1}
              alt="tokenBurningPage1"
              className=" lg:w-80 lg:h-80 w-28 h-28"
            />
            <p className="lg:text-xl text-xs">
              There are thousands of AI research institutes<br className=" hidden lg:block"/> and companies in
              OECD countries.  If 100 data purchasing entities (hospitals,
              research institutions, AI startups, etc.)<br className=" hidden lg:block"/> each buy 1M data, a
              token burn worth 100 million dollars will occur.
            </p>
          </div>
        </div>
      </section>
      </motion.div>
      <section className=" flex flex-col gap-8 items-center py-8 lg:px-32  lg:mb-16 lg:gap-16 ">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
        Buyer in discussion <br/>
(Purchaser of medical data)
        </h1>
  
        <div className=" grid sm:grid-cols-2 lg:mx-20 lg:gap-8 gap-4 ">
        <motion.div
          ref={ref1} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls1} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <img src={tokenBurningPage2} alt="tokenBurningPage2" />
          </motion.div>
          <motion.div
          ref={ref2} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls2} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <img src={tokenBurningPage3} alt="tokenBurningPage3" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TokenBurning;
