"use client";

import { useState } from "react";
import Image from "next/image";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar max-w-6xl mx-auto py-10 px-5 md:px-8 xl:px-0">
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/svgs/logo-light.svg"
            className="w-[180px] h-auto object-cover"
            alt="logo"
            width={0}
            height={0}
          />
          <ul className=" flex-row gap-x-8 lg:flex hidden">
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-x-4">
            <div className="bg-white flex items-center p-[10px] rounded-full">
              <a href="#">
                <Image
                  src="/svgs/bag-2.svg"
                  width={0}
                  height={0}
                  alt="bag"
                  className="w-[25px] h-auto"
                />
              </a>
            </div>
            <a
              href="#"
              className="md:block hidden py-3 bg-indigo-950 text-white text-base px-5 rounded-full hover:bg-violet-700 transition duration-500"
            >
              Sign In
            </a>
            <div
              id="btn-dropdown"
              className="lg:hidden bg-white flex items-center p-[10px] rounded-full"
              onClick={toggleDropdown}
            >
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7H21"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 17H21"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="dropdown-menu"
        className={`megamenu absolute top-28 justify-center flex flex-col ${
          isOpen ? "flex" : "hidden"
        } px-5 lg:hidden md:px-10 w-full`}
      >
        <div className="flex flex-col bg-white p-5 md:p-8 rounded-2xl gap-y-5">
          <ul className="flex flex-col gap-y-5">
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="md:hidden py-3 bg-indigo-950 text-white text-base px-5 text-center w-full rounded-full"
          >
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}
