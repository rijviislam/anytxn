import Image from "next/image";
import C1 from "../../assets/company-1.webp";
import C10 from "../../assets/company-10.webp";
import C11 from "../../assets/company-11.webp";
import C12 from "../../assets/company-12.webp";
import C13 from "../../assets/company-13.webp";
import C14 from "../../assets/company-14.webp";
import C15 from "../../assets/company-15.webp";
import C2 from "../../assets/company-2.webp";
import C3 from "../../assets/company-3.webp";
import C4 from "../../assets/company-4.webp";
import C5 from "../../assets/company-5.webp";
import C6 from "../../assets/company-6.webp";
import C7 from "../../assets/company-7.webp";
import C9 from "../../assets/company-9.webp";
import C8 from "../../assets/company8.webp";

export default function Companies() {
  return (
    <div className="w-full mx-auto flex items-center justify-center mt-[100px]">
      <div className="max-w-[1200px] grid grid-cols-5 gap-10 place-items-center">
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
