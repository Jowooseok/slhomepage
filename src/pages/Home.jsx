import React, { useRef, useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa"; // Play icon
import { gsap } from "gsap"; // GSAP animation library
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger plugin
import Videos from "../assets/Videos"; // Video files path
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firebase Firestore functions
import { db } from "../firebaseConfig"; // Firebase configuration
import { FaCircle } from "react-icons/fa";
import Images from "../assets/Images";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Refs for video and overlay elements
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // Refs for individual elements
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // State to manage email input
  const [email, setEmail] = useState("");

  // Handler for email subscription form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!email || !emailRegex.test(email)) {
      // If email is empty or invalid
      alert("Please enter a valid email.");
      return;
    }

    try {
      // Add a new document to the 'emails' collection in Firestore
      await addDoc(collection(db, "emails"), {
        email: email,
        createdAt: serverTimestamp(), // Add server timestamp
      });
      setEmail(""); // Reset email input
      alert(
        "Thank you for subscribing! You will soon receive updates from SL Protocol."
      );
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("There was an error subscribing. Please try again later.");
    }
  };

  // Set CSS variable for viewport height
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  // Initialize GSAP animations with ScrollTrigger
  useEffect(() => {
    const overlayElement = overlayRef.current; // Reference to overlay element

    // Overlay ScrollTrigger setup
    if (overlayElement) {
      gsap.timeline({
        scrollTrigger: {
          trigger: overlayElement, // Element that triggers the animation
          start: "top top", // Start point
          end: "+=550", // Scroll distance for the animation
          scrub: true, // Sync animation with scroll
          pin: true, // Pin the trigger element
          anticipatePin: 1,
          markers: { startColor: "green", endColor: "red" }, // Overlay marker colors (주석 처리)
        },
      });
    }

    // Video ScrollTrigger setup
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        {},
        {
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%", // When the top of the video hits 80% of the viewport
            end: "top 60%", // When the top of the video hits 60% of the viewport
            scrub: 2, // Sync animation with scroll
            // markers: { startColor: "purple", endColor: "purple" }, // Marker color (주석 처리)
          },
        }
      );
    }

    // Heading ScrollTrigger and animation
    if (headingRef.current) {
      const isMobile = window.innerWidth <= 768; // 모바일 기준 너비 (예: 768px 이하)

      const headingingStart = isMobile ? "bottom 28%" : "bottom 33%";
      const headingingEnd = isMobile ? "bottom 28%" : "bottom 33%";

      gsap.fromTo(
        headingRef.current,
        { opacity: 1, y: 0 }, // Initial state
        {
          opacity: 0,
          y: -20,
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: headingingStart,
            end: headingingEnd,
            scrub: 2, // Sync animation with scroll
            // markers: { startColor: "blue", endColor: "blue" }, // Marker color (주석 처리)
          },
        }
      );
    }

    // Subheading ScrollTrigger and animation
    if (subheadingRef.current) {
      const isMobile = window.innerWidth <= 768; // 모바일 기준 너비 (예: 768px 이하)

      const subheadingStart = isMobile ? "bottom 32%" : "bottom 38%";
      const subheadingEnd = isMobile ? "bottom 32%" : "bottom 38%";
      gsap.fromTo(
        subheadingRef.current,
        {}, // Initial state
        {
          color: "#171717",
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: subheadingStart,
            end: subheadingEnd,
            scrub: 2, // Sync animation with scroll
            // markers: true,
          },
        }
      );
    }

    // Form ScrollTrigger and animation
    if (formRef.current) {
      const isMobile = window.innerWidth <= 768; // 모바일 기준 너비 (예: 768px 이하)

      const formStart = isMobile ? "bottom 58%" : "bottom 50%";
      const formEnd = isMobile ? "bottom 58%" : "bottom 50%";

      gsap.fromTo(
        formRef.current,
        { opacity: 1, y: 0 }, // Initial state
        {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: formStart,
            end: formEnd,
            scrub: 2, // Sync animation with scroll
            // markers: true,
          },
        }
      );
    }

    // Play Video button ScrollTrigger and state changes
    if (buttonRef.current) {
      // 화면 크기에 따라 start와 end 값 설정
      const isMobile = window.innerWidth <= 768; // 모바일 기준 너비 (예: 768px 이하)

      const buttonStart = isMobile ? "bottom 70%" : "bottom 60%";
      const buttonEnd = isMobile ? "bottom 70%" : "bottom 60%";

      gsap.fromTo(
        buttonRef.current,
        { opacity: 1, scale: 1, visibility: "visible" }, // Initial state
        {
          opacity: 0, // Fade out on scroll
          scale: 0.8, // Scale down on scroll
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current, // Trigger element
            start: buttonStart, // Start point (모바일과 데스크탑에 따라 다름)
            end: buttonEnd, // End point (모바일과 데스크탑에 따라 다름)
            scrub: 2, // Sync animation with scroll
            // markers: { startColor: "orange", endColor: "orange" }, // Marker color for debugging
            onEnter: () => {
              if (buttonRef.current) {
                gsap.set(buttonRef.current, {
                  pointerEvents: "auto",
                  opacity: 1,
                  visibility: "visible", // 버튼이 보이도록 설정
                });
                console.log("Button is clickable (onEnter)");
              }
            },
            onLeave: () => {
              if (buttonRef.current) {
                gsap.set(buttonRef.current, {
                  pointerEvents: "none",
                  opacity: 0,
                  visibility: "hidden", // 버튼을 화면에서 숨김
                });
                console.log("Button is not clickable (onLeave)");
              }
            },

            onLeaveBack: () => {
              if (buttonRef.current) {
                gsap.set(buttonRef.current, {
                  pointerEvents: "auto",
                  opacity: 0,
                  visibility: "visible", // 다시 숨김
                });
                console.log("Button is not clickable (onLeaveBack)");
              }
            },
            onUpdate: (self) => {
              console.log(
                `progress: ${self.progress}, direction: ${self.direction}`
              );
            },
          },
        }
      );
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div>
      <div
        id="section1"
        className="relative w-full overflow-hidden md:p-8 md:pt-0 p-4 pt-0"
        style={{ height: "calc(100vh - 4rem)" }} // 전체 화면 높이에서 4rem 마진만큼 제외
      >
        {/* Container for video and overlay */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Background video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl" // 라운드 추가 및 포지셔닝 유지
            src={Videos.IntroVideo} // Video source
            autoPlay // Auto play
            loop // Loop playback
            muted // Mute audio
            playsInline // Inline playback
            style={{ pointerEvents: "none" }} // Prevent user interaction
          />

          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          {/* Overlay content */}
          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 md:p-8 space-y-8 text-white h-full w-full"
          >
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-7xl  font-medium mb-4 leading-snug">
              <span ref={headingRef}>Let's make a medical AI & save lives</span>{" "}
              <br />
              <span ref={subheadingRef}>Your Data Saves Lives</span>
            </h1>

            {/* Email subscription form */}
            <form
              ref={formRef}
              className="w-full max-w-md"
              onSubmit={handleSubmit}
            >
              <p className="text-lg md:text-2xl mb-4">Subscribe for updates</p>
              <div className="flex flex-col sm:flex-row items-center">
                <input
                  className="appearance-none bg-transparent border border-white rounded-2xl w-full h-12 text-white px-4 leading-tight focus:outline-none text-sm md:text-base mb-2 sm:mb-0 sm:mr-2"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  aria-required="true"
                  aria-invalid={!email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update input value
                />
                <button
                  className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-full sm:w-28 font-semibold rounded-2xl text-sm md:text-base"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Play Video button */}
            <div className="pt-8">
              <a
                ref={buttonRef} // Assign ref to button
                href="https://drive.google.com/file/d/1FQozCroeIAvCReiDOJkTK6bgh76t4nJ5/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-base md:text-xl focus:outline-none"
              >
                <FaPlayCircle className="mr-2" />
                Play Video
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections for scroll testing */}
      <div
        id="section2"
        className="relative w-full overflow-hidden md:p-8 p-4 "
        style={{ height: "calc(100vh - 4rem)" }} // 전체 화면 높이에서 4rem 마진만큼 제외
      >
        <div className=" flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 leading-snug text-center">
            Your Data Saves Lives
          </h2>
          <div className="grid grid-cols-12 h-full mt-8">
            <div className="col-span-4 flex flex-col justify-between h-full">
              {/* 텍스트 영역 */}
              <div>
                <h2 className="lg:text-4xl md:text-2xl text-sm font-semibold">
                  View Your Medical <br />
                  Information on Your <br className="hidden md:block" />
                  Phone!
                </h2>
                <br />
                <div className="flex flex-row items-center gap-1 text-blue-600">
                  <p className="text-sm md:text-xl">Learn more</p>
                  <FaCircle className="text-2xl" />
                </div>
              </div>

              {/* 이미지 영역 */}
              <div className="flex-grow flex ">
                {" "}
                <div className=" relative h-full w-full">                {/* flex-grow로 남은 영역을 차지 */}
                <img
                  id="section2-img1"
                  src={Images.FireCR}
                  alt="FireCR"
                  className="w-20 md:w-40 object-contain absolute bottom-5" // object-contain으로 이미지 비율 유지
                />
                   <img
                             id="section2-img2"
                  src={Images.FireCRSoftware}
                  alt="FireCR-software"
                  className="w-28 md:w-52 object-contain absolute bottom-5 md:left-16 left-10" // object-contain으로 이미지 비율 유지
                />
                     <img
                               id="section2-img3"
                  src={Images.QRCode}
                  alt="QRCode"
                  className="w-20 md:w-40 object-contain absolute bottom-5 md:left-56 left-32" // object-contain으로 이미지 비율 유지
                />
                  <p className=" absolute bottom-0 md:left-16 left-8 text-neutral-400 text-xs md:text-lg">CR Scanner</p>
                </div>
              
              </div>
            </div>
            <div className=" col-span-4 flex flex-col  items-center justify-center gap-4">
              <img src={Images.AIMockup} className=" w-60 object-contain" />
              <p className="md:text-2xl text-xs">Get a AI Diagnosis!</p>
            </div>
            <div className=" col-span-4"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 2</h2>
          <p className="mb-4">This is the second section to test scrolling.</p>
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 3</h2>
          <p className="mb-4">This is the third section to test scrolling.</p>
          <p>
            Donec ullamcorper, felis non sodales commodo, lectus velit ultrices
            ipsum, a tincidunt nisi elit quis sem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
