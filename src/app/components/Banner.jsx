"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Bannerimg from "../../../public/assets/banner-image.jpg";
import Logo from "../../../public/assets/logo-a.svg";
import Navbar from "./Navbar";
export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" overflow-x-hidden">
      {/* LEARGE BANNER START  */}
      <div className="hidden lg:block  w-full max-h-screen relative ">
        <Navbar />
        <div className=" w-full flex-col flex justify-center items-center relative overflow-hidden  ">
          <div className="banner-container h-screen w-full relative ">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white z-30"
              style={{
                clipPath: "polygon(200% 70%, 110% -1050%, 90% 1400%, -1% 100%)",
              }}
            ></div>
          </div>
          <div className="max-w-[1150px] min-w-[992px flex items-start justify-start absolute top-[130px] lg:left-10 xl:left-10 xxl:left-[130px] 3xl:left-[200px] 4xl:left-[200px] largest:left-[250px] z-40 ">
            <div className="">
              <h1 className="montserrat-font font-semibold  lg:text-[40px] xl:text-[80px] xl:leading-[92px] text-[#FFF]">
                Embrace the <br />
                future of finance
              </h1>
              <p className="montserrat-font text-base font-semibold leading-[26px] text-[#FFF] my-5">
                Reimagine financial services with AnyTech's open platform,
                distributed <br /> banking solution that powers transformation
              </p>

              <button className="group bg-[#FE8B53] px-10 py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition flex items-center gap-2">
                <span className="transition-transform duration-200 group-hover:-translate-x-1">
                  Reach Out to Us
                </span>
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <svg
              className="hidden lg:block absolute -top-1 h-full w-full object-cover inset-0 z-30 "
              width="1920"
              height="929"
              viewBox="0 0 1920 929"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="hero-background-desktop">
                <g
                  id="background"
                  style={{
                    transform: "translate3d(0.535714%, 1.15586%, 0px)",
                    transition:
                      "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "--motion-translateX": "0px",
                    "--motion-translateY": "0px",
                  }}
                >
                  <g
                    id="Vector"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
                      fill="url(#paint0_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_2"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
                      fill="url(#paint1_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_3"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M1011 -629.405V-995L-171 187H194.596L1011 -629.405Z"
                      fill="url(#paint2_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_4"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M313 -161.212V-357L-320 276H-124.211L313 -161.212Z"
                      fill="url(#paint3_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_5">
                    <path
                      d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                      fill="url(#paint4_linear_132_3263)"
                    ></path>
                    <path
                      d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                      fill="url(#paint5_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_6" filter="url(#filter0_f_132_3263)">
                    <path
                      d="M52 428.656V347L-212 611H-130.344L52 428.656Z"
                      fill="url(#paint6_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_7" filter="url(#filter1_f_132_3263)">
                    <path
                      d="M146 50L-189 385H-165.061L146 73.9394V50Z"
                      fill="url(#paint7_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_8" filter="url(#filter2_f_132_3263)">
                    <path
                      d="M345.1 -154L124 67.1H139.8L345.1 -138.2V-154Z"
                      fill="url(#paint8_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_9" filter="url(#filter3_f_132_3263)">
                    <path
                      d="M140 131H313L140 304V131Z"
                      fill="url(#paint9_linear_132_3263)"
                    ></path>
                    <path
                      d="M140 131H313L140 304V131Z"
                      fill="url(#paint10_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_10"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M1315 316.788V121L682 754H877.789L1315 316.788Z"
                      fill="url(#paint11_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_11"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M1220 -28.2093V-121L920 179H1012.79L1220 -28.2093Z"
                      fill="url(#paint12_linear_132_3263)"
                    ></path>
                  </g>
                  <g
                    id="Vector_12"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                  >
                    <path
                      d="M1968 388.791V296L1668 596H1760.79L1968 388.791Z"
                      fill="url(#paint13_linear_132_3263)"
                    ></path>
                  </g>
                </g>
                <g
                  id="foreground"
                  style={{
                    transform: "translate3d(-0.321429%, -0.693515%, 0px)",
                    "--motion-translateX": "0px",
                    "--motion-translateY": "0px",
                    opacity: 1,
                    transition:
                      "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <path
                    id="Vector_13"
                    d="M1563 30.6791V-85L1189 289H1304.68L1563 30.6791Z"
                    fill="url(#paint14_linear_132_3263)"
                  ></path>
                  <g id="Vector_14" filter="url(#filter4_f_132_3263)">
                    <path
                      d="M1909 -173.321V-289L1535 85H1650.68L1909 -173.321Z"
                      fill="url(#paint15_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_15" filter="url(#filter5_f_132_3263)">
                    <path
                      d="M761.1 577L540 798.1H555.8L761.1 592.8V577Z"
                      fill="url(#paint16_linear_132_3263)"
                    ></path>
                  </g>
                  <path
                    id="Vector_16"
                    d="M2042 259.679V144L1668 518H1783.68L2042 259.679Z"
                    fill="url(#paint17_linear_132_3263)"
                  ></path>
                  <g id="Vector_17" filter="url(#filter6_f_132_3263)">
                    <path
                      d="M1729.1 -57L1508 164.1H1523.8L1729.1 -41.2V-57Z"
                      fill="url(#paint18_linear_132_3263)"
                    ></path>
                  </g>
                  <g id="Vector_18" filter="url(#filter7_f_132_3263)">
                    <path
                      d="M1721 49H1774L1721 102V49Z"
                      fill="url(#paint19_linear_132_3263)"
                    ></path>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_132_3263"
                  x="-263"
                  y="296"
                  width="366"
                  height="366"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="25.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_132_3263"
                  x="-210"
                  y="29"
                  width="377"
                  height="377"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="10.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter2_f_132_3263"
                  x="112"
                  y="-166"
                  width="245.1"
                  height="245.1"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="6"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter3_f_132_3263"
                  x="107"
                  y="98"
                  width="239"
                  height="239"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="16.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter4_f_132_3263"
                  x="1504"
                  y="-320"
                  width="436"
                  height="436"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="15.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter5_f_132_3263"
                  x="519"
                  y="556"
                  width="263.1"
                  height="263.1"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="10.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter6_f_132_3263"
                  x="1487"
                  y="-78"
                  width="263.1"
                  height="263.1"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="10.5"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter7_f_132_3263"
                  x="1703"
                  y="31"
                  width="89"
                  height="89"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_132_3263"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_132_3263"
                  x1="-788.962"
                  y1="1499.58"
                  x2="691.884"
                  y2="18.7308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_132_3263"
                  x1="945.5"
                  y1="1007"
                  x2="375"
                  y2="333.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_132_3263"
                  x1="761.5"
                  y1="604"
                  x2="191"
                  y2="-69.4999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_132_3263"
                  x1="-596.41"
                  y1="862.58"
                  x2="123.1"
                  y2="11.195"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_132_3263"
                  x1="-233.5"
                  y1="188.5"
                  x2="203.5"
                  y2="-153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint5_linear_132_3263"
                  x1="-161.927"
                  y1="154.141"
                  x2="385.227"
                  y2="-312.773"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint6_linear_132_3263"
                  x1="-260"
                  y1="632.529"
                  x2="45.6469"
                  y2="371.706"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint7_linear_132_3263"
                  x1="-179.152"
                  y1="375.758"
                  x2="137.938"
                  y2="81.3501"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#40FEFF"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint8_linear_132_3263"
                  x1="83.7999"
                  y1="85.1308"
                  x2="339.779"
                  y2="-133.309"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint9_linear_132_3263"
                  x1="140"
                  y1="217.15"
                  x2="313"
                  y2="217.15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint10_linear_132_3263"
                  x1="35.9711"
                  y1="331.992"
                  x2="280.76"
                  y2="76.952"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop offset="1" stopColor="#1F80F0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint11_linear_132_3263"
                  x1="405.59"
                  y1="1340.58"
                  x2="1125.1"
                  y2="489.195"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint12_linear_132_3263"
                  x1="789"
                  y1="457"
                  x2="1130"
                  y2="53.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint13_linear_132_3263"
                  x1="1537"
                  y1="874"
                  x2="1878"
                  y2="470.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint14_linear_132_3263"
                  x1="1294"
                  y1="306.5"
                  x2="1649.5"
                  y2="-40.0002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint15_linear_132_3263"
                  x1="1467"
                  y1="115.5"
                  x2="1900"
                  y2="-254"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint16_linear_132_3263"
                  x1="407.047"
                  y1="833.875"
                  x2="719.896"
                  y2="507.925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop offset="1" stopColor="#1F80F0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint17_linear_132_3263"
                  x1="1600"
                  y1="548.5"
                  x2="2033"
                  y2="179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint18_linear_132_3263"
                  x1="1467.8"
                  y1="182.131"
                  x2="1723.78"
                  y2="-36.3089"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint19_linear_132_3263"
                  x1="1711.36"
                  y1="106.322"
                  x2="1772.72"
                  y2="53.9599"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA"></stop>
                  <stop
                    offset="1"
                    stopColor="#1F80F0"
                    stopOpacity="0.49"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className="absolute -right-20 z-20 h-[100%] w-[100%] "
            style={{
              clipPath: "polygon(30% 100%, 103% -90%, 170% -50%, 50% 140%)",
            }}
          >
            <Image
              className="object-cover w-full h-full absolute -right-10"
              src={Bannerimg}
              alt="Banner"
            />
          </div>
        </div>
      </div>
      {/* LEARGE BANNER END  */}
      {/* TABLET OR SMALL BANNER  */}
      <div className="flex flex-col lg:hidden  w-full min-h-[150vh] relative overflow-x-hidden ">
        <div className="bg-[#005BC4] h-[110vh] w-full relative flex items-center justify-center ">
          <div
            className="absolute top-0 left-0 w-full h-full bg-white z-30"
            style={{
              clipPath: "polygon(350% 70%, 110% -50%, 90% 1400%, -1% 100%)",
            }}
          ></div>
          {/* SMALL HEADER  */}
          <div>
            {/* Small Header (Fixed Top Navbar) */}
            <div className="bg-[#1F80F0] w-full h-[80px] fixed top-0 flex items-center justify-between px-6 md:px-10 z-50">
              <Image src={Logo} alt="logo" width={120} height={50} />

              {/* Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.41401 6.99998L13.707 1.70695C14.098 1.31695 14.098 0.683006 13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58597L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.683006 -0.0979941 1.31695 0.293006 1.70695L5.58601 6.99998L0.293006 12.293C-0.0979941 12.683 -0.0979941 13.3169 0.293006 13.7069C0.488006 13.9019 0.744007 14 1.00001 14C1.25601 14 1.51201 13.9019 1.70701 13.7069L7.00001 8.41398L12.293 13.7069C12.488 13.9019 12.744 14 13 14C13.256 14 13.512 13.9019 13.707 13.7069C14.098 13.3169 14.098 12.683 13.707 12.293L8.41401 6.99998Z"></path>
                  </svg>
                ) : (
                  <svg
                    className="fill-white"
                    width="24"
                    height="24"
                    viewBox="0 0 18 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z"></path>
                    <rect y="7" width="18" height="2"></rect>
                    <path d="M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* SMALL MENU   */}
            <div
              className={`fixed top-[80px] left-0 w-full h-3/5 bg-[#1B76E9] shadow-md transition-all duration-300 ease-in-out z-40 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="flex flex-col items-center gap-8 p-4 ">
                <Link
                  href="#"
                  className="text-[#FFF] text-sm font-medium  w-full inter-font flex justify-between"
                >
                  Solutions
                  <svg
                    className="ml-2 mt-1 fill-white"
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-[#FFF] text-sm font-medium  w-full inter-font flex justify-between text-start"
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-[#FFF] text-sm font-medium  w-full inter-font flex justify-between text-start"
                >
                  ABout Us
                </Link>
              </ul>
              <div className=" w-full flex-col flex items-center justify-center mt-5 px-10 gap-4">
                <button className="uppercase text-white text-centerfont-medium inter-font text-sm flex items-center justify-center gap-2 py-3 px-4 border-[0.5px] border-[#c6c6c6] rounded-3xl">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  English
                  <svg
                    className="rotate-0 transition-transform duration-300"
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className="border border-white inter-font text-base font-semibold w-full flex items-center justify-center text-white py-3">
                  Contact Us
                  <svg
                    className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT AND SVG  */}
          <div className="w-full ">
            <svg
              className="lg:hidden absolute top-0 left-0  mw-[100%] h-[65%] object-cover"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 797 645"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="hero-background-mobile">
                <g
                  id="dark"
                  style={{
                    transform: "translate3d(0%, 0.005%, 0px)",
                    transition:
                      "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <g id="Group" style={{ mixBlendMode: "multiply" }}>
                    <path
                      id="Vector"
                      d="M797 437.791V345L497 645H589.791L797 437.791Z"
                      fill="url(#paint0_linear_6_180)"
                    />
                  </g>
                  <g id="Group_2" style={{ mixBlendMode: "multiply" }}>
                    <path
                      id="Vector_2"
                      d="M409.788 305V109.212L0 519.004H195.789L409.788 305Z"
                      fill="url(#paint1_linear_6_180)"
                    />
                  </g>
                  <g id="Group_3" style={{ mixBlendMode: "multiply" }}>
                    <path
                      id="Vector_3"
                      d="M684 365.595V0L39 644.991H404.596L684 365.595Z"
                      fill="url(#paint2_linear_6_180)"
                    />
                  </g>
                </g>
                <g
                  id="light"
                  clipPath="url(#clip0_6_180)"
                  style={{
                    transform: "translate3d(0%, 0.025%, 0px)",
                    transition:
                      "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <g id="Group_4" filter="url(#filter0_f_6_180)">
                    <path
                      id="Vector_4"
                      d="M684 272.067V200L451 433H523.068L684 272.067Z"
                      fill="url(#paint3_linear_6_180)"
                    />
                  </g>
                  <g id="Group_5" filter="url(#filter1_f_6_180)">
                    <path
                      id="Vector_5"
                      d="M706.1 69L485 290.1H500.8L706.1 84.8V69Z"
                      fill="url(#paint4_linear_6_180)"
                    />
                  </g>
                  <g id="Group_6" filter="url(#filter2_f_6_180)">
                    <path
                      id="Vector_6"
                      d="M111 313H284L111 486V313Z"
                      fill="url(#paint5_linear_6_180)"
                    />
                    <path
                      id="Vector_7"
                      d="M111 313H284L111 486V313Z"
                      fill="url(#paint6_linear_6_180)"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_6_180"
                  x="420"
                  y="169"
                  width="295"
                  height="295"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="15.5"
                    result="effect1_foregroundBlur_6_180"
                  />
                </filter>
                <filter
                  id="filter1_f_6_180"
                  x="473"
                  y="57"
                  width="245.1"
                  height="245.1"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6"
                    result="effect1_foregroundBlur_6_180"
                  />
                </filter>
                <filter
                  id="filter2_f_6_180"
                  x="78"
                  y="280"
                  width="239"
                  height="239"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="16.5"
                    result="effect1_foregroundBlur_6_180"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_6_180"
                  x1="366"
                  y1="923"
                  x2="707"
                  y2="519.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0" />
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_180"
                  x1="-276.407"
                  y1="1105.58"
                  x2="443.103"
                  y2="254.197"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0" />
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_180"
                  x1="971.501"
                  y1="1062"
                  x2="401"
                  y2="388.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F80F0" />
                  <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_6_180"
                  x1="408.636"
                  y1="452.001"
                  x2="678.393"
                  y2="221.805"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA" />
                  <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_6_180"
                  x1="444.8"
                  y1="308.131"
                  x2="700.779"
                  y2="89.6911"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA" />
                  <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_6_180"
                  x1="111"
                  y1="399.15"
                  x2="284"
                  y2="399.15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_6_180"
                  x1="6.9711"
                  y1="513.992"
                  x2="251.76"
                  y2="258.952"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA" />
                  <stop offset="1" stopColor="#1F80F0" />
                </linearGradient>
                <clipPath id="clip0_6_180">
                  <rect
                    width="641"
                    height="462"
                    fill="white"
                    transform="translate(78 57)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute xs:top-[150px] min-w-full lg:max-w-[576px] xs:mx-10 sm:px-5  xs:px-5 ">
            <h1 className="montserrat-font text-[56px] leading-[64px] font-semibold   text-[#FFF] ">
              Embrace the future of finance
            </h1>
            <p className="montserrat-font text-base font-semibold  text-[#FFF] my-5 ">
              Reimagine financial services with AnyTech's open platform,
              distributed banking solution that powers transformation
            </p>
            <button className="bg-[#FE8B53]  py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition xs:w-[300px] sm:w-[300px] md:w-[300px]">
              Reach Out to Us
            </button>
          </div>
        </div>

        <div
          className="w-full h-[50vh] absolute bottom-[0px]  z-30"
          style={{
            clipPath: "polygon(0 20%, 100% 0, 120% 80%, 0 100%)",
          }}
        >
          <Image
            className="object-cover w-full h-full"
            src={Bannerimg}
            alt="Banner"
          />
        </div>
      </div>
      {/* TABLET OR SMALL BANNER  END*/}
    </div>
  );
}
