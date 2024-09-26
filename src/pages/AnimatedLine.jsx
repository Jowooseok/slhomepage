import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AnimatedLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const element = lineRef.current;

    gsap.fromTo(
      element,
      { width: '0%' },
      {
        width: '100%',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          // markers: true, // 디버깅 시 활성화
        },
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div ref={lineRef} className="h-1 bg-blue-500 w-full"></div>
    </div>
  );
};

export default AnimatedLine;
