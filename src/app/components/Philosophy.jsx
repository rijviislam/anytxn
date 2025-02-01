import Image from "next/image";
import Cutting from "../../assets/cutting.svg";
import PhilosophyImg from "../../assets/human-1.png";
import philosophyImg2 from "../../assets/philosophy-img-2.png";
import Share from "../../assets/share.svg";
import Simplify from "../../assets/simplify.png";
import PhilosophySlider from "./PhilosophySlider";

export default function Philosophy() {
  return (
    <div className="flex items-center justify-center flex-col p-10">
      <h1 className="font-bold text-base text-[#1f80f0] montserrat-font leading-6 text-center ">
        OUR PHILOSOPHY
      </h1>
      <p className="montserrat-font font-semibold text-[56px] leading-[62px] text-[0b305b] mt-3 text-center md:w-[550px] lg:w-full xs:w-full">
        Human-centred innovation
      </p>
      <div className="max-w-[1200px] mt-10">
        <Image
          src={PhilosophyImg}
          className="w-full hidden lg:block"
          alt="Philosophy Image"
        />
        <Image
          src={philosophyImg2}
          className="w-[417px] h-[480px] block lg:hidden"
          alt="Philosophy Image"
        />
      </div>
      <div className="lg:flex justify-center  lg:flex-wrap hidden  mt-10 gap-16  max-w-[1200px]">
        <div className="bg-[#F8FCFF] max-w-[355px] px-8 py-5 flex items-start justify-center flex-col rounded-2xl ">
          <Image className=" object-contain " src={Share} alt="Finance" />
          <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
            Full-suite solutions
          </h1>
          <p className="font-normal leading-[26px] text-base text-[#164377]">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-[#F8FCFF] w-[355px] px-8 py-5 flex items-start justify-center flex-col rounded-2xl ">
          <Image className=" object-contain " src={Simplify} alt="Finance" />
          <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
            Simplify the complex
          </h1>
          <p className="font-normal leading-[26px] text-base text-[#164377]">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div className="bg-[#F8FCFF] w-[355px] px-8 py-5 flex items-start justify-center flex-col rounded-2xl ">
          <Image className=" object-contain " src={Cutting} alt="Finance" />
          <h1 className="montserrat-font text-2xl leading-[31px] font-semibold text-[#0b305b] my-5">
            Cutting-edge tech
          </h1>
          <p className="font-normal leading-[26px] text-base text-[#164377]">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
      <div className=" overflow-x-hidden lg:hidden block">
        <PhilosophySlider />
      </div>
    </div>
  );
}
