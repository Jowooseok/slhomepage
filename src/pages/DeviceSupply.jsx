import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import buyerList from "../data/buyerList";
import "./home.css";

function DeviceSupply() {

  const globeEl = useRef(null);
  // Define a static dataset for the Globe
  const places = buyerList;

  // 한국의 좌표를 찾습니다.
  const korea = places.find((place) => place.name === "Korea");

  // 한국에서 다른 나라로 연결 데이터를 생성합니다.
  const arcsData = places.map((place) => ({
    startLat: korea.latitude,
    startLng: korea.longitude,
    endLat: place.latitude,
    endLng: place.longitude,
    color:
      place.name === "Korea" ? "rgba(255, 0, 0, 1)" : "rgba(255, 165, 0, 0.75)",
  }));

  useEffect(() => {
    // 초기 카메라 위치 설정
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 35, lng: 104, altitude: 3 }, 5000);
    }
  }, []);

  return (
    <div className="">
      <section className=" flex flex-col gap-8 items-center mx-8 xl:pt-16 pt-8">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          Device <br className="lg:hidden"/>Supply Chain
        </h1>
        <p className=" text-center xl:text-xl text-sm ">
        "Over the course of 20 years, we have established a robust business network <br className="hidden xl:block"/>that  has facilitated the distribution of more than 50,000 devices to over 100 countries through partnerships with more than 30 vendors."
        </p>
        <Globe
         height={window.innerHeight * 0.7}
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={places}
          arcsData={arcsData}
          labelLat={(d) => d.latitude}
          labelLng={(d) => d.longitude}
          labelText={(d) => d.name}
          labelSize={(d) => Math.sqrt(d.pop_max) / 10}
          labelDotRadius={(d) => Math.sqrt(d.pop_max) / 5}
          labelColor={() => "rgba(255, 165, 0, 0.5)"}
          labelResolution={2}
          arcColor={() => "rgba(255, 165, 0, 0.5)"}
          arcStroke={0.2}
        />
   
      </section>
    </div>
  );
}

export default DeviceSupply;
