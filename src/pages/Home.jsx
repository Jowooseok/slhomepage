// Home.js
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { handleSubmit } from "../utils/formHandler"; // 이메일 폼 제출 핸들러
import Images from "../assets/Images";
import Marquee from "react-fast-marquee";
import { animateScroll, scroller } from "react-scroll";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [email, setEmail] = useState("");

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
  const accumulationTextRef = useRef(null);
  const blockChainBGRef = useRef(null);
  const xray2021Ref = useRef(null);
  const xray2022Ref = useRef(null);
  const xray2023Ref = useRef(null);
  const xray2024Ref = useRef(null); // 추가된 ref
  const onBlockChainTextRef = useRef(null); // 추가된 ref
  const managementMockupRef = useRef(null);
  const transactionTextRef = useRef(null);
  const usdTextRef = useRef(null);

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
            scrub: 2,
            pin: true,
            markers: false,
          },
        })
        .to(overlayRef.current, {
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
          end: "+=500%", // 애니메이션 구간을 늘림
          scrub: 1, // 애니메이션이 천천히 진행되도록 함
          pin: true,
          markers: false,
        },
      });

      tl2
        // Section2 Title 등장
        .fromTo(
          section2TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0
        )
        // FireCR 이미지 등장
        .fromTo(
          fireCRRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // CR Scanner 텍스트 등장
        .fromTo(
          crScannerTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // FireCRSoftware 이미지 등장
        .fromTo(
          softwareRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // QRCode 이미지 등장
        .fromTo(
          qrCodeRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // "Scan the QR Code! Snap!" 텍스트 반짝임
        .fromTo(
          scanSnapTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(scanSnapTextRef.current, { opacity: 1 }),
          },
          "+=2"
        )
        // AI Mockup 이미지 등장
        .fromTo(
          aiMockupRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // AI Mockup 회전
        .to(
          aiMockupRef.current,
          { rotationY: 360, duration: 3, ease: "power2.inOut" },
          "+=2"
        )
        // "Get a AI Diagnosis!" 텍스트 등장
        .fromTo(
          aiDiagnosisRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "+=2"
        )
        // "Get a AI Diagnosis!" 텍스트 반짝이기
        .fromTo(
          aiDiagnosisRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.5,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(aiDiagnosisRef.current, { opacity: 1 }),
          },
          "+=2"
        )
        .to({}, { duration: 3 })
        .to({}, { duration: 3 })
        .to({}, { duration: 3 });
    }

    // 섹션 3 애니메이션
    // 섹션 3 애니메이션
    if (section3Ref.current) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top top",
          end: "+=500%", // 애니메이션 구간을 늘림
          scrub: 1, // 애니메이션이 천천히 진행되도록 함
          pin: true,
          markers: false,
        },
      });

      tl3
        // 1. "Managed medical data generates added value. Learn more" 텍스트
        .fromTo(
          section3TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0
        )
        // 2. "Accumulation, Storage, and Management..." 텍스트
        .fromTo(
          accumulationTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 3. BlockChainBG 이미지
        .fromTo(
          blockChainBGRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "+=2"
        )
        // 4. X-ray 이미지 1 등장
        .fromTo(
          xray2021Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 5. X-ray 이미지 2 등장
        .fromTo(
          xray2022Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 6. X-ray 이미지 3 등장
        .fromTo(
          xray2023Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 7. X-ray 이미지 4 등장
        .fromTo(
          xray2024Ref.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 8. "On BlockChain" 텍스트 등장
        .fromTo(
          onBlockChainTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 9. 목업 이미지 등장
        .fromTo(
          managementMockupRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // 10. 텍스트 등장
        .fromTo(
          transactionTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // "30 ~100 USD" 텍스트 반짝이기
        .fromTo(
          usdTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(usdTextRef.current, { opacity: 1 }),
          },
          "+=2"
        )
        .to({}, { duration: 3 })
        .to({}, { duration: 3 })
        .to({}, { duration: 3 });
    }

    // 섹션 4 애니메이션
    if (section4Ref.current) {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top top",
          end: "+=500%", // 애니메이션 구간을 늘림
          scrub: 1, // 애니메이션이 천천히 진행되도록 함
          pin: true,
          markers: false,
        },
      });

      tl4
        // Section4 텍스트 등장
        .fromTo(
          section4TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0
        )
        // Medical 이미지 등장
        .fromTo(
          medicalRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // Dental 이미지 등장
        .fromTo(
          dentalRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // Production Text 등장
        .fromTo(
          productionTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // Logo 등장
        .fromTo(
          logoRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=2"
        )
        // "Only 'Digiray' is available" 텍스트 반짝이기
        .fromTo(
          availableTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => gsap.to(availableTextRef.current, { opacity: 1 }),
          },
          "+=2"
        )
        .to({}, { duration: 3 })
        .to({}, { duration: 3 })
        .to({}, { duration: 3 });
    }

    // 컴포넌트 언마운트 시 ScrollTrigger 제거
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
        accumulationTextRef={accumulationTextRef}
        blockChainBGRef={blockChainBGRef}
        xray2021Ref={xray2021Ref}
        xray2022Ref={xray2022Ref}
        xray2023Ref={xray2023Ref}
        xray2024Ref={xray2024Ref}
        onBlockChainTextRef={onBlockChainTextRef}
        managementMockupRef={managementMockupRef}
        transactionTextRef={transactionTextRef}
        usdTextRef={usdTextRef}
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
      <section
        id="AboutSavetheLife"
        className="flex flex-col md:p-8 p-4 lg:mt-24 font-semibold items-center justify-center md:h-[calc(100vh - 4rem)]"
      >
        <h1 className="text-xl lg:text-4xl md:text-3xl md:text-start text-center lg:text-center font-bold ">
          Digiray's [Save the Life] Project
        </h1>
        <div className="md:mt-8 mt-4 lg:p-24 lg:pt-0 flex justify-center">
          <img
            src={Images.slboxImage}
            alt="SLprotocol"
            className=" hidden sm:block lg:w-[80%] 2xl:w-[70%] self-center "
          />
          <img
            src={Images.mobileAboutSL}
            alt="SLprotocol"
            className=" block sm:hidden "
          />
        </div>
      </section>

      <section className="flex flex-col md:p-8 p-4 mt-24 font-semibold items-center justify-center lg:h-[calc(100vh - 4rem)]">
        <h1 className="text-2xl lg:text-4xl md:text-3xl lg:pl-24  md:text-start text-center font-bold w-full mt-16 sm:mt-0 ">
          DApp Launch Plan
        </h1>
        <div className="grid grid-cols-2 lg:px-24 gap-4 mt-12">
          <div className="col-span-2 lg:col-span-1">
            <div>
              <p className="text-lg font-bold">For Humans</p>
              <p className="text-xs md:text-base">
                Healthcare Medical Data Collection Solution DApp
              </p>
              <img
                src={Images.SuccessFactor1}
                alt="sl-pationt-app"
                className=" mt-5"
              />
              <div className="flex flex-row items-center gap-2 lg:gap-4 w-full justify-center mt-8">
                <p className="flex items-center justify-center text-xs md:text-sm lg:text-base h-14 lg:h-16">
                  Launch planned for{" "}
                  <span className=" font-bold"> &nbsp;Q2 2025</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
            <div>
              <p className="text-lg font-bold">For Pets</p>
              <p className="text-xs md:text-base">
                Healthcare Medical Data Collection Solution DApp
              </p>
              <img
                src={Images.SuccessFactor2}
                alt="sl-animals-app"
                className="mt-5"
              />
              <div className="flex flex-row items-center gap-2 lg:gap-4 w-full justify-center mt-8">
                <p className="flex items-center justify-center text-xs md:text-sm lg:text-base h-14 lg:h-16">
                  Launch planned for{" "}
                  <span className=" font-bold"> &nbsp;Q4 2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width-marquee bg-white mr-4  my-16 ">
        <Marquee>
          <img
            src={Images.motionVendorListImage}
            alt="motionVendorListImage"
            className=" lg:h-28 md:h-20 h-16 mr-12 "
          />
        </Marquee>
      </section>

      <section className="xl:py-16 lg:my-32 py-16 full-width-marquee xl:space-y-12 space-y-4 bg-[#3A5FCD]">
        <Marquee>
          <img
            src={Images.motionImage}
            alt="motionImage"
            className=" lg:h-48  h-40 mr-6"
          />
        </Marquee>
        <Marquee direction={"right"}>
          <img
            src={Images.motionImage2}
            alt="motionImage2"
            className=" lg:h-40  h-28 mr-4 "
          />
        </Marquee>
      </section>
      {/**contact us */}
      <section
        className="hidden lg:flex flex-col  xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 w-2/3 mx-auto "
        style={{
          background: `no-repeat center url(${Images.contactUsBackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="xl:text-3xl text-lg text-white">
          <p>
            Sign up for email updates{" "}
            <span className="opacity-70">
              to keep up <br className={"hidden xl:block"} />
              to date with the SL Protocol
            </span>
          </p>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, email, setEmail)}
          className="flex flex-col gap-4"
        >
          <input
            placeholder="Email"
            type="email"
            className="xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white border-white-800 px-4 bg-inherit focus:outline-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
          >
            GET UPDATES
          </button>
        </form>
      </section>

      <section className="lg:hidden flex flex-col xl:mx-20 mx-4 xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 bg-[#3A5FCD]">
        <div className="xl:text-3xl text-lg text-white">
          <p>
            Sign up for email updates{" "}
            <span className="opacity-70">
              to keep up <br className={"hidden xl:block"} />
              to date with the SL Protocol
            </span>
          </p>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, email, setEmail)}
          className="flex flex-col gap-4"
        >
          <input
            placeholder="Email"
            type="email"
            className="xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white border-white-800 px-4 bg-inherit focus:outline-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
          >
            GET UPDATES
          </button>
        </form>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
