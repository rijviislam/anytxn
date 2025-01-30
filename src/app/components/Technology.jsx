"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Tech1 from "../../assets/technology1.jpg";

const tabs = [
  "Customer focused",
  "Agile and adaptable",
  "Compliance ready",
  "Secure and safe",
];

const TabSlider = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoSliding) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % tabs.length);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isAutoSliding]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setIsAutoSliding(false);
  };

  return (
    <div className="tab-container mt-10 flex items-center justify-center flex-col mb-20">
      <div className="tab-buttons flex gap-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-[#1f80f0] font-semibold text-lg px-10 py-3 rounded-[30px] cursor-pointer ${
              activeIndex === index ? "bg-blue-200" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative mt-10 ">
        <div
          ref={containerRef}
          className="tab-content flex overflow-hidden w-[1200px] cursor-grab rounded-[30px] shadow-md bg-[#FaFDFE]"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center gap-10 p-10 rounded-[30px]"
            >
              <div className="text-start max-w-[489px]">
                <h1 className="text-base font-bold text-[#1f80f0] uppercase">
                  {tab}
                </h1>
                <h2 className="text-[40px] font-semibold text-[#0b305b] my-5">
                  Highly secure and safe
                </h2>
                <p className="text-[#164377] text-base leading-[26px]">
                  Discover unparalleled security trusted by financial
                  institutions across the globe.
                </p>
              </div>
              <Image
                className="w-[489px] h-[425px] rounded-3xl object-cover"
                src={Tech1}
                alt="Finance"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full h-[212px] opacity-15">
        <svg
          className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M0 0H1920L0 280V0Z"
            fill="url(#paint0_linear)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="960"
              y1="280"
              x2="960"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TabSlider;
