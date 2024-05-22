import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import icpLogo from "../assets/icplogo.png";
import CRXVedio from "../assets/CXRVedio.mp4";
import dentalVedio from "../assets/dentalVedio.mp4";
import transverseLogo from "../assets/logo2.png";
import { MdArrowForwardIos } from "react-icons/md";
import certificateImage from "../assets/certificate.png";
import patientImage from "../assets/patient.png";
import supplyImage from "../assets/supply.png";
import vendorImage from "../assets/vendor.png";
import motionVendorListImage from "../assets/motionvendorListImage.png";
import slboxImage from "../assets/slbox.png";
import motionImage from "../assets/motionImage1.png";
import motionImage2 from "../assets/motionImage2.png";
import aiCertificationPC from "../assets/aiCertificationPC.png";
import protocolImage from "../assets/protocolImage.png";
import tokenEconomyImage from "../assets/tokenEconomyImage.png";
import contactUsBackgroundImage from "../assets/contactUsBackgroundImage.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import mobileAboutSL from "../assets/mobileAboutSL.png";
import SLAppUserCaseImage from "../assets/SLAppUserCaseImage.png";
import buyWithSLTokens from "../assets/buyWithSLTokens.png";
import dataBuyer from "../assets/dataBuyer.png";
import dataBuyerCase3 from "../assets/dataBuyerCase3.png";
import arrowIcon from "../assets/arrowIcon.png";
import sltokenIcon from "../assets/sltokenIcon.png";

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        createdAt: serverTimestamp(),
      });
      setEmail("");
      alert(
        "Thank you for signing up! You'll start receiving updates from the SL Protocol soon."
      );
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  // 애니메이션 제어용
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 애니메이션 제어용
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 두 번째 요소의 애니메이션 제어와 참조
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });

  // 세 번째 요소의 애니메이션 제어와 참조
  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  // sp 번째 요소의 애니메이션 제어와 참조
  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });

  // sp 번째 요소의 애니메이션 제어와 참조
  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.5 });

  // sp 번째 요소의 애니메이션 제어와 참조
  const controls6 = useAnimation();
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.5 });

  // sp 번째 요소의 애니메이션 제어와 참조
  const controls7 = useAnimation();
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.5 });

  // sp 번째 요소의 애니메이션 제어와 참조
  const controls8 = useAnimation();
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.5 });

    // sp 번째 요소의 애니메이션 제어와 참조
    const controls9 = useAnimation();
    const [ref9, inView9] = useInView({ triggerOnce: true, threshold: 0.5 });

      // sp 번째 요소의 애니메이션 제어와 참조
  const controls10 = useAnimation();
  const [ref10, inView10] = useInView({ triggerOnce: true, threshold: 0.5 });

        // sp 번째 요소의 애니메이션 제어와 참조
        const controls11 = useAnimation();
        const [ref11, inView11] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
    if (inView4) controls4.start("visible");
    if (inView5) controls5.start("visible");
    if (inView6) controls6.start("visible");
    if (inView7) controls7.start("visible");
    if (inView8) controls8.start("visible");
    if (inView9) controls9.start("visible");
    if (inView10) controls10.start("visible");
    if (inView11) controls11.start("visible");
  }, [
    controls,
    inView,
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    inView4,
    controls4,
    controls5,
    controls6,
    inView5,
    inView6,
    controls7,
    inView7,
    controls8,
    inView8,
    controls9,
    inView9,
    controls10,
    inView10,
    controls11,
    inView11,
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

  const hoverEffects = {
    scale: 1.05, // 5% 확대
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)", // 밝은 그림자 효과
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  return (
    <div className="" id="home">
      <section className="lg:pt-10 lg:pb-16 py-8 flex flex-col lg:flex-row lg:gap-14  justify-center lg:items-center mx-2 ">
        <div className=" flex flex-col flex-grow-0 gap-6 lg:gap-12 2xl:gap-16 ">
          <div>
            <p className=" text-lg  sm:text-3xl 2xl:text-4xl">Onchain Project</p>
            <p className=" text-2xl sm:text-4xl 2xl:text-6xl font-bold">
              Experience Medical AI!
            </p>
          </div>
          <div className="sm:text-xl 2xl:text-2xl">
            <p>
              AI Diagnostic is live, Send your X-ray <br />
              Your Data saves your Lives.
            </p>
          </div>
          <div className=" sm:text-xl 2xl:text-2xl">
            <p>
              Let’s create sophisticated medical AI that
              <br />
              anyone can use and Save Lives.
            </p>
          </div>
          <div className="flex flex-row gap-8 items-center text-sm sm:text-2xl">
            <p>Powerd By</p>
            <img src={icpLogo} className=" h-6 sm:h-12" alt="icpLogo" />
          </div>
        </div>
        <div className="flex flex-col lg:gap-4 ">
          <video
            controls
            autoPlay
            loop
            playsInline
            muted
            className=" rounded-xl lg:h-96 my-6"
          >
            <source src={CRXVedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className=" flex flex-col rounded-xl  gap-2 px-4 lg:lg:py-24 py-4"
            style={{ border: "2px solid white" }}
          >
            <p className=" text-lg sm:text-2xl">AI Airdrop Event Will Start!</p>
            <p className=" text-sm sm:text-xl">
              Please send us your chest x-ray images. We provide a second
              opinion.
            </p>
            <div className="flex flex-row w-4/5 items-center gap-4 mt-4 ">
              <button
                className=" flex-1 lg:h-14 rounded lg:rounded-xl h-10 lg:text-xl"
                style={{ backgroundColor: "#0147E5" }}
                onClick={() => {
                  alert("Airdrops will start soon, please check the schedule.");
                }}
              >
                <div className="flex flex-row items-center justify-between px-4">
                  <p>Participate in airdrop</p>
                  <MdArrowForwardIos />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/**about sl */}
      <section
        className="py-16 lg:py-24 gap-8 flex flex-col justify-center mx-2 lg:mx-20"
        id="AboutSL"
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-center">About SL</h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <div
            className="sm:flex sm:flex-col sm:gap-4  lg:gap-8 lg:relative sm:p-8 lg:p-24 py-12 rounded-3xl hidden "
            style={{
              backgroundImage: `url(${slboxImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="font-bold text-xl lg:text-3xl">
              <p>
                <span className="block sm:block lg:inline">
                  Your Data Saves Lives,
                </span>
              </p>
              <p>
                <span className="block sm:block lg:inline">
                  Let’s Make A Medical AI & Save Lives.
                </span>
              </p>
            </div>
            <div className="text-sm lg:text-lg sm:text-base">
              <p>
                SL project is dedicated to saving lives and improving quality of
                life by
                <br className={"hidden sm:block"} />
                offering free AI-based diagnoses and monitoring health with data
                <br className={"hidden sm:block"} />
                processed via smart contracts and blockchain, ensuring
                transparency
                <br className={"hidden sm:block"} />
                and security.
              </p>
            </div>
          </div>
          <div>
            <img
              src={mobileAboutSL}
              alt="mobileAboutSL"
              className="lg:hidden md:hidden sm:hidden "
            />
          </div>
        </motion.div>
      </section>

      {/**save the life */}
      <section className="py-16 lg:py-24 gap-8 flex flex-col items-center justify-center mx-2 lg:mx-20">
        <img
          src={transverseLogo}
          alt="transverseSLlogo"
          className=" lg:w-96 w-60"
        />
        <div className="grid xl:grid-cols-2 gap-4 w-full cursor-pointer">
          <a href="/BusinessCertification">
            <motion.div
              ref={ref1}
              className="rounded-3xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
              style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
              whileHover={hoverEffects}
              initial="hidden"
              animate={controls1}
              variants={variants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={certificateImage}
                alt="certificateImage"
                className=" lg:w-16 w-20"
              />
              <div className=" space-y-4 text-center lg:text-start">
                <p className=" text-xl lg:text-3xl">
                  38+{" "}
                  <span className=" text-neutral-400 pl-2 lg:pl-0">
                    Certificate
                  </span>
                </p>
                <p className=" text-sm lg:text-base">
                  Domestic Certification 17 (For Animal, For Human), Overseas
                  Certification 21(USA FCC, FDA, Europe, Japan, China,
                  Austrailla etc.) <br />
                </p>
              </div>
              <MdArrowForwardIos className=" w-16 h-16 hidden lg:block " />
              <MdArrowForwardIos className=" w-6 h-6  rotate-90 lg:hidden " />
            </motion.div>
          </a>

          <a href="/Patent">
            <motion.div
              ref={ref2}
              className="rounded-3xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
              style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
              whileHover={hoverEffects}
              initial="hidden"
              animate={controls2}
              variants={variants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={patientImage}
                alt="patientImage"
                className="lg:w-16 w-20"
              />
              <div className="space-y-4 text-center lg:text-start">
                <p className="text-xl lg:text-3xl">
                  20+{" "}
                  <span className="text-neutral-400 pl-2 lg:pl-0">Patent</span>
                </p>
                <p className=" text-sm lg:text-base">
                  Domestic Patent 21(Patent, Trademark Registaration), Overseas
                  Patent 8(Patent, Trademark Registaration, Trademark Rights,
                  PCT)
                </p>
              </div>
              <MdArrowForwardIos className="w-16 h-16 hidden lg:block" />
              <MdArrowForwardIos className=" w-6 h-6  rotate-90 lg:hidden " />
            </motion.div>
          </a>

          <a href="/DeviceSupply">
            <motion.div
              ref={ref3}
              className="rounded-3xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
              style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
              whileHover={hoverEffects}
              initial="hidden"
              animate={controls3}
              variants={variants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={supplyImage}
                alt="supplyImage"
                className="lg:w-16 w-20"
              />
              <div className="space-y-4 text-center lg:text-start">
                <p className="text-xl lg:text-3xl">
                  50,000+{" "}
                  <span className="text-neutral-400 pl-2 lg:pl-0">
                    Device supply
                  </span>
                </p>
                <p className=" text-sm lg:text-base">
                  X-ray distribution in over 100 countries around the world,
                  (FireCR Dental Reader, FireCR Flash Medical Reader)
                </p>
              </div>
              <MdArrowForwardIos className="w-16 h-16 hidden lg:block" />
              <MdArrowForwardIos className=" w-6 h-6  rotate-90 lg:hidden " />
            </motion.div>
          </a>

          <a href="/VendorCompany">
            <motion.div
              ref={ref4}
              className="rounded-3xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
              style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
              whileHover={hoverEffects}
              initial="hidden"
              animate={controls4}
              variants={variants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={vendorImage}
                alt="vendorImage"
                className="lg:w-16 w-20"
              />
              <div className="space-y-4 text-center lg:text-start">
                <p className="text-xl lg:text-3xl">
                  30+{" "}
                  <span className="text-neutral-400 pl-2 lg:pl-0">
                    Vendor company
                  </span>
                </p>
                <p className=" text-sm lg:text-base">
                  As a vendor responsible for distribution{" "}
                  <br className="hidden 2xl:block" /> worldwide, we maintain
                  partnerships with global companies.
                </p>
              </div>
              <MdArrowForwardIos className="w-16 h-16 hidden lg:block" />
              <MdArrowForwardIos className=" w-6 h-6  rotate-90 lg:hidden " />
            </motion.div>
          </a>
        </div>
      </section>

      <section className="full-width-marquee bg-white mr-4 xl:mt-10 xl:mb-20 ">
        <Marquee>
          <img
            src={motionVendorListImage}
            alt="motionVendorListImage"
            className=" xl:h-16 h-12"
          />
        </Marquee>
      </section>

      {/**dental ai */}
      <section className="py-16 flex flex-col gap-14 justify-center items-center  ">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:text-xl sm:text-lg text-sm flex flex-col justify-center gap-8 xl:pl-4">
            <h1 className="lg:text-5xl text-3xl"> Medical AI Solution</h1>
            <div>
              <p>
                On-Chain collects, interprets, and supplies medical imaging
                <br className={"hidden lg:block"} />
                data to advance medical imaging diagnostic technology and
                <br className={"hidden lg:block"} />
                provides Medical AI second opinions at a cost close to free.
              </p>
            </div>
            <div>
              <p>
                We have achieved a high diagnostic accuracy with impressive
                <br className={"hidden lg:block"} />
                AUROC (0.985) and JAFROC FOM (0.943) scores.{" "}
                <br className={"hidden lg:block"} />
                Furthermore, our AI solution has obtained both CE{" "}
                <br className={"hidden lg:block"} />
                certification and FDA approval.
              </p>
            </div>
          </div>
          <div>
            <video
              controls
              autoPlay
              loop
              playsInline
              muted
              className=" rounded-xl lg:h-96 "
            >
              <source src={dentalVedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <img src={aiCertificationPC} alt="aiCertificationPCImage" />
      </section>

      {/**protocol */}
      <section
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center items-center   lg:mx-16 "
        id="Protocol"
      >
        <h1 className=" lg:text-5xl text-3xl font-bold text-center">
          Protocol
        </h1>
        <motion.div
          ref={ref5} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls5} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
          className="flex justify-center items-center w-full" // Tailwind CSS 클래스 사용
        >
          <img src={protocolImage} alt="protocolImage" className=" lg:w-4/5" />
        </motion.div>
      </section>

      {/**token Economy */}
      <section
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center  lg:mx-16  items-center"
        id="TokenEconomy"
      >
        <h1 className=" lg:text-5xl font-bold text-3xl text-center">
          Token Economy
        </h1>
        <motion.div
          ref={ref6} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls6} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
          className="flex justify-center items-center w-full" // Tailwind CSS 클래스 사용
        >
          <img
            src={tokenEconomyImage}
            alt="tokenEconomyImage"
            className=" lg:w-4/5"
          />
        </motion.div>
      </section>

      {/** SL App User Case */}
      <section
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center lg:mx-16  items-center"
        id="SLAppUserCase"
      >
        <h1 className=" lg:text-5xl font-bold text-3xl text-center">
          SL APP User Case
        </h1>
        <motion.div
          ref={ref7} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls7} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
          className="flex flex-col lg:gap-8 gap-6  w-full" // Tailwind CSS 클래스 사용
        >
          <div className=" lg:space-y-8 space-y-4  lg:mx-36">
            <h2 className=" lg:text-3xl sm:text-2xl font-semibold">
              Still using a CD-ROM for medical data?
              <br />
              Use the SL App!{" "}
            </h2>
            <p className=" lg:text-lg text-sm sm:text-base pr-4">
              Download your data, upload it to the app and get quick, accurate
              AI second opinions.
              <br />
              Access and manage your medical information securely anytime,
              anywhere.
              <br />
              Experience our free, innovative medical AI service.
            </p>
          </div>
          <img
            src={SLAppUserCaseImage}
            alt="SLAppUserCaseImage"
            className="lg:w-4/5 self-center"
          />
        </motion.div>
      </section>

      {/** Data Buyer Case */}
      <section
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center  lg:mx-24  items-center"
        id="DataBuyerCase"
      >
        <h1 className=" lg:text-5xl font-bold text-3xl text-center">
          Data Buyer Case
        </h1>
        <div
          className="flex flex-col gap-8 lg:gap-4 w-full text-xs lg:text-lg sm:text-base " // Tailwind CSS 클래스 사용
        >
             <motion.div
                   ref={ref8} // 감지할 요소의 참조 연결
                   initial="hidden" // 초기 상태는 'hidden'
                   animate={controls8} // 애니메이션 컨트롤
                   variants={variants} // 위에서 정의한 variants 사용
              >
          <div className=" flex flex-row items-center lg:gap-12 gap-4 ">
            <img src={dataBuyer} alt="dataBuyer" className=" lg:h-72 h-28 " />
            <div className=" lg:space-y-8 space-y-2">
              <h2 className=" text-lg lg:text-3xl sm:text-xl font-semibold">
                Purchasing Medical Data
              </h2>
              <p>
                Users can purchase de-identified medical data using SL Tokens.{" "}
                <br /> This data is crucial for research and diagnostic
                purposes, aiding in the training and{" "}
                <br className="hidden lg:block" />
                improvement of AI models.
              </p>
            </div>
          </div>
          </motion.div>
          <motion.div
                   ref={ref9} // 감지할 요소의 참조 연결
                   initial="hidden" // 초기 상태는 'hidden'
                   animate={controls9} // 애니메이션 컨트롤
                   variants={variants} // 위에서 정의한 variants 사용
              >
          <div className=" flex flex-row items-center justify-end lg:gap-12 gap-4 ">
            <div className=" lg:space-y-8 space-y-2 ">
              <h2 className="  text-lg lg:text-3xl font-semibold sm:text-xl">
                Importance of Token Burning
              </h2>
              <p>
                All tokens obtained from data sales are burned,{" "}
                <br className=" hidden lg:block" />
                reducing the total supply of tokens in circulation.{" "}
                <br className=" lg:hidden" />
                This increases the scarcity <br className=" hidden lg:block" />{" "}
                and maintains the value of the tokens.
              </p>
            </div>
            <img
              src={buyWithSLTokens}
              alt="buyWithSLTokens"
              className=" lg:h-72 h-28 "
            />
          </div>
          </motion.div>
          <motion.div
                   ref={ref10} // 감지할 요소의 참조 연결
                   initial="hidden" // 초기 상태는 'hidden'
                   animate={controls10} // 애니메이션 컨트롤
                   variants={variants} // 위에서 정의한 variants 사용
              >
          <div className="flex flex-row items-center lg:gap-12 gap-4 ">
            <img
              src={dataBuyerCase3}
              alt="dataBuyerCase3"
              className=" lg:h-72 h-28 "
            />
            <div className="lg:space-y-8 space-y-2 ">
              <h2 className="  text-lg lg:text-3xl font-semibold sm:text-xl">
                Advancement of AI and Medical Research
              </h2>
              <p>
                With greater accessibility and utilization of data, AI-based
                medical research <br />
                becomes more accurate and efficient.
                <br /> This significantly contributes to the overall advancement
                of the medical industry.
              </p>
            </div>
          </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 lg:mt-20 mt-10">
            <a href="/TokenBurning">
              {" "}
              <motion.div
                  ref={ref11} // 감지할 요소의 참조 연결
                   initial="hidden" // 초기 상태는 'hidden'
                   animate={controls11} // 애니메이션 컨트롤
                style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
                whileHover={hoverEffects}
                variants={variants}
                transition={{ type: "spring", stiffness: 300 }}
                className=" rounded-3xl lg:h-56 h-36 p-4 flex flex-row items-center  justify-evenly"
              >
                <img
                  src={sltokenIcon}
                  alt="sltokenIcon"
                  className=" lg:h-24 h-16"
                />
                <div className="flex flex-col gap-2">
                  <p className=" lg:text-3xl text-xl">Token Burning</p>
                  <p className=" lg:text-xl">Burn all data sales tokens</p>
                </div>
                <MdArrowForwardIos className="lg:w-9  lg:h-9  w-6 h-6 " />
              </motion.div>
            </a>
            <a href="/MedicalAndAIAdvancement">
              <motion.div
                  ref={ref11} // 감지할 요소의 참조 연결
                   initial="hidden" // 초기 상태는 'hidden'
                   animate={controls11} // 애니메이션 컨트롤
                style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
                whileHover={hoverEffects}
                variants={variants}
                transition={{ type: "spring", stiffness: 300 }}
                className=" rounded-3xl  lg:h-56 h-36 p-4 flex flex-row items-center  justify-evenly"
              >
                <img
                  src={arrowIcon}
                  alt="arrowIcon"
                  className=" lg:h-24 h-16"
                />
                <div className="flex flex-col gap-2">
                  <p className=" lg:text-3xl text-xl">
                    Medical & AI <br />
                    advancement
                  </p>
                </div>
                <MdArrowForwardIos className="lg:w-9  lg:h-9  w-6 h-6 " />
              </motion.div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="xl:py-16 py-8 full-width-marquee xl:space-y-12 space-y-4"
        style={{
          background:
            "linear-gradient(to right, rgba(61, 16, 186, 0.8), rgba(69, 134, 190, 0.8))",
        }}
      >
        <Marquee>
          <img
            src={motionImage}
            alt="motionImage"
            className=" xl:h-72 h-40 mr-6"
          />
        </Marquee>
        <Marquee direction={"right"}>
          <img
            src={motionImage2}
            alt="motionImage2"
            className=" xl:h-72 h-28 mr-6"
          />
        </Marquee>
      </section>
      {/**contact us */}
      <section
        className=" hidden lg:flex flex-col  xl:mx-20 mx-2 xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 "
        style={{ backgroundImage: `url(${contactUsBackgroundImage})` }}
      >
        <div className=" xl:text-3xl text-lg">
          <p>
            Sign up for email updates{" "}
            <span className=" opacity-70">
              to keep up <br className={"hidden xl:block"} />
              to date with the SL Protocol
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white  border-white-800  px-4  bg-inherit focus:outline-blue-500"
          />
          <button
            type="submit"
            className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
          >
            GET UPDATES
          </button>
        </form>
      </section>
      <section
        className=" lg:hidden flex flex-col   xl:mx-20 mx-2 xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 "
        style={{ background: "linear-gradient(to right, #4586BE, #3C0CBA)" }}
      >
        <div className=" xl:text-3xl text-lg">
          <p>
            Sign up for email updates{" "}
            <span className=" opacity-70">
              to keep up <br className={"hidden xl:block"} />
              to date with the SL Protocol
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" xl:w-2/5 h-12 rounded-xl border-2 placeholder:text-white  border-white-800  px-4  bg-inherit focus:outline-blue-500"
          />
          <button
            type="submit"
            className="xl:w-1/6 w-1/2 h-12 text-sm lg:text-base bg-white rounded-xl font-bold text-neutral-900"
          >
            GET UPDATES
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;
