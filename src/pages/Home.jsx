import React, { useRef, useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa"; // Play icon
import { gsap } from "gsap"; // GSAP animation library
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger plugin
import Videos from "../assets/Videos"; // Video files path
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firebase Firestore functions
import { db } from "../firebaseConfig"; // Firebase configuration
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Refs for video and overlay elements
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // Refs for individual elements in Section 1
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // Refs for elements in Section 2
  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const fireCRRef = useRef(null);
  const softwareRef = useRef(null);
  const qrCodeRef = useRef(null);
  const aiMockupRef = useRef(null);
  const aiDiagnosisRef = useRef(null);

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

  const getDeviceCategory = () => {
    const width = window.innerWidth;
    if (width <= 768) return "mobile";
    if (width > 768 && width <= 1024) return "tablet";
    return "desktop";
  };

  // Initialize GSAP animations with ScrollTrigger
  useEffect(() => {
    // SECTION 1 Animations
    const overlayElement = overlayRef.current; // Reference to overlay element

    // Overlay ScrollTrigger setup
    if (overlayElement) {
      const device = getDeviceCategory();
      const headingEnd =
        device === "mobile" ? "+=500px" : device === "tablet" ? "+=800px" : "+=550px";

      gsap.timeline({
        scrollTrigger: {
          trigger: overlayElement, // Element that triggers the animation
          start: "top top", // Start point
          end: headingEnd, // Scroll distance for the animation
          scrub: true, // Sync animation with scroll
          pin: true, // Pin the trigger element
          anticipatePin: 1,
          markers: false, // Set to true for debugging
        },
      }).to(overlayElement, {
        opacity: 0,
        y: -100, // Move the overlay up
        duration: 1,
        ease: "power1.out",
      });
    }

    // SECTION 2 Animations
    if (section2Ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top top",
          end: "+=200%", // Extended scroll distance to allow full animation before leaving Section 2
          scrub: 3, // Set scrub to 3 for smooth delayed scrolling
          pin: true, // Pin the section during the animations
          pinSpacing: true, // Pin spacing enabled
          markers: false, // Set to true for debugging
        },
      });

      // Animate text area and learn more link together
      tl.fromTo(
        section2TextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        // Animate FireCR image
        .fromTo(
          fireCRRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // Animate Software image
        .fromTo(
          softwareRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // Animate QRCode image
        .fromTo(
          qrCodeRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        // Animate AI Mockup image (and add 3D rotation)
        .fromTo(
          aiMockupRef.current,
          { y: 100, opacity: 0 }, // Initial state
          { y: 0, opacity: 1, duration: 1 }, // Appear
          "+=0.3"
        )
        .to(
          aiMockupRef.current,
          { rotationY: 360, duration: 3, ease: "power2.inOut" }, // 3D rotation
          "+=0.3" // Slight delay before rotation starts
        )
        // Animate AI Diagnosis text
        .fromTo(
          aiDiagnosisRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 5, // Blinks 5 times
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.to(aiDiagnosisRef.current, { opacity: 1 }); // Ensure it stays visible at the end
            },
          },
          "+=0.3"
        )
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <div
        id="section1"
        className="relative w-full overflow-hidden md:p-8 md:pt-0 p-4 pt-0"
        style={{ height: "calc(100vh - 4rem)" }} // Fixed height matching Section 2
      >
        {/* Container for video and overlay */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Background video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            src={Videos.IntroVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ pointerEvents: "none" }}
          />

          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          {/* Overlay content */}
          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 md:p-8 space-y-8 text-white h-full w-full"
          >
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 leading-snug">
              <span ref={headingRef}>
                Let's make a medical AI & save lives
              </span>
              <br />
              <span ref={subheadingRef}>Your Data Saves Lives</span>
            </h1>

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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-full sm:w-28 font-semibold rounded-2xl text-sm md:text-base"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="pt-8">
              <a
                ref={buttonRef}
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

      {/* Section 2 */}
      <div
        id="section2"
        ref={section2Ref}
        className="relative w-full overflow-hidden md:p-8 p-4"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="flex flex-col h-full relative">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 leading-snug text-center pt-16">
            Your Data Saves Lives
          </h2>
          <div className="grid grid-cols-12 h-full mt-8 relative">
            {/* Left Column */}
            <div className="col-span-4 flex flex-col justify-between h-full relative">
              <div ref={section2TextRef} className="text-container">
                <h2 className="lg:text-4xl md:text-2xl text-sm font-semibold text-[#171717]">
                  View Your Medical <br />
                  Information on Your Phone!
                </h2>
                <div className="flex flex-row items-center gap-1 text-blue-600 mt-4">
                  <p className="text-sm md:text-xl">Learn more</p>
                  <FaCircleArrowRight className="text-2xl" />
                </div>
              </div>

              <div className="flex-grow flex">
                <div className="relative h-full w-full">
                  <img
                    ref={fireCRRef}
                    id="section2-img1"
                    src={Images.FireCR}
                    alt="FireCR"
                    className="w-20 md:w-40 object-contain absolute bottom-5 opacity-0"
                  />
                  <img
                    ref={softwareRef}
                    id="section2-img2"
                    src={Images.FireCRSoftware}
                    alt="FireCR-software"
                    className="w-28 md:w-52 object-contain absolute bottom-5 md:left-16 left-10 opacity-0"
                  />
                  <img
                    ref={qrCodeRef}
                    src={Images.QRCode}
                    alt="QRCode"
                    className="w-20 md:w-40 object-contain absolute bottom-5 md:left-56 left-32 opacity-0"
                  />
                  <p className="absolute bottom-0 md:left-16 left-8 text-neutral-400 text-xs md:text-lg">
                    CR Scanner
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative">
              <img
                ref={aiMockupRef}
                src={Images.AIMockup}
                className="w-60 object-contain opacity-0"
                alt="AI Mockup"
              />
              <p
                ref={aiDiagnosisRef}
                className="md:text-2xl text-xs opacity-0"
              >
                Get a AI Diagnosis!
              </p>
            </div>

            {/* Right Column (Empty) */}
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-20">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 3</h2>
          <p className="mb-4">This is the second section to test scrolling.</p>
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 4</h2>
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
