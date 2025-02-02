"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    title: "Customer focused",
    heading: "Purpose-built financial services",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: "/assets/tech4.jpg",
  },
  {
    title: "Agile and adaptable",
    heading: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: "/assets/tech2.jpg",
  },
  {
    title: "Compliance ready",
    heading: "Manage compliance with ease",
    description1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: "/assets/tech3.png",
  },
  {
    title: "Secure and safe",
    heading: "Highly secure and safe",
    description1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    description2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image: "/assets/tech5.jpg",
  },
];

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const mainSwiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setIsAutoplay(false);

    setTimeout(() => {
      if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
        mainSwiperRef.current.swiper.slideTo(index);
      }
    }, 10);
  };

  return (
    <>
      {/* TAB BUTTON  */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper lg:my-10 my- rounded-[30px] max-w-[1030px] "
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => handleButtonClick(index)}
              className={`font-semibold lg:block hidden text-lg px-10 py-3 rounded-[30px] cursor-pointer ${
                activeIndex === index
                  ? "bg-blue-200 text-[#1f80f0]"
                  : "text-[#1f80f0]"
              }`}
            >
              {slide.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TAB SLIDER  */}
      <Swiper
        ref={mainSwiperRef}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        autoplay={
          isAutoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 xl:max-w-[1200px] max-w-[800px] rounded-[30px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className=" bg-[#F8FCFF] rounded-[30px] shadow-2xl w-[340px] "
          >
            <div className="flex-col-reverse flex xl:flex-row lg:flex-row xl:items-start xl:justify-center gap-10 p-5 lg:p-10 items-center justify-center">
              <div className="text-start  max-w-[489px] ">
                <h1 className="text-[12px] lg:text-base font-bold text-[#1f80f0] uppercase">
                  {slide.title}
                </h1>
                <h2 className="text-[24px] lg:text-[40px] font-semibold text-[#0b305b] my-5">
                  {slide.heading}
                </h2>
                <p className="text-[#164377] font-bold text-[14px] lg:text-base leading-[26px]">
                  {slide.description1}
                </p>
                <p className="text-[#164377] font-medium text-[14px] lg:text-base leading-[26px] mt-5">
                  {slide.description1}
                </p>
              </div>
              <Image
                className="w-[489px] lg:h-[425px] h-[250px] rounded-3xl object-cover"
                src={slide.image}
                alt={slide.title}
                width={489}
                height={425}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
