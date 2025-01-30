"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="flex items-center justify-center gap-20 mt-10" ref={ref}>
      <div className="montserrat-font font-semibold text-[96px] leading-[96px] text-[#1f80f0] flex flex-col items-center gap-5 min-w-[180px]">
        <div>{inView ? <CountUp start={0} end={20} duration={3} /> : "0"}</div>
        <p className="text-[#151d2f] inter-font text-lg font-normal leading-[28px]">
          Years of Experience
        </p>
      </div>
      <div className="montserrat-font font-semibold text-[96px] leading-[96px] text-[#1f80f0] flex flex-col items-center gap-5 min-w-[180px]">
        <div>
          {" "}
          {inView ? <CountUp start={0} end={40} duration={4} /> : "0"}+
        </div>
        <p className="text-[#151d2f] inter-font text-lg font-normal leading-[28px]">
          Financial Institutions
        </p>
      </div>
      <div className="montserrat-font font-semibold text-[96px] leading-[96px] text-[#1f80f0] flex flex-col items-center gap-5 min-w-[180px]">
        <div>
          {" "}
          {inView ? <CountUp start={0} end={200} duration={2} /> : "0+"}m
        </div>
        <p className="text-[#151d2f] inter-font text-lg font-normal leading-[28px]">
          Customers Each
        </p>
      </div>
    </div>
  );
}
