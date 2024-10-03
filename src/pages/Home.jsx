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
  const scanSnapTextRef = useRef(null);   // 추가된 ref

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

  // GSAP 애니메이션 설정
  useEffect(() => {
    const device = window.innerWidth <= 768 ? "mobile" : "desktop";

    // 섹션 1 애니메이션
    if (overlayRef.current) {
      const headingEnd = device === "mobile" ? "+=500px" : "+=550px";
      gsap.timeline({
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top top",
          end: headingEnd,
          scrub: true,
          pin: true,
          markers: false, // 디버깅 시 true로 설정
        },
      }).to(overlayRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power1.out",
      });
    }

    // 섹션 2 애니메이션
    if (section2Ref.current) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
          markers: false, // 디버깅 시 true로 설정
        },
      });

      tl2
        // Section2 Title 등장
        .fromTo(
          section2TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        // FireCR 이미지 등장
        .fromTo(
          fireCRRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // CR Scanner 텍스트 등장
        .fromTo(
          crScannerTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // FireCRSoftware 이미지 등장
        .fromTo(
          softwareRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // QRCode 이미지 등장
        .fromTo(
          qrCodeRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // "Scan the QR Code! Snap!" 텍스트 반짝임 (한 번)
        .fromTo(
          scanSnapTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 1, // Blink once (initial state + 1 repeat)
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(scanSnapTextRef.current, { opacity: 1 }),
          },
          "+=0.3"
        )
        // AI Mockup 이미지 등장
        .fromTo(
          aiMockupRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // AI Mockup 회전
        .to(
          aiMockupRef.current,
          { rotationY: 360, duration: 3, ease: "power2.inOut" },
          "+=0.3"
        )
        // "Get a AI Diagnosis!" 텍스트 등장
        .fromTo(
          aiDiagnosisRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "+=0.3"
        )
        // "Get a AI Diagnosis!" 텍스트 반짝이기 (세 번)
        .fromTo(
          aiDiagnosisRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.5,
            repeat: 2, // Blink three times (initial state + 2 repeats)
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(aiDiagnosisRef.current, { opacity: 1 }),
          },
          "+=0.3"
        );
    }

    // 섹션 3 애니메이션
    if (section3Ref.current) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
          markers: false, // 디버깅 시 true로 설정
        },
      });

      tl3
        // Section3 텍스트 등장
        .fromTo(
          section3TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        // X-ray 이미지 1 등장
        .fromTo(
          xray2021Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // X-ray 이미지 2 등장
        .fromTo(
          xray2022Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // X-ray 이미지 3 등장
        .fromTo(
          xray2023Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // Accumulation Text 등장
        .fromTo(
          accumulationTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // 차트 등장
        .fromTo(
          chartRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
          "+=0.3"
        )
        // 모바일 목업 이미지 등장
        .fromTo(
          managementMockupRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // 모바일 목업 회전
        .to(
          managementMockupRef.current,
          { rotationY: 360, duration: 3, ease: "power2.inOut" },
          "+=0.3"
        )
        // "Processed X-ray data price Transactions" 텍스트 등장
        .fromTo(
          transactionTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // "30 ~100 USD" 텍스트 반짝이기
        .fromTo(
          usdTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () =>
              gsap.to(usdTextRef.current, { opacity: 1 }),
          },
          "+=0.3"
        );
    }

    // 섹션 4 애니메이션
    if (section4Ref.current) {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
          markers: false, // 디버깅 시 true로 설정
        },
      });

      tl4
        .fromTo(
          section4TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo(
          medicalRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        .fromTo(
          dentalRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        .fromTo(
          logoRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        .fromTo(
          availableTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () =>
              gsap.to(availableTextRef.current, { opacity: 1 }),
          },
          "+=0.3"
        );
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
        crScannerTextRef={crScannerTextRef} // 추가된 ref 전달
        scanSnapTextRef={scanSnapTextRef}   // 추가된 ref 전달
      />
      <Section3
        section3Ref={section3Ref}
        section3TextRef={section3TextRef}
        xray2021Ref={xray2021Ref}
        xray2022Ref={xray2022Ref}
        xray2023Ref={xray2023Ref}
        managementMockupRef={managementMockupRef}
        transactionTextRef={transactionTextRef}
        usdTextRef={usdTextRef} // "30 ~100 USD" 텍스트 ref
        chartRef={chartRef} // 차트 ref
        accumulationTextRef={accumulationTextRef} // 추가된 ref 전달
      />
      <Section4
        section4Ref={section4Ref}
        section4TextRef={section4TextRef}
        medicalRef={medicalRef}
        dentalRef={dentalRef}
        logoRef={logoRef}
        availableTextRef={availableTextRef}
      />
    </div>
  );
};

export default Home;
