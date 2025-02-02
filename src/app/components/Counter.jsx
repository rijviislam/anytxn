"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-10  w-full px-10 lg:px-0"
      ref={ref}
    >
      <div className="montserrat-font font-semibold text-[64px] lg:text-[96px] leading-[96px] text-[#1f80f0] flex lg:flex-col md:flex-row items-center lg:justify-center justify-between gap-5 lg:max-w-[180px]  border-b-2 border-dashed border-gray-300 md:pb-5  lg:border-none w-full">
        <div>
          {inView ? (
            <>
              &gt;
              <CountUp start={0} end={20} duration={3} />
            </>
          ) : (
            "> 0"
          )}
        </div>

        <p className="text-[#151d2f] inter-font text-lg font-semibold leading-[28px]">
          Years of Experience
        </p>
      </div>
      <div className="montserrat-font font-semibold text-[64px] lg:text-[96px] leading-[96px] text-[#1f80f0] flex lg:flex-col md:flex-row items-center lg:justify-center justify-between gap-5 lg:max-w-[180px] w-full  border-b-2 border-dashed border-gray-300 md:pb-5 lg:border-none">
        <div>
          {" "}
          {inView ? <CountUp start={0} end={40} duration={4} /> : "0"}+
        </div>
        <p className="text-[#151d2f] inter-font text-lg font-semibold leading-[28px]">
          Financial Institutions
        </p>
      </div>
      <div className="montserrat-font font-semibold text-[64px] lg:text-[96px] leading-[96px] text-[#1f80f0] flex lg:flex-col md:flex-row items-center lg:justify-center justify-between gap-5 lg:max-w-[300px] w-full border-b-2 border-dashed border-gray-300 md:pb-5 lg:border-none">
        <div>
          {" "}
          {inView ? (
            <>
              &gt;
              <CountUp start={0} end={200} duration={2} />
            </>
          ) : (
            "0+"
          )}
          m
        </div>
        <p className="text-[#151d2f] inter-font text-lg font-semibold leading-[28px]">
          Customers Each
        </p>
      </div>
    </div>
  );
}
