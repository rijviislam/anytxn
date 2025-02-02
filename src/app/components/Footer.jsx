import Image from "next/image";
import Link from "next/link";
import Linkedin from "../../../public/assets/linkedin.webp";
import Logo from "../../../public/assets/logo-a.svg";
import Msg from "../../../public/assets/msg.webp";
import Phn from "../../../public/assets/phn.webp";

export default function Footer() {
  return (
    <div className="flex flex-col ">
      <div className="bg-[#002044] flex w-full items-center justify-center py-16 border-b border-[#174377] xl:px-0 lg:px-10">
        <div className="w-[1200px] flex sm:gap-10 justify-center items-center lg:justify-between ">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="lg:block hidden">
            <Link
              href="#"
              className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 border-r border-[#1f80f0]"
            >
              Our Solutions
            </Link>
            <Link
              href="#"
              className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 "
            >
              AnyCaaS
            </Link>
            <Link
              href="#"
              className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 "
            >
              AnyBaaS
            </Link>
            <Link
              href="#"
              className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 "
            >
              AnyPaaS
            </Link>
          </div>
          <div className="lg:hidden flex items-center gap-5">
            <Link href="#">
              <Image
                className=" object-contain w-6 h-6 "
                src={Msg}
                alt="Message"
              />
            </Link>
            <Link href="#">
              <Image
                className=" object-contain w-6 h-6 "
                src={Phn}
                alt="Message"
              />
            </Link>
            <Link href="#">
              <Image
                className=" object-contain w-6 h-6 "
                src={Linkedin}
                alt="Message"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#00162D] py-7 flex  items-center justify-center xl:px-0 lg:px-10">
        <div className="w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-5 lg:justify-between ">
          <p className="text-[#1f80f0] text-[12px] inter-font font-semibold leading-[19px]">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <Link
            href="#"
            className="inter-font font-semibold text-[12px] leading-[19px] text-[#1f80f0]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
