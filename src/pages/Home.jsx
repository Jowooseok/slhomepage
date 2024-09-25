import React, { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebaseConfig";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import Images from "../assets/Images";
import Vedios from "../assets/Videos";

function Home() {
  // const [email, setEmail] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Check if the email is empty or null
  //   if (!email) {
  //     alert("Please enter your email.");
  //     return; // Exit the function if the email is invalid
  //   }

  //   try {
  //     await addDoc(collection(db, "emails"), {
  //       email: email,
  //       createdAt: serverTimestamp(),
  //     });
  //     setEmail("");
  //     alert(
  //       "Thank you for signing up! You'll start receiving updates from the SL Protocol soon."
  //     );
  //   } catch (err) {
  //     console.error("Error adding document: ", err);
  //   }
  // };

  return (
    <div className="font-helvetica" id="home">
      <section className="lg:pt-10 lg:pb-16 py-8 flex flex-col lg:flex-row lg:gap-24  justify-center lg:items-center mx-2 ">
        홈페이지
      </section>
    </div>
  );
}

export default Home;
