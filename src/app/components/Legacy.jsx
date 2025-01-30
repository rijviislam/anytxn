export default function Legacy() {
  return (
    <div className="">
      <div className="relative h-[500px] legacy overflow-hidden w-full ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 0%)" }}
        ></div>

        <div className="absolute top-[300px] left-[400px]  transform -translate-x-1/2 -translate-y-1/2 text-white text-start">
          <h1 className="text-[56px] font-semibold leading-[62px] text-[#FFF] montserrat-font">
            Legacy no longer
          </h1>
          <p className="text-lg my-4 inter-font font-normal text-[#FFF] leading-[28px]">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="bg-[#FE8B53] px-10 py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition">
            Contact Us ›
          </button>
        </div>
      </div>
    </div>
  );
}
