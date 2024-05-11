import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Test = () => {
  const controlsOne = useAnimation();
  const [refOne, inViewOne] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const controlsTwo = useAnimation();
  const [refTwo, inViewTwo] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  React.useEffect(() => {
    if (inViewOne) {
      controlsOne.start('visible');
    }
    if (inViewTwo) {
      controlsTwo.start('visible');
    }
  }, [controlsOne, inViewOne, controlsTwo, inViewTwo]);

  // 각 섹션별 애니메이션 정의
  const variantsOne = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const variantsTwo = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      <motion.div
        ref={refOne}
        initial="hidden"
        animate={controlsOne}
        variants={variantsOne}
        style={{ margin: '100vh 0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
      >
        <h1>첫 번째 섹션 🚀</h1>
      </motion.div>
      <motion.div
        ref={refTwo}
        initial="hidden"
        animate={controlsTwo}
        variants={variantsTwo}
        style={{ margin: '100vh 0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen' }}
      >
        <h1>두 번째 섹션 ✨</h1>
      </motion.div>
    </div>
  );
};

export default Test;
