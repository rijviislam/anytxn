// import WeavLine3 from "../../assets/WaveLinesDesktop2.svg";
// import WeavLine2 from "../../assets/WaveLinesDesktop3.svg";
// import WeavLine1 from "../../assets/WaveLinesDesktop4.svg";
import Image from "next/image";
import Bannerimg from "../../assets/banner-image.jpg";

export default function Banner() {
  return (
    <div className=" w-full flex justify-between items-center relative border-2 border-red-500 overflow-hidden">
      {/* <Image
        className="absolute top-0 -left-[200px] w-full object-cover "
        src={WeavLine1}
        alt="weav line"
      /> */}
      {/* <Image
        className="absolute top-0 left-0 object-cover "
        src={WeavLine2}
        alt="weav line"
      />
      <Image
        className="absolute -top-[690px] left-0  object-cover opacity-100"
        src={WeavLine3}
        alt="weav line"
      /> */}
      <div className="banner-container border-2 border-black w-full relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-white z-50"
          style={{
            clipPath: "polygon(100% 70%, 100% -1250%, 10% 1250%, 0 80%)",
          }}
        ></div>
      </div>

      <Image
        className=""
        src={Bannerimg}
        alt="Banner"
        style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
      />
    </div>
  );
}
