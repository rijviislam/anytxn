import TabSlider from "./TabSlider";

export default function Technology() {
  return (
    <div className="text-center py-20 ">
      <h1 className="font-bold text-base text-[#1f80f0] montserrat-font leading-6 text-center ">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <p className="montserrat-font font-semibold text-[56px] leading-[62px] text-[0b305b] mt-3 text-center md:w-[550px] lg:w-full xs:w-full">
        The future of finance
      </p>
      <div>
        <TabSlider />
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
