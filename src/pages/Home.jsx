// Home.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { handleSubmit } from "../utils/formHandler"; // 이메일 폼 제출 핸들러
import Images from "../assets/Images";
import Marquee from "react-fast-marquee";
import { scroller } from "react-scroll";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // 섹션 1 Refs
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // 섹션 2 Refs
  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const fireCRRef = useRef(null);
  const softwareRef = useRef(null);
  const qrCodeRef = useRef(null);
  const aiMockupRef = useRef(null);
  const aiDiagnosisRef = useRef(null);
  const crScannerTextRef = useRef(null); // 추가된 ref
  const scanSnapTextRef = useRef(null); // 추가된 ref

  // 섹션 3 Refs
  const section3Ref = useRef(null);
  const section3TextRef = useRef(null);
  const xray2021Ref = useRef(null);
  const xray2022Ref = useRef(null);
  const xray2023Ref = useRef(null);
  const managementMockupRef = useRef(null);
  const transactionTextRef = useRef(null);
  const usdTextRef = useRef(null);
  const chartRef = useRef(null); // 차트 Ref
  const accumulationTextRef = useRef(null); // 추가된 ref

  // 섹션 4 Refs
  const section4Ref = useRef(null);
  const section4TextRef = useRef(null);
  const medicalRef = useRef(null);
  const dentalRef = useRef(null);
  const logoRef = useRef(null);
  const availableTextRef = useRef(null);
  const productionTextRef = useRef(null); // 추가된 ref

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, []);

  // GSAP 애니메이션 설정
  useEffect(() => {
    const device = window.innerWidth <= 768 ? "mobile" : "desktop";

    // 섹션 1 애니메이션
    if (overlayRef.current) {
      const headingEnd = device === "mobile" ? "+=500px" : "+=550px";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top top",
            end: headingEnd,
            scrub: true,
            pin: true,
            markers: false,
          },
        })
        .to(overlayRef.current, {
          opacity: 0,
          y: -100,
          duration: 1.5, // Increased duration
          ease: "power1.out",
        });
    }

    // 섹션 2 애니메이션
    if (section2Ref.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          markers: false,
          onEnter: () => {
            // Section2 Title 등장
            gsap.fromTo(
              section2TextRef.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
            );

            // FireCR 이미지 등장
            gsap.fromTo(
              fireCRRef.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
            );

            // CR Scanner 텍스트 등장
            gsap.fromTo(
              crScannerTextRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.6,
              }
            );

            // FireCRSoftware 이미지 등장
            gsap.fromTo(
              softwareRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.9,
              }
            );

            // QRCode 이미지 등장
            gsap.fromTo(
              qrCodeRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.2,
              }
            );

            // "Scan the QR Code! Snap!" 텍스트 반짝임
            gsap.fromTo(
              scanSnapTextRef.current,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.5,
                repeat: 1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1.5,
                onComplete: () => {
                  gsap.set(scanSnapTextRef.current, { opacity: 1 });
                },
              }
            );

            // AI Mockup 이미지 등장
            gsap.fromTo(
              aiMockupRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.8,
              }
            );

            // AI Mockup 회전
            gsap.to(aiMockupRef.current, {
              rotationY: 360,
              duration: 3,
              ease: "power2.inOut",
              delay: 2.1,
            });

            // "Get a AI Diagnosis!" 텍스트 등장 및 반짝임
            gsap.fromTo(
              aiDiagnosisRef.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 2.4,
                onComplete: () => {
                  gsap.fromTo(
                    aiDiagnosisRef.current,
                    { opacity: 1 },
                    {
                      opacity: 0,
                      duration: 0.5,
                      repeat: 2,
                      yoyo: true,
                      ease: "power1.inOut",
                      onComplete: () => {
                        gsap.set(aiDiagnosisRef.current, { opacity: 1 });
                      },
                    }
                  );
                },
              }
            );
          },
        },
      });
    }

    // 섹션 3 애니메이션
    if (section3Ref.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top center",
          markers: false,
          onEnter: () => {
            // Section3 텍스트 등장
            gsap.fromTo(
              section3TextRef.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
            );

            // X-ray 이미지 1 등장
            gsap.fromTo(
              xray2021Ref.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.3,
              }
            );

            // X-ray 이미지 2 등장
            gsap.fromTo(
              xray2022Ref.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.6,
              }
            );

            // X-ray 이미지 3 등장
            gsap.fromTo(
              xray2023Ref.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.9,
              }
            );

            // Accumulation Text 등장
            gsap.fromTo(
              accumulationTextRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.2,
              }
            );

            // 차트 등장
            gsap.fromTo(
              chartRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.5,
              }
            );

            // 모바일 목업 이미지 등장
            gsap.fromTo(
              managementMockupRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.8,
              }
            );

            // 모바일 목업 회전
            gsap.to(managementMockupRef.current, {
              rotationY: 360,
              duration: 3,
              ease: "power2.inOut",
              delay: 2.1,
            });

            // "Processed X-ray data price Transactions" 텍스트 등장
            gsap.fromTo(
              transactionTextRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 2.4,
              }
            );

            // "30 ~100 USD" 텍스트 반짝이기
            gsap.fromTo(
              usdTextRef.current,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.5,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut",
                delay: 2.7,
                onComplete: () => {
                  gsap.set(usdTextRef.current, { opacity: 1 });
                },
              }
            );
          },
        },
      });
    }

    // 섹션 4 애니메이션
    if (section4Ref.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top center",
          markers: false,
          onEnter: () => {
            // Section4 텍스트 등장
            gsap.fromTo(
              section4TextRef.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
            );

            // Medical 이미지 등장
            gsap.fromTo(
              medicalRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.3,
              }
            );

            // Dental 이미지 등장
            gsap.fromTo(
              dentalRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.6,
              }
            );

            // Production Text 등장
            gsap.fromTo(
              productionTextRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.9,
              }
            );

            // Logo 등장
            gsap.fromTo(
              logoRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                delay: 1.2,
              }
            );

            // "Only 'Digiray' is available" 텍스트 반짝이기
            gsap.fromTo(
              availableTextRef.current,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.5,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1.5,
                onComplete: () => {
                  gsap.set(availableTextRef.current, { opacity: 1 });
                },
              }
            );
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="bg-[#FFF9F7]">
      <Section1
        videoRef={videoRef}
        overlayRef={overlayRef}
        headingRef={headingRef}
        subheadingRef={subheadingRef}
        formRef={formRef}
        buttonRef={buttonRef}
        handleSubmit={handleSubmit}
      />
      <Section2
        section2Ref={section2Ref}
        section2TextRef={section2TextRef}
        fireCRRef={fireCRRef}
        softwareRef={softwareRef}
        qrCodeRef={qrCodeRef}
        aiMockupRef={aiMockupRef}
        aiDiagnosisRef={aiDiagnosisRef}
        crScannerTextRef={crScannerTextRef}
        scanSnapTextRef={scanSnapTextRef}
      />
      <Section3
        section3Ref={section3Ref}
        section3TextRef={section3TextRef}
        xray2021Ref={xray2021Ref}
        xray2022Ref={xray2022Ref}
        xray2023Ref={xray2023Ref}
        managementMockupRef={managementMockupRef}
        transactionTextRef={transactionTextRef}
        usdTextRef={usdTextRef}
        chartRef={chartRef}
        accumulationTextRef={accumulationTextRef}
      />
      <Section4
        section4Ref={section4Ref}
        section4TextRef={section4TextRef}
        medicalRef={medicalRef}
        dentalRef={dentalRef}
        logoRef={logoRef}
        availableTextRef={availableTextRef}
        productionTextRef={productionTextRef}
      />
      {/* ... rest of your code (other sections, marquees, contact us, etc.) ... */}
    </div>
  );
};

export default Home;
