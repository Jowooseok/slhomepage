import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { handleSubmit } from "../utils/formHandler"; // For email form submission
import Section4 from "./Section4";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Refs for all sections and elements
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const fireCRRef = useRef(null);
  const softwareRef = useRef(null);
  const qrCodeRef = useRef(null);
  const aiMockupRef = useRef(null);
  const aiDiagnosisRef = useRef(null);

  const section3Ref = useRef(null);
  const section3TextRef = useRef(null);
  const xray2021Ref = useRef(null);
  const xray2022Ref = useRef(null);
  const xray2023Ref = useRef(null);
  const managementMockupRef = useRef(null);
  const transactionTextRef = useRef(null);

    // Refs for elements in Section 4
    const section4Ref = useRef(null);
    const section4TextRef = useRef(null);
    const medicalRef = useRef(null);
    const dentalRef = useRef(null);
    const logoRef = useRef(null);
    const availableTextRef = useRef(null);
  

  // Initialize GSAP animations with ScrollTrigger
  useEffect(() => {
    const device = window.innerWidth <= 768 ? "mobile" : "desktop";

    // Section 1 Animations
    if (overlayRef.current) {
      const headingEnd = device === "mobile" ? "+=500px" : "+=550px";
      gsap.timeline({
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top top",
          end: headingEnd,
          scrub: true,
          pin: true,
        },
      }).to(overlayRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power1.out",
      });
    }

    // Section 2 Animations
    if (section2Ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
        },
      });

      tl.fromTo(section2TextRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(fireCRRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(softwareRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(qrCodeRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(aiMockupRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .to(aiMockupRef.current, { rotationY: 360, duration: 3, ease: "power2.inOut" }, "+=0.3")
        .fromTo(aiDiagnosisRef.current, { opacity: 0 }, {
          opacity: 1,
          duration: 0.5,
          repeat: 5,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => gsap.to(aiDiagnosisRef.current, { opacity: 1 }),
        }, "+=0.3");
    }

    // Section 3 Animations
    if (section3Ref.current) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
        },
      });

      tl3.fromTo(section3TextRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(xray2021Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(xray2022Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(xray2023Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .fromTo(managementMockupRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.3")
        .to(managementMockupRef.current, { rotationY: 360, duration: 3, ease: "power2.inOut" }, "+=0.3")
        .fromTo(transactionTextRef.current, { opacity: 0 }, {
          opacity: 1,
          duration: 0.5,
          repeat: 5,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => gsap.to(transactionTextRef.current, { opacity: 1 }),
        }, "+=0.3");
    }

    return () => ScrollTrigger.getAll().forEach(instance => instance.kill());
  }, []);

    // Initialize GSAP animations for Section 4
    useEffect(() => {
      if (section4Ref.current) {
        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: section4Ref.current,
            start: "top top",
            end: "+=200%",
            scrub: 3,
            pin: true,
            markers: false, // Set to true for debugging
          },
        });
  
        // Animate text and 'learn more' link
        tl4.fromTo(
          section4TextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
          // Animate Medical Equipment Image
          .fromTo(
            medicalRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "+=0.3"
          )
          // Animate Dental Equipment Image
          .fromTo(
            dentalRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "+=0.3"
          )
          // Animate Digiray Logo
          .fromTo(
            logoRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "+=0.3"
          )
          // Animate "Only 'Digiray' is available" text
          .fromTo(
            availableTextRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              repeat: 5,
              yoyo: true,
              ease: "power1.inOut",
              onComplete: () => gsap.to(availableTextRef.current, { opacity: 1 }),
            },
            "+=0.3"
          );
      }
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
      />
      <Section3
        section3Ref={section3Ref}
        section3TextRef={section3TextRef}
        xray2021Ref={xray2021Ref}
        xray2022Ref={xray2022Ref}
        xray2023Ref={xray2023Ref}
        managementMockupRef={managementMockupRef}
        transactionTextRef={transactionTextRef}
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
