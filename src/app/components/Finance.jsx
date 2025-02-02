"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FinanceImg from "../../../public/assets/finance-figure-svg1.svg";
import FinanceMainImg from "../../../public/assets/finance.png";

export default function Finance() {
  return (
    <div className="min-w-full mx-auto flex items-center justify-center  flex-col  mt-10 overflow-x-hidden ">
      <div className="lg:max-w-[1200px] w-full flex justify-between relative  lg:flex-row lg:px-10 xl:px-0 px-0 gap-5 lg:gap-0 lg:items-start flex-col items-center lg:text-start text-center">
        <div className="lg:w-1/2 text-center lg:text-start">
          <h1 className="lg:text-base text-[12px] leading-[18px] font-bold lg:leading-[24px] montserrat-font text-[#1f80f0] px-10 lg:px-0 text-start lg:text-center">
            POWERING THE FUTURE OF FINANCE
          </h1>
          <h2 className="lg:text-[56px] text-[32px] font-semibold leading-[38px] lg:leading-[62px]  montserrat-font text-[#0b305b] pt-6 px-10 lg:px-0 lg:text-center text-start">
            Uncovering new ways to delight customers
          </h2>
          <h6 className="font-bold text-base leading-[26px] text-[#164377] inter-font my-5 lg:block hidden">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </h6>
          <p className="inter-font font-normal text-base leading-[26px] text-[#164377] lg:block hidden">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <div className=" relative ">
          <motion.img
            src="/assets/finance-2.svg"
            alt="Icon"
            className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src="/assets/finance-1.svg"
            alt="Icon"
            className="absolute top-[10%] right-[-7%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl  z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src="/assets/finance-3.png"
            alt="Icon"
            className="absolute top-[40%] left-[30%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl  z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <div>
            <Image
              className="lg:w-[550px]  h-[400px] lg:h-[600px] md:h-[600px] object-cover  relative z-10 "
              src={FinanceImg}
              alt="Finance"
            />
            <Image
              className="lg:w-[426px] md:w-[426px] w-[317px] absolute h-[301px] lg:h-[517px] md:h-[517px] object-contain lg:shadow-2xl z-20 top-10 right-14 xs:right-5 "
              src={FinanceMainImg}
              alt="Finance"
            />
          </div>
        </div>
        <div className="lg:hidden md:flex flex-col px-5 md:px-0 max-w-[500px]  ml-5 ">
          <h6 className="font-bold text-base leading-[26px] text-[#164377] inter-font my-5 ">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </h6>
          <p className="inter-font font-normal text-base leading-[26px] text-[#164377] ">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
      <div className="w-full lg:h-[212px] opacity-15 ">
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
}
