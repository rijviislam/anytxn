"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/assets/logo-a.svg";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [passedBanner, setPassedBanner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const banner = document.getElementById("banner");
      const bannerHeight = banner ? banner.offsetHeight : 0;

      if (currentScrollPos > bannerHeight) {
        setPassedBanner(true);
      } else {
        setPassedBanner(false);
      }

      if (prevScrollPos > currentScrollPos || !passedBanner) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, passedBanner]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed h-[100px] top-0 left-0 w-full bg-transparent text-white p-4 lg:p-0 transition-transform duration-300 hidden lg:block  z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center z-50 bg-transparent  top-0 absolute w-full h-[100px] ">
        <div className=" flex items-center  justify-between  w-[1200px] lg:px-2 lg:py-7 ">
          <Image src={Logo} alt="Logo" width={150} height={50} />
          <div>
            <ul className="flex gap-5 inter-font font-normal text-[#FFF]  text-base left-[26px]  items-center">
              <div className="relative group">
                <Link href="#" className="flex items-center">
                  Solutions
                  <svg
                    className="ml-2 mt-1 fill-white"
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path>
                  </svg>
                </Link>

                {/* DROPDOWN  */}
                <ul className="absolute left-0 mt-2 w-[230px] bg-white text-black shadow-sm rounded-lg hidden  group-hover:block  z-50">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-3 hover:bg-gray-200 border-b border-gray-200"
                    >
                      AnyCaaS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-3 hover:bg-gray-200 border-b border-gray-200"
                    >
                      AnyBaaS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-3 w-full hover:bg-gray-200"
                    >
                      AnyPaaS
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                href="#"
                className=" hover:border-b border-white py-3 px-4 "
              >
                Services
              </Link>
              <Link
                href="#"
                className=" hover:border-b border-white py-3 px-4  "
              >
                About Us
              </Link>
              {/* <div className="relative border-2 border-black">
                <button
                  className="flex items-center gap-2 border border-white py-2 px-3 rounded-full uppercase group"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <svg
                    className={`fill-white transition-transform duration-300 group-hover:fill-[#1f80f0] ${
                      isOpen ? "rotate-180 fill-[#1f80f0]" : ""
                    }`}
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  En
                  <svg
                    className="rotate-0 transition-transform duration-200"
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
         
                <ul
                  className={`absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    EN (English)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    FR (French)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    DE (German)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    ES (Spanish)
                  </li>
                </ul>
              </div> */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-2 border border-white py-2 px-3 rounded-full uppercase group"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <svg
                    className={`fill-white transition-transform duration-300 group-hover:fill-[#1f80f0] ${
                      isOpen ? "rotate-180 fill-[#1f80f0]" : ""
                    }`}
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  En
                  <svg
                    className={`rotate-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={`absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    EN (English)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    FR (French)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    DE (German)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    ES (Spanish)
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          <button className="group inter-font font-semibold text-lg text-white border border-white py-3 px-8 flex items-center gap-2 hover:bg-white hover:text-[#1f80f0]">
            Contact Us
            <svg
              className="fill-current transition-transform duration-200 group-hover:translate-x-1"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
