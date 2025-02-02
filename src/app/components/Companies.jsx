import Image from "next/image";
import C1 from "../../../public/assets/company-1.webp";
import C10 from "../../../public/assets/company-10.webp";
import C11 from "../../../public/assets/company-11.webp";
import C12 from "../../../public/assets/company-12.webp";
import C13 from "../../../public/assets/company-13.webp";
import C14 from "../../../public/assets/company-14.webp";
import C15 from "../../../public/assets/company-15.webp";
import C2 from "../../../public/assets/company-2.webp";
import C3 from "../../../public/assets/company-3.webp";
import C4 from "../../../public/assets/company-4.webp";
import C5 from "../../../public/assets/company-5.webp";
import C6 from "../../../public/assets/company-6.webp";
import C7 from "../../../public/assets/company-7.webp";
import C9 from "../../../public/assets/company-9.webp";
import C8 from "../../../public/assets/company8.webp";

export default function Companies() {
  return (
    <div className="w-full mx-auto lg:flex md::flex items-center justify-center mt-[100px] sm:hidden  pb-10">
      <div className="lg:max-w-[1200px] w-full grid md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center  md:px-10 ">
        <Image className=" object-contain " src={C1} alt="Finance" />
        <Image className=" object-contain " src={C2} alt="Finance" />
        <Image className=" object-contain " src={C3} alt="Finance" />
        <Image className=" object-contain " src={C4} alt="Finance" />
        <Image className=" object-contain " src={C5} alt="Finance" />
        <Image className=" object-contain " src={C6} alt="Finance" />
        <Image className=" object-contain " src={C7} alt="Finance" />
        <Image className=" object-contain " src={C8} alt="Finance" />
        <Image className=" object-contain " src={C9} alt="Finance" />
        <Image className=" object-contain " src={C10} alt="Finance" />
        <Image className=" object-contain " src={C11} alt="Finance" />
        <Image className=" object-contain " src={C12} alt="Finance" />
        <Image className=" object-contain " src={C13} alt="Finance" />
        <Image className=" object-contain " src={C14} alt="Finance" />
        <Image className=" object-contain " src={C15} alt="Finance" />
      </div>
    </div>
  );
}
