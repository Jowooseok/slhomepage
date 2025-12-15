// // Home.js
// import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Section1 from "./Section1";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
// import Section4 from "./Section4";
// import { handleSubmit } from "../utils/formHandler"; // 이메일 폼 제출 핸들러
// import Images from "../assets/Images";
// import Marquee from "react-fast-marquee";
// import { animateScroll, scroller } from "react-scroll";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog";
// import { HiX } from "react-icons/hi";
// import { useNavigate } from 'react-router-dom'
// // GSAP 플러그인 등록
// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const [email, setEmail] = useState("");
//   const [open, setOpen] = useState(true);

//   const navigate = useNavigate()

//   // 섹션 1 Refs
//   const videoRef = useRef(null);
//   const overlayRef = useRef(null);
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const formRef = useRef(null);
//   const buttonRef = useRef(null);

//   // 섹션 2 Refs
//   const section2Ref = useRef(null);
//   const section2TextRef = useRef(null);
//   const fireCRRef = useRef(null);
//   const softwareRef = useRef(null);
//   const qrCodeRef = useRef(null);
//   const aiMockupRef = useRef(null);
//   const aiDiagnosisRef = useRef(null);
//   const crScannerTextRef = useRef(null); // 추가된 ref
//   const scanSnapTextRef = useRef(null); // 추가된 ref

//   // 섹션 3 Refs
//   const section3Ref = useRef(null);
//   const section3TextRef = useRef(null);
//   const accumulationTextRef = useRef(null);
//   const blockChainBGRef = useRef(null);
//   const xray2021Ref = useRef(null);
//   const xray2022Ref = useRef(null);
//   const xray2023Ref = useRef(null);
//   const xray2024Ref = useRef(null); // 추가된 ref
//   const onBlockChainTextRef = useRef(null); // 추가된 ref
//   const managementMockupRef = useRef(null);
//   const transactionTextRef = useRef(null);
//   const usdTextRef = useRef(null);

//   // 섹션 4 Refs
//   const section4Ref = useRef(null);
//   const section4TextRef = useRef(null);
//   const medicalRef = useRef(null);
//   const dentalRef = useRef(null);
//   const logoRef = useRef(null);
//   const availableTextRef = useRef(null);
//   const productionTextRef = useRef(null); // 추가된 ref

//   useEffect(() => {
//     const hash = window.location.hash.substring(1);
//     if (hash) {
//       scroller.scrollTo(hash, {
//         duration: 800,
//         delay: 0,
//         smooth: "easeInOutQuart",
//       });
//     }
//   }, []);

//   // GSAP 애니메이션 설정
//   useEffect(() => {
//     const device = window.innerWidth <= 768 ? "mobile" : "desktop";

//     // 섹션 1 애니메이션
//     if (overlayRef.current) {
//       const headingEnd = device === "mobile" ? "+=500px" : "+=550px";
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: overlayRef.current,
//             start: "top top",
//             end: headingEnd,
//             scrub: 2,
//             pin: true,
//             markers: false,
//           },
//         })
//         .to(overlayRef.current, {
//           opacity: 0,
//           y: -100,
//           duration: 1,
//           ease: "power1.out",
//         });
//     }

//     // 섹션 2 애니메이션
//     if (section2Ref.current) {
//       const tl2 = gsap.timeline({
//         scrollTrigger: {
//           trigger: section2Ref.current,
//           start: "top top",
//           end: "+=500%", // 애니메이션 구간을 늘림
//           scrub: 1, // 애니메이션이 천천히 진행되도록 함
//           pin: true,
//           markers: false,
//         },
//       });

//       tl2
//         // Section2 Title 등장
//         .fromTo(
//           section2TextRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           0
//         )
//         // FireCR 이미지 등장
//         .fromTo(
//           fireCRRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // CR Scanner 텍스트 등장
//         .fromTo(
//           crScannerTextRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // FireCRSoftware 이미지 등장
//         .fromTo(
//           softwareRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // QRCode 이미지 등장
//         .fromTo(
//           qrCodeRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // "Scan the QR Code! Snap!" 텍스트 반짝임
//         .fromTo(
//           scanSnapTextRef.current,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 0.5,
//             repeat: 1,
//             yoyo: true,
//             ease: "power1.inOut",
//             onComplete: () => gsap.to(scanSnapTextRef.current, { opacity: 1 }),
//           },
//           "+=2"
//         )
//         // AI Mockup 이미지 등장
//         .fromTo(
//           aiMockupRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // AI Mockup 회전
//         .to(
//           aiMockupRef.current,
//           { rotationY: 360, duration: 3, ease: "power2.inOut" },
//           "+=2"
//         )
//         // "Get a AI Diagnosis!" 텍스트 등장
//         .fromTo(
//           aiDiagnosisRef.current,
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1 },
//           "+=2"
//         )
//         // "Get a AI Diagnosis!" 텍스트 반짝이기
//         .fromTo(
//           aiDiagnosisRef.current,
//           { opacity: 1 },
//           {
//             opacity: 0,
//             duration: 0.5,
//             repeat: 3,
//             yoyo: true,
//             ease: "power1.inOut",
//             onComplete: () => gsap.to(aiDiagnosisRef.current, { opacity: 1 }),
//           },
//           "+=2"
//         )
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 });
//     }

//     // 섹션 3 애니메이션
//     // 섹션 3 애니메이션
//     if (section3Ref.current) {
//       const tl3 = gsap.timeline({
//         scrollTrigger: {
//           trigger: section3Ref.current,
//           start: "top top",
//           end: "+=500%", // 애니메이션 구간을 늘림
//           scrub: 1, // 애니메이션이 천천히 진행되도록 함
//           pin: true,
//           markers: false,
//         },
//       });

//       tl3
//         // 1. "Managed medical data generates added value. Learn more" 텍스트
//         .fromTo(
//           section3TextRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           0
//         )
//         // 2. "Accumulation, Storage, and Management..." 텍스트
//         .fromTo(
//           accumulationTextRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 3. BlockChainBG 이미지
//         .fromTo(
//           blockChainBGRef.current,
//           { opacity: 0 },
//           { opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 4. X-ray 이미지 1 등장
//         .fromTo(
//           xray2021Ref.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 5. X-ray 이미지 2 등장
//         .fromTo(
//           xray2022Ref.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 6. X-ray 이미지 3 등장
//         .fromTo(
//           xray2023Ref.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 7. X-ray 이미지 4 등장
//         .fromTo(
//           xray2024Ref.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 8. "On BlockChain" 텍스트 등장
//         .fromTo(
//           onBlockChainTextRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 9. 목업 이미지 등장
//         .fromTo(
//           managementMockupRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // 10. 텍스트 등장
//         .fromTo(
//           transactionTextRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // "30 ~100 USD" 텍스트 반짝이기
//         .fromTo(
//           usdTextRef.current,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 0.5,
//             repeat: 3,
//             yoyo: true,
//             ease: "power1.inOut",
//             onComplete: () => gsap.to(usdTextRef.current, { opacity: 1 }),
//           },
//           "+=2"
//         )
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 });
//     }

//     // 섹션 4 애니메이션
//     if (section4Ref.current) {
//       const tl4 = gsap.timeline({
//         scrollTrigger: {
//           trigger: section4Ref.current,
//           start: "top top",
//           end: "+=500%", // 애니메이션 구간을 늘림
//           scrub: 1, // 애니메이션이 천천히 진행되도록 함
//           pin: true,
//           markers: false,
//         },
//       });

//       tl4
//         // Section4 텍스트 등장
//         .fromTo(
//           section4TextRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           0
//         )
//         // Medical 이미지 등장
//         .fromTo(
//           medicalRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // Dental 이미지 등장
//         .fromTo(
//           dentalRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // Production Text 등장
//         .fromTo(
//           productionTextRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // Logo 등장
//         .fromTo(
//           logoRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1 },
//           "+=2"
//         )
//         // "Only 'Digiray' is available" 텍스트 반짝이기
//         .fromTo(
//           availableTextRef.current,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 0.5,
//             repeat: 3,
//             yoyo: true,
//             ease: "power1.inOut",
//             onComplete: () => gsap.to(availableTextRef.current, { opacity: 1 }),
//           },
//           "+=2"
//         )
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 })
//         .to({}, { duration: 3 });
//     }

//     // 컴포넌트 언마운트 시 ScrollTrigger 제거
//     return () => {
//       ScrollTrigger.getAll().forEach((instance) => instance.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-[#FFF9F7]">
//       <Dialog
//         open={open}
//         onOpenChange={() => setOpen(false)}
//         className="rounded-2xl"
//       >
//         <DialogContent className=" min-w-[50%] w-[90%] max-h-[90%]  overflow-y-auto lg:overflow-y-auto rounded-2xl p-0 ">
//           <div className="flex flex-col w-full">
//             <div className="p-6">
//             <HiX
//               className="lg:h-[30px] lg:w-[30px] w-5 h-5 ml-auto cursor-pointer"
//               onClick={() => setOpen(false)}
//             />
//             <h1 className="text-center text-xl lg:text-2xl  2xl:text-4xl font-bold">
//               Interpreted Chest   Medical Images
//             </h1>
//             <p className="mt-4 text-center text-sm lg:text-base 2xl:text-xl">
//               We have collected a curated set of{" "}
//               <span className="font-bold text-lg lg:text-2xl 2xl:text-3xl">over 10,000</span>{" "}
//               interpreted medical images. <br className="block lg:hidden 2xl:block" />
//               If you’re interested in purchasing them, please contact us via the
//               Telegram QR code below.
//             </p>
//             <div className="flex  justify-center mt-6  2xl:mt-12">
//               <img
//                 src={Images.SampleImageSets}
//                 alt="sampleImageSets"
//                 className="w-[80%] 2xl:w-[60%]  object-contain "
//               />
//             </div>
//             </div>
//             <div className="2xl:flex-1 h-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center bg-[#0147E5] p-12">
//               <img src={Images.TelegramQR} alt="telegramQR" className="h-1/3  md:h-[156px] hidden md:block" />
//          <button onClick={()=>{navigate('/MedicalImages')}} className="rounded-2xl text-white border-2 text-sm md:text-lg  border-white w-[164px] h-[64px]">Visit this page</button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//       <Section1
//         videoRef={videoRef}
//         overlayRef={overlayRef}
//         headingRef={headingRef}
//         subheadingRef={subheadingRef}
//         formRef={formRef}
//         buttonRef={buttonRef}
//         handleSubmit={handleSubmit}
//       />
//       <Section2
//         section2Ref={section2Ref}
//         section2TextRef={section2TextRef}
//         fireCRRef={fireCRRef}
//         softwareRef={softwareRef}
//         qrCodeRef={qrCodeRef}
//         aiMockupRef={aiMockupRef}
//         aiDiagnosisRef={aiDiagnosisRef}
//         crScannerTextRef={crScannerTextRef}
//         scanSnapTextRef={scanSnapTextRef}
//       />
//       <Section3
//         section3Ref={section3Ref}
//         section3TextRef={section3TextRef}
//         accumulationTextRef={accumulationTextRef}
//         blockChainBGRef={blockChainBGRef}
//         xray2021Ref={xray2021Ref}
//         xray2022Ref={xray2022Ref}
//         xray2023Ref={xray2023Ref}
//         xray2024Ref={xray2024Ref}
//         onBlockChainTextRef={onBlockChainTextRef}
//         managementMockupRef={managementMockupRef}
//         transactionTextRef={transactionTextRef}
//         usdTextRef={usdTextRef}
//       />

//       <Section4
//         section4Ref={section4Ref}
//         section4TextRef={section4TextRef}
//         medicalRef={medicalRef}
//         dentalRef={dentalRef}
//         logoRef={logoRef}
//         availableTextRef={availableTextRef}
//         productionTextRef={productionTextRef}
//       />
//       <section
//         id="AboutSavetheLife"
//         className="flex flex-col md:p-8 p-4 lg:mt-24 font-semibold items-center justify-center"
//         style={{ height: "calc(100vh - 4rem)" }}
//       >
//         <h1 className="text-xl lg:text-4xl md:text-3xl md:text-start text-center lg:text-center font-bold ">
//           Digiray's [Save the Life] Project
//         </h1>
//         <div className="md:mt-8 mt-4 lg:p-24 lg:pt-0 flex justify-center">
//           <img
//             src={Images.slboxImage}
//             alt="SLprotocol"
//             className=" hidden sm:block lg:w-[80%] 2xl:w-[70%] self-center "
//           />
//           <img
//             src={Images.mobileAboutSL}
//             alt="SLprotocol"
//             className=" block sm:hidden "
//           />
//         </div>
//       </section>

//       <section
//         className="flex flex-col md:p-8 p-4 mt-24 font-semibold items-center justify-center"
//         style={{ height: "calc(100vh - 4rem)" }}
//       >
//         <h1 className="text-2xl lg:text-4xl md:text-3xl lg:pl-24 mt-36 md:mt-4  md:text-start text-center font-bold w-full ">
//           DApp Launch Plan
//         </h1>
//         <div className="grid grid-cols-2 lg:px-24 gap-4 mt-12">
//           <div className="col-span-2 lg:col-span-1">
//             <div>
//               <p className="text-lg font-bold">For Humans</p>
//               <p className="text-xs md:text-base">
//                 Healthcare Medical Data Collection Solution DApp
//               </p>
//               <img
//                 src={Images.SuccessFactor1}
//                 alt="sl-pationt-app"
//                 className=" mt-5"
//               />
//               <div className="flex flex-row items-center gap-2 lg:gap-4 w-full justify-center mt-8">
//                 <p className="flex items-center justify-center text-xs md:text-sm lg:text-base h-14 lg:h-16">
//                   Launch planned for{" "}
//                   <span className=" font-bold"> &nbsp;Q2 2025</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
//             <div>
//               <p className="text-lg font-bold">For Pets</p>
//               <p className="text-xs md:text-base">
//                 Healthcare Medical Data Collection Solution DApp
//               </p>
//               <img
//                 src={Images.SuccessFactor2}
//                 alt="sl-animals-app"
//                 className="mt-5"
//               />
//               <div className="flex flex-row items-center gap-2 lg:gap-4 w-full justify-center mt-8">
//                 <p className="flex items-center justify-center text-xs md:text-sm lg:text-base h-14 lg:h-16 ">
//                   Launch planned for{" "}
//                   <span className=" font-bold"> &nbsp;Q1 2025</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>
//       <br className="block md:hidden"/>

//       <section className="full-width-marquee bg-white mr-4  my-16 ">
//         <Marquee>
//           <img
//             src={Images.motionVendorListImage}
//             alt="motionVendorListImage"
//             className=" lg:h-28 md:h-20 h-16 mr-12 "
//           />
//         </Marquee>
//       </section>

//       <section className="xl:py-16 lg:my-32 py-16 full-width-marquee xl:space-y-12 space-y-4 bg-[#3A5FCD]">
//         <Marquee>
//           <img
//             src={Images.motionImage}
//             alt="motionImage"
//             className=" lg:h-48  h-40 mr-6"
//           />
//         </Marquee>
//         <Marquee direction={"right"}>
//           <img
//             src={Images.motionImage2}
//             alt="motionImage2"
//             className=" lg:h-40  h-28 mr-4 "
//           />
//         </Marquee>
//       </section>
//       {/**contact us */}
//       <section
//         className="hidden lg:flex flex-col  xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 w-2/3 mx-auto "
//         style={{
//           background: `no-repeat center url(${Images.contactUsBackgroundImage})`,
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="xl:text-3xl text-lg text-white">
//           <p>
//             Sign up for email updates{" "}
//             <span className="opacity-70">
//               to keep up <br className={"hidden xl:block"} />
//               to date with the SL Protocol
//             </span>
//           </p>
//         </div>

//         <form
//           onSubmit={(e) => handleSubmit(e, email, setEmail)}
//           className="flex flex-col gap-4"
//         >
//           <input
//             placeholder="Email"
//             type="email"
//             className="xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white border-white-800 px-4 bg-inherit focus:outline-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
//           >
//             GET UPDATES
//           </button>
//         </form>
//       </section>

//       <section className="lg:hidden flex flex-col xl:mx-20 mx-4 xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 bg-[#3A5FCD]">
//         <div className="xl:text-3xl text-lg text-white">
//           <p>
//             Sign up for email updates{" "}
//             <span className="opacity-70">
//               to keep up <br className={"hidden xl:block"} />
//               to date with the SL Protocol
//             </span>
//           </p>
//         </div>

//         <form
//           onSubmit={(e) => handleSubmit(e, email, setEmail)}
//           className="flex flex-col gap-4"
//         >
//           <input
//             placeholder="Email"
//             type="email"
//             className="xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white border-white-800 px-4 bg-inherit focus:outline-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
//           >
//             GET UPDATES
//           </button>
//         </form>
//       </section>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// Home.jsx - Renewed Version (Light Theme)
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegram, FaLinkedin, FaGithub, FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";
import Videos from "../assets/Videos";

gsap.registerPlugin(ScrollTrigger);

// ============ VIDEO MODAL COMPONENT ============
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative pt-[56.25%]">
          <video
            className="absolute inset-0 w-full h-full object-contain bg-black"
            src={Videos.IntroVideo}
            controls
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

// ============ HERO SECTION ============
const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-8">
              <span className="text-blue-600 text-sm font-medium">🏥 Medical AI Data Marketplace</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Save The Life
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Unlocking Medical Data for Everyone
            </p>

            <p className="text-lg text-gray-500 max-w-xl mb-10">
              Building a secure, blockchain-based medical data marketplace for AI healthcare research.
              Let's make medical AI and save lives.
            </p>

            {/* CTA Button - Watch Video Only */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/30"
              >
                <FaPlay className="text-sm" />
                Watch Video
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "1M+", label: "Medical Images" },
                { value: "4K", label: "Daily Active Users" },
                { value: "100K+", label: "Connected Wallets" },
                { value: "40+", label: "Partners" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Style Graphic */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-cyan-300/30"
                  style={{
                    width: `${200 + i * 80}px`,
                    height: `${200 + i * 80}px`,
                    animation: `spin ${20 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  }}
                />
              ))}
            </div>

            {/* Dotted Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${250 + i * 100}px`,
                    height: `${250 + i * 100}px`,
                    border: '1px dashed rgba(6, 182, 212, 0.2)',
                    animation: `spin ${30 + i * 10}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
                  }}
                />
              ))}
            </div>

            {/* Main 3D Object */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse" />
              
              {/* 3D Blob Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative w-48 h-48 md:w-60 md:h-60"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  {/* Glass Morphism Blob */}
                  <div 
                    className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-emerald-400/80 shadow-2xl"
                    style={{
                      animation: 'morph 8s ease-in-out infinite',
                      backdropFilter: 'blur(10px)',
                    }}
                  />
                  
                  {/* Inner Glow */}
                  <div 
                    className="absolute inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-tl from-white/40 via-cyan-200/30 to-transparent"
                    style={{
                      animation: 'morph 8s ease-in-out infinite reverse',
                    }}
                  />
                  
                  {/* Center Light */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-white/90 via-cyan-100/80 to-blue-200/60 shadow-inner flex items-center justify-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-cyan-400/50 blur-sm animate-ping" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>

                  {/* Reflection Lines */}
                  <div 
                    className="absolute top-4 left-8 w-16 h-2 bg-white/40 rounded-full blur-sm"
                    style={{ transform: 'rotate(-30deg)' }}
                  />
                  <div 
                    className="absolute top-8 left-12 w-8 h-1 bg-white/30 rounded-full blur-sm"
                    style={{ transform: 'rotate(-30deg)' }}
                  />
                </div>
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.6 + Math.random() * 0.4,
                  }}
                />
              ))}

              {/* Orbiting Elements */}
              <div 
                className="absolute w-full h-full"
                style={{ animation: 'spin 15s linear infinite' }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              </div>
              <div 
                className="absolute w-full h-full"
                style={{ animation: 'spin 20s linear infinite reverse' }}
              >
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              </div>
              <div 
                className="absolute w-full h-full"
                style={{ animation: 'spin 12s linear infinite' }}
              >
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </div>
            </div>

            {/* Floating Labels */}
            <div 
              className="absolute top-8 right-4 bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-cyan-100"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <p className="text-xs text-gray-500">Secure Exchange</p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Blockchain Verified</p>
            </div>
            
            <div 
              className="absolute bottom-12 left-4 bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-emerald-100"
              style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
            >
              <p className="text-xs text-gray-500">AI-Powered</p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Medical Analysis</p>
            </div>

            <div 
              className="absolute top-1/2 right-0 bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-blue-100"
              style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.5s' }}
            >
              <p className="text-xs text-gray-500">Data Rewards</p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Token Incentives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 60% 30% 40% 70%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

// ============ ABOUT SECTION ============
const AboutSection = () => {
  const features = [
    { title: "Smart Consent", desc: "Patient-controlled data sharing with blockchain verification", num: "01" },
    { title: "Privacy & Utility", desc: "Anonymization, differential privacy, homomorphic encryption", num: "02" },
    { title: "Token Rewards", desc: "Incentive system based on data contribution", num: "03" },
    { title: "Hybrid Storage", desc: "Off-chain sensitive data, on-chain metadata", num: "04" },
    { title: "HIPAA/GDPR Compliant", desc: "Full regulatory compliance via HSM/TEE & audit logs", num: "05" },
    { title: "Standard Connectivity", desc: "HL7/FHIR & DICOM gateway integration", num: "06" },
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">About SL Protocol</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Save The Life (SL Protocol) is building a medical data marketplace for AI healthcare research,
            backed by the Pan-Ministry Integrated Healthcare Association with 40+ members including hospitals and AI companies.
          </p>
        </div>

        {/* Image & Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img 
              src={Images.slboxImage} 
              alt="SL Protocol Architecture" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="text-blue-500 text-sm font-bold mb-2">{feature.num}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MEDICAL AI SOLUTION SECTION ============
const MedicalAISolutionSection = () => {
  return (
    <section id="medical-ai" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Instant Access to Your Health Data <br className="hidden lg:block" />
              Right on Your Phone!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our mobile app allows patients to easily access, manage, and share their medical imaging data securely.
              Get AI-powered diagnostics and second opinions instantly.
            </p>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="flex justify-center items-end gap-4">
              <div className="flex flex-col items-center">
                <img 
                  src={Images.FireCR} 
                  alt="FireCR Scanner" 
                  className="w-24 md:w-32 object-contain"
                />
                <p className="text-gray-500 text-sm mt-2">CR Scanner</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={Images.FireCRSoftware} 
                  alt="FireCR Software" 
                  className="w-32 md:w-44 object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={Images.AIMockup} 
                  alt="AI Mockup" 
                  className="w-48 md:w-60 object-contain"
                />
                <p className="text-gray-700 text-lg font-medium mt-4">Get AI Diagnosis!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MEDICAL DATA VALUE SECTION ============
const MedicalDataValueSection = () => {
  return (
    <section id="data-value" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] flex items-end justify-center">
              {/* Blockchain Background */}
              <img 
                src={Images.BlockChainBG} 
                alt="Blockchain Background" 
                className="absolute bottom-0 w-full max-w-md object-contain opacity-80"
              />
              {/* X-ray Images Stack */}
              <div className="relative flex items-end justify-center gap-2 z-10">
                <img src={Images.Xray2021} alt="X-ray 2021" className="w-16 md:w-20 object-contain" />
                <img src={Images.Xray2022} alt="X-ray 2022" className="w-20 md:w-24 object-contain" />
                <img src={Images.Xray2023} alt="X-ray 2023" className="w-24 md:w-28 object-contain" />
                <img src={Images.Xray2024} alt="X-ray 2024" className="w-28 md:w-36 object-contain" />
              </div>
            </div>
            <p className="text-center text-gray-700 font-semibold mt-4">On BlockChain</p>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leveraging Indexed Medical Data to Maximize Healthcare Value
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Accumulation, storage, and management of personal medical data with AI diagnosis capabilities.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src={Images.ManagementMockup} 
                  alt="Management Mockup" 
                  className="w-32 object-contain"
                />
                <div>
                  <p className="text-gray-700 text-lg">
                    Valuable X-ray data samples are sold for prices ranging from
                  </p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">30 ~ 100 USD each</p>
                </div>
              </div>
            </div>
            <Link 
              to="/MedicalDataValue"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
            >
              Learn more
              <FaCircleArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ COMPANY INTRODUCTION SECTION ============
const CompanySection = () => {
  return (
    <section id="company" className="py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Digiray's 50,000 Remotely Updated CR Scanners Operating World-wide
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A wide range of X-ray products for medical, dental, and veterinary use.
              Only 'Digiray' provides this comprehensive solution.
            </p>
            <Link 
              to="/CompanyIntroduction"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
            >
              Learn more
              <FaCircleArrowRight className="text-2xl" />
            </Link>
          </div>

          {/* Right Content - Equipment Images */}
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-700 mb-4">Medical</p>
              <img 
                src={Images.MedicalEquipment} 
                alt="Medical Equipment" 
                className="w-40 md:w-52 object-contain"
              />
              <p className="text-indigo-600 text-sm mt-2">[FireCR Flash Medical Reader]</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-700 mb-4">Dental</p>
              <img 
                src={Images.DentalEquipment} 
                alt="Dental Equipment" 
                className="w-40 md:w-52 object-contain"
              />
              <p className="text-indigo-600 text-sm mt-2">[FireCR Dental Reader]</p>
            </div>
          </div>
        </div>

        {/* Digiray Logo */}
        <div className="mt-16 text-center">
          <img 
            src={Images.DigirayLogo} 
            alt="Digiray Logo" 
            className="w-48 mx-auto"
          />
          <p className="text-xl text-gray-700 mt-4">Only '<span className="font-bold">Digiray</span>' is available</p>
        </div>
      </div>
    </section>
  );
};

// ============ DAPP LAUNCH SECTION ============
const DAppLaunchSection = () => {
  return (
    <section id="dapp" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          DApp Launch Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Humans */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Humans</h3>
            <p className="text-gray-600 mb-6">Healthcare Medical Data Collection Solution DApp</p>
            <img 
              src={Images.SuccessFactor1} 
              alt="SL Patient App" 
              className="w-full rounded-xl shadow-lg mb-6"
            />
            <div className="text-center">
              <p className="text-gray-700">
                Launch planned for <span className="font-bold text-blue-600">Q2 2025</span>
              </p>
            </div>
          </div>

          {/* For Pets */}
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Pets</h3>
            <p className="text-gray-600 mb-6">Healthcare Medical Data Collection Solution DApp</p>
            <img 
              src={Images.SuccessFactor2} 
              alt="SL Animals App" 
              className="w-full rounded-xl shadow-lg mb-6"
            />
            <div className="text-center">
              <p className="text-gray-700">
                Launch planned for <span className="font-bold text-cyan-600">Q1 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ PARTNERS SECTION ============
const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          Our Partners
        </h2>
      </div>
      <Marquee gradient={false} speed={50} className="py-4">
        <img 
          src={Images.motionVendorListImage} 
          alt="Partners" 
          className="h-20 md:h-28 mr-12"
        />
      </Marquee>
    </section>
  );
};

// ============ MEDICAL IMAGES SHOWCASE ============
const MedicalImagesSection = () => {
  return (
    <section className="py-16 bg-[#3A5FCD]">
      <Marquee gradient={false} speed={40} className="mb-8">
        <img 
          src={Images.motionImage} 
          alt="Medical Images 1" 
          className="h-40 lg:h-48 mr-6 rounded-lg"
        />
      </Marquee>
      <Marquee gradient={false} speed={35} direction="right">
        <img 
          src={Images.motionImage2} 
          alt="Medical Images 2" 
          className="h-28 lg:h-40 mr-4 rounded-lg"
        />
      </Marquee>
    </section>
  );
};

// ============ ROADMAP SECTION ============
const RoadmapSection = () => {
  const milestones = [
    {
      year: "2025",
      title: "Platform Launch",
      items: ["DApp Launch (Pets Q1, Humans Q2)", "Cloud PACS Integration", "Initial Hospital Partnerships"],
    },
    {
      year: "2026",
      title: "Ecosystem Expansion",
      items: ["AI Marketplace Launch", "International Expansion", "100+ Hospital Network"],
    },
    {
      year: "2027",
      title: "Scale & Growth",
      items: ["1M+ Active Users", "Cross-chain Integration", "Research Partnerships"],
    },
    {
      year: "2028",
      title: "Global Leadership",
      items: ["Global Healthcare Standard", "Decentralized Governance", "Full Ecosystem Maturity"],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Roadmap</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{milestone.title}</h3>
              <ul className="space-y-2">
                {milestone.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-blue-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CTA SECTION ============
const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-[#3A5FCD]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sign up for email updates
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Keep up to date with the SL Protocol
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            GET UPDATES
          </button>
        </form>
      </div>
    </section>
  );
};

// ============ MAIN HOME COMPONENT ============
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F7]">
      <HeroSection />
      <AboutSection />
      <MedicalAISolutionSection />
      <MedicalDataValueSection />
      <CompanySection />
      <DAppLaunchSection />
      <PartnersSection />
      <MedicalImagesSection />
      <RoadmapSection />
      <CTASection />
    </div>
  );
}