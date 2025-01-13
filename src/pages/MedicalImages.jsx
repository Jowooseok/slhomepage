import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Images from "../assets/Images";



const MedicalImages = () => {
    const [open, setOpen] = useState(true);

  return (
    <div className="bg-[#FFF9F7] flex flex-col items-center justify-center w-full "> 
        <h1 className="text-5xl font-bold 2xl:mt-32">Sampling images for sale</h1>
        <div className="flex flex-row"></div>
    </div>
  );
};

export default MedicalImages;
