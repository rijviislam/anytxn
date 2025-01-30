import Image from "next/image";
import F1 from "../../assets/finance-1.png";
import F2 from "../../assets/finance-2.svg";
import F3 from "../../assets/finance-3.png";
import FinanceImg from "../../assets/finance-figure-svg1.svg";
import FinanceMainImg from "../../assets/finance.png";

export default function Finance() {
  return (
    <div className="w-full bg-[#FFF] mx-auto flex items-center justify-center pt-[62px] flex-col">
      <div className="max-w-[1200px] flex justify-between relative">
        <div className="w-1/2">
          <h1 className="text-base font-bold leading-[24px] montserrat-font text-[#1f80f0]">
            POWERING THE FUTURE OF FINANCE
          </h1>
          <h2 className="text-[56px] font-semibold leading-[62px]  montserrat-font text-[#0b305b] pt-6">
            Uncovering new ways to delight customers
          </h2>
          <h6 className="font-bold text-base leading-[26px] text-[#164377] inter-font my-5">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </h6>
          <p className="inter-font font-normal text-base leading-[26px] text-[#164377]">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <div className=" relative ">
          <Image
            className="absolute w-[115px] h-[114px] -right-0 top-20 object-contain shadow-2xl  z-50 "
            src={F1}
            alt="Finance"
          />
          <Image
            className="absolute w-[73px] h-[73px] left-7 top-[150px] object-contain shadow-2xl z-50 "
            src={F2}
            alt="Finance"
          />
          <Image
            className="absolute w-[87px] h-[86px] left-[140px] top-[240px] object-contain shadow-2xl z-50 "
            src={F3}
            alt="Finance"
          />
          <div>
            <Image
              className="w-[550px] h-[600px] object-cover  relative z-10 "
              src={FinanceImg}
              alt="Finance"
            />
            <Image
              className="w-[426px] absolute h-[517px] object-contain shadow-2xl z-20 top-10 right-14"
              src={FinanceMainImg}
              alt="Finance"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[212px] opacity-15 ">
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
