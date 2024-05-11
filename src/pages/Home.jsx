import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import Globe from "react-globe.gl";
import buyerList from "../data/buyerList";
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
      alert("Thank you for signing up! You'll start receiving updates from the SL Protocol soon.");
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

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
    if (inView4) controls4.start("visible");
    if (inView5) controls5.start("visible");
    if (inView6) controls6.start("visible");
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
      <section className="lg:py-20 py-4 flex flex-col lg:flex-row lg:gap-14 justify-center lg:items-center mx-2 ">
        <div className=" flex flex-col flex-grow-0 gap-6 xl:gap-16 ">
          <div>
            <p className=" text-lg  sm:text-4xl">Onchain Project</p>
            <p className=" text-2xl sm:text-6xl font-bold">
              Experience Medical AI!
            </p>
          </div>
          <div className="sm:text-2xl">
            <p>
              AI Diagnostic is live, Send your X-ray <br />
              Your Data saves your Lives.
            </p>
          </div>
          <div className=" sm:text-2xl">
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
            <p className=" text-lg lg:text-2xl">AI Airdrop Event Will Start!</p>
            <p className=" text-sm lg:text-xl">
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
        <h1 className="text-3xl lg:text-6xl font-bold text-center">About SL</h1>
        <motion.div
          ref={ref} // 감지할 요소의 참조 연결
          initial="hidden" // 초기 상태는 'hidden'
          animate={controls} // 애니메이션 컨트롤
          variants={variants} // 위에서 정의한 variants 사용
        >
          <div
            className="flex flex-col gap-4 lg:gap-8 relative p-8 lg:p-24 py-12 rounded-3xl "
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
            <div className="text-sm lg:text-lg">
              <p>
                SL project is dedicated to saving lives and improving quality of
                life by
                <br className={"hidden xl:block"} />
                offering free AI-based diagnoses and monitoring health with data
                <br className={"hidden xl:block"} />
                processed via smart contracts and blockchain, ensuring
                transparency
                <br className={"hidden xl:block"} />
                and security.
              </p>
            </div>
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full cursor-pointer">
        <a href="/Certificate">
          <motion.div
            ref={ref1}
            className="rounded-2xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
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
                Certification 21(USA FCC, FDA, Europe, Japan, China etc.)
              </p>
            </div>
            <MdArrowForwardIos className=" w-16 h-16 hidden lg:block" />
          </motion.div>
          </a>
          
          <a href="/Patent">
          <motion.div
            ref={ref2}
            className="rounded-2xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
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
                Patent 8(Patent, Trademark Registaration, Trademark Rights, PCT)
              </p>
            </div>
            <MdArrowForwardIos className="w-16 h-16 hidden lg:block" />
          </motion.div>
          </a>

          <a href="/DeviceSupply" target="_blank">
            <motion.div
              ref={ref3}
              className="rounded-2xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
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
            </motion.div>
          </a>

          <a href="/VendorCompany">
          <motion.div
            ref={ref4}
            className="rounded-2xl flex lg:flex-row flex-col items-center justify-evenly lg:px-20 px-14 lg:py-14 py-8 gap-8"
            style={{ backgroundColor: "RGBA(99,116,147,0.65)" }}
            whileHover={hoverEffects}
            initial="hidden"
            animate={controls4}
            variants={variants}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={vendorImage} alt="vendorImage" className="lg:w-16 w-20" />
            <div className="space-y-4 text-center lg:text-start">
              <p className="text-xl lg:text-3xl">
                30+{" "}
                <span className="text-neutral-400 pl-2 lg:pl-0">
                  Vendor company
                </span>
              </p>
              <p className=" text-sm lg:text-base">
                As a vendor responsible for distribution worldwide, we maintain
                partnerships with global companies.
              </p>
            </div>
            <MdArrowForwardIos className="w-16 h-16 hidden lg:block" />
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
          <div className="lg:text-xl text-sm flex flex-col justify-center gap-8 xl:pl-4">
            <h1 className="lg:text-5xl text-3xl"> Medical AI Solution</h1>
            <div>
              <p>
                On-Chain collects, interprets, and supplies medical imaging
                <br className={"hidden xl:block"} />
                data to advance medical imaging diagnostic technology and
                <br className={"hidden xl:block"} />
                provides Medical AI second opinions at a cost close to free.
              </p>
            </div>
            <div>
              <p>
                We have achieved a high diagnostic accuracy with impressive
                <br className={"hidden xl:block"} />
                AUROC (0.985) and JAFROC FOM (0.943) scores.{" "}
                <br className={"hidden xl:block"} />
                Furthermore, our AI solution has obtained both CE{" "}
                <br className={"hidden xl:block"} />
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
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center items-center   lg:mx-20 "
        id="Protocol"
      >
        <h1 className=" lg:text-6xl text-3xl font-bold text-center">
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
        className="lg:py-24 py-16 gap-8 flex flex-col lg:gap-20 justify-center  lg:mx-20  items-center"
        id="TokenEconomy"
      >
        <h1 className=" lg:text-6xl font-bold text-3xl text-center">
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
        className=" flex flex-col   xl:mx-20 mx-2 xl:my-20 my-16 rounded-3xl xl:px-16 px-8 py-8 lg:py-24 gap-8 "
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
    </div>
  );
}

export default Home;
