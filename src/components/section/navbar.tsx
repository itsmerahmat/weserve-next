import Image from "next/image";

export default function NavbarSection() {
  return (
    <>
      <nav className="navbar max-w-6xl mx-auto py-10 px-5 md:px-8 xl:px-0">
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/assets/logo-light.svg"
            className="h-[42px]"
            alt="logo"
            width={180}
            height={82}
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
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7.67001V6.70001C8 4.45001 9.81 2.24001 12.06 2.03001C14.74 1.77001 17 3.88001 17 6.51001V7.89001"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.50001 22H15.5C19.52 22 20.24 20.39 20.45 18.43L21.2 12.43C21.47 9.99 20.77 8 16.5 8H8.50001C4.23001 8 3.53001 9.99 3.80001 12.43L4.55001 18.43C4.76001 20.39 5.48001 22 9.50001 22Z"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9955 12H16.0045"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99451 12H9.00349"
                    stroke="#080C2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="19.5" cy="7" r="4" fill="#FF3232" />
                </svg>
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
        className="megamenu absolute top-28 justify-center flex flex-col hidden px-5 lg:hidden md:px-10 w-full"
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
