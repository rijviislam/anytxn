"use client"; // Ensure it's a Client Component

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Share from "../../assets/share.svg";

export default function PhilosophySlider() {
  return (
    <div className="w-[420px] mt-10 px-10 sm:px-0">
      <Swiper
        className="mySwiper"
        slidesPerView={1.3} // Show 1.3 slides at a time
        spaceBetween={20} // Adjust space between slides
      >
        <SwiperSlide>
          <div className="bg-[#F8FCFF] max-w-[355px] p-6 flex items-start justify-center flex-col rounded-2xl ">
            <Image className=" object-contain " src={Share} alt="Finance" />
            <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
              Full-suite solutions
            </h1>
            <p className="font-normal leading-[26px] text-base text-[#164377]">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F8FCFF] max-w-[355px] p-6 flex items-start justify-center flex-col rounded-2xl ">
            <Image className=" object-contain " src={Share} alt="Finance" />
            <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
              Full-suite solutions
            </h1>
            <p className="font-normal leading-[26px] text-base text-[#164377]">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F8FCFF] max-w-[355px] p-6 flex items-start justify-center flex-col rounded-2xl ">
            <Image className=" object-contain " src={Share} alt="Finance" />
            <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
              Full-suite solutions
            </h1>
            <p className="font-normal leading-[26px] text-base text-[#164377]">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F8FCFF] max-w-[355px] p-6 flex items-start justify-center flex-col rounded-2xl ">
            <Image className=" object-contain " src={Share} alt="Finance" />
            <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
              Full-suite solutions
            </h1>
            <p className="font-normal leading-[26px] text-base text-[#164377]">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
