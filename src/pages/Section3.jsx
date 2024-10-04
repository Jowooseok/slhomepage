// Section3.js
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Images from "../assets/Images";
import { Line } from "react-chartjs-2"; // Line 차트 라이브러리 추가
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// 차트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Section3 = ({
  section3Ref,
  section3TextRef,
  xray2021Ref,
  xray2022Ref,
  xray2023Ref,
  managementMockupRef,
  transactionTextRef,
  usdTextRef,
  chartRef,
  accumulationTextRef // 추가된 ref
}) => {

  // 차트 데이터 설정
  const data = {
    labels: ['2025 Q2', '2025 Q3', '2025 Q4', '2026 Q1'],
    datasets: [
      {
        label: 'Accumulated Images',
        data: [400000, 1200000, 2800000, 4800000],
        borderColor: '#0147E5', // 선 색상
        backgroundColor: 'rgba(1, 71, 229, 0.2)', // 선 아래 영역의 배경 색상
        fill: true, // 선 아래 영역을 색으로 채움
        tension: 0.4, // 부드러운 곡선 형태
        pointRadius: 5, // 각 포인트 크기
        pointBackgroundColor: '#0147E5', // 포인트 배경 색상
        pointBorderColor: '#fff', // 포인트 테두리 색상
        pointHoverRadius: 7, // 포인트 호버 시 크기
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#171717',
        },
      },
      title: {
        display: true,
        text: 'Accumulated Images Over Time',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#171717',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.parsed.y.toLocaleString();
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // X축 그리드 숨기기
          borderColor: '#171717',
        },
        ticks: {
          color: '#171717',
          font: {
            size: 14,
          },
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // 수치에 천 단위 구분 기호 추가
          },
          color: '#171717',
          font: {
            size: 14,
          },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Y축 그리드 색상
        },
      },
    },
  };

  return (
    <div
      id="MedicalDataValue"
      name="MedicalDataValue"
      ref={section3Ref}
      className="relative w-full overflow-hidden md:p-8 p-4"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="flex flex-col h-full relative pt-16">
        <div className="grid grid-cols-12 h-full mt-8 relative">
          {/* Left Column */}
          <div className="col-span-4 flex flex-col justify-between h-full relative">
            <div ref={section3TextRef} className="text-container">
              <h2 className="lg:text-4xl md:text-2xl text-sm font-semibold text-[#171717]">
                Managed medical data <br />
                generates added value.
              </h2>
              <a href="/MedicalDataValue" className="flex flex-row items-center gap-2 text-blue-600 mt-4">
                <p className="text-sm md:text-xl">Learn more</p>
                <FaCircleArrowRight className="text-2xl" />
              </a>
            </div>
            <div className="flex-grow flex">
              <div className="relative h-full w-full">
                {/* X-ray Image 1 */}
                <img
                  ref={xray2021Ref}
                  src={Images.Xray2021}
                  alt="xray-2021"
                  className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-32 bottom-20 lg:left-16 z-0 opacity-0"
                />
                {/* X-ray Image 2 */}
                <img
                  ref={xray2022Ref}
                  src={Images.Xray2022}
                  alt="xray-2022"
                  className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-24 lg:left-28 bottom-16 md:left-12 left-4 z-10 opacity-0"
                />
                {/* X-ray Image 3 */}
                <img
                  ref={xray2023Ref}
                  src={Images.Xray2023}
                  alt="xray-2023"
                  className="w-20 md:w-36 lg:w-40 object-contain absolute md:bottom-12 lg:left-40 bottom-10 md:left-24 left-9 z-20 opacity-0"
                />
                {/* Accumulation Text */}
                <p
                  ref={accumulationTextRef}
                  className="absolute md:-bottom-8 -bottom-4 text-xs md:text-base lg:text-lg min-w-48 text-neutral-800 opacity-0"
                >
                  Accumulation, Storage, and Management of Personal Medical Data & AI Diagnosis - On Blockchain
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-4 flex flex-col items-center justify-center gap-4 relative z-30">
            <img
              ref={managementMockupRef}
              src={Images.ManagementMockup}
              className="w-60 object-contain opacity-0"
              alt="management-mockup"
            />
            <p
              ref={transactionTextRef}
              className="lg:text-2xl md:text-lg text-xs text-center opacity-0"
            >
              Processed X-ray data price Transactions <br className="lg:block hidden" /> <span ref={usdTextRef}>30 ~100 USD</span>
            </p>
          </div>

          {/* Right Column */}
          <div className="col-span-4 lg:flex hidden">
            {/** 꺾은선 차트 섹션 */ }
            <div ref={chartRef} className="w-full flex items-center lg:h-full opacity-0">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
