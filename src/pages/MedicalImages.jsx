import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Images from "../assets/Images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const MedicalImages = () => {
  return (
    <div className="bg-[#FFF9F7] flex flex-col items-center xl:px-40 justify-center w-full p-4 ">
      <h1 className="text-2xl mt-4 md:text-5xl font-bold 2xl:mt-32 md:mt-16">Sampling images for sale</h1>
      <div className="flex xl:flex-row flex-col items-center mt-12 md:mt-16 justify-center gap-20 xl:gap-40 lg:mt-24 w-full">
        <div className=" flex flex-col  justify-center">
          <p className="font-bold md:text-lg">
            Discover a Curated Selection of Over 10,000 Interpreted Chest
            Medical Images
          </p>
          <p className="mt-2 text-sm md:text-base">
            We have collected a curated set of over 10,000 interpreted medical
            images. <br /> Take a look at the sample images below to see the
            level of detail and accuracy we provide.
            <br /> We believe that seeing is believing—so feel free to preview
            before you make a decision. <br />
            If you have any questions or special requests, please contact us via
            Telegram. <br />
            We’re here to help you find exactly what you need.
          </p>
          <div className="flex md:flex-row flex-col mt-12 gap-8 items-center justify-center xl:justify-start">
            <img
              src={Images.TelegramQR}
              alt="Telegram"
              className="md:w-[172px] md:h-[176px] w-[120px] h-[120px]"
            />
            <button
              onClick={() => {
                window.open("https://t.me/donny_bae", "_blank");
              }}
              className="bg-[#0147E5] text-white w-[222px] h-[64px] rounded-2xl"
            >
              Contact via Telegram
            </button>
          </div>
        </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-16 xl:hidden">
    <img src={Images.Sample1} alt="Sample1" className="rounded-md" />
    <img src={Images.Sample2} alt="Sample2" className="rounded-md" />
    <img src={Images.Sample3} alt="Sample3" className="rounded-md" />
    <img src={Images.Sample4} alt="Sample4" className="rounded-md" />
    <img src={Images.Sample5} alt="Sample5" className="rounded-md" />
    <img src={Images.Sample6} alt="Sample6" className="rounded-md" />
    <img src={Images.Sample7} alt="Sample7" className="rounded-md" />
    <img src={Images.Sample8} alt="Sample8" className="rounded-md" />
  
</div>
          <Carousel className="2xl:max-w-[520px] xl:max-w-[400px] hidden xl:block"  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} >
            <CarouselContent >
              <CarouselItem>
               <Card className="border-2 border-[#000000] outline-2">
                <CardContent className="flex  items-center justify-center p-12  ">
                  <img src={Images.Sample1} alt="Sample1" className=" rounded-md " />
                </CardContent>
              </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample2} alt="Sample2" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample3} alt="Sample3" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample4} alt="Sample4" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample5} alt="Sample5" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample6} alt="Sample6" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample7} alt="Sample7" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-2 border-[#000000] outline-2">
                  <CardContent className="flex  items-center justify-center p-12  ">
                    <img src={Images.Sample8} alt="Sample8" className=" rounded-md " />
                  </CardContent>
                </Card>
              </CarouselItem>
           
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </div>

      <div className="mb-32"></div>
    </div>
  );
};

export default MedicalImages;
