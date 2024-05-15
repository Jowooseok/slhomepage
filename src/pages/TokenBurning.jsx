import React from "react";
import tokenBurningPage1 from "../assets/tokenBurningPage1.png";
import tokenBurningPage2 from "../assets/tokenBurningPage2.png";

const TokenBurning = () => {
  return (
    <div>
      {" "}
      <section className=" flex flex-col gap-8 items-center py-8 lg:px-32  lg:mb-16 lg:gap-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Token Burning
        </h1>
        <div className=" grid lg:mx-20 gap-16 ">
          <img src={tokenBurningPage1} alt="tokenBurningPage1"  />
          <img src={tokenBurningPage2} alt="tokenBurningPage2"  />
        </div>
      </section>
    </div>
  );
};

export default TokenBurning;
