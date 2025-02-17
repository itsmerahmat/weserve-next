import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="max-w-6xl mx-auto ">
      <div className="promotion mx-4 md:mx-8 xl:mx-0 rounded-3xl bg-violet-700 mt-20 md:relative z-20  py-12 md:px-8 px-4 xl:px-10">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 items-center">
          <div className="flex flex-col gap-y-10">
            <div className="flex py-2 flex-row small-badge items-center bg-white rounded-full gap-x-2 px-3 w-fit">
              <Image src="/svgs/globe.svg" width={25} height={25} alt="globe" />
              <p className="lg:text-base text-sm font-semibold text-indigo-950">
                We host more than 120,000 websites
              </p>
            </div>
            <div>
              <h3 className="leading-tight md:leading-lg text-[34px] lg:text-5xl text-white font-clashDisplay font-bold mb-5">
                Start Growing Today
              </h3>
              <p className="text-base leading-loose text-white">
                We provide a variety of servers to grow your users
                <br className="md:block hidden" />
                acquisition much user-friendly and boosting up sales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-5 items-center gap-y-5">
              <a
                href="#"
                className="w-full sm:w-fit text-center transition-all ease-in-out duration-500 hover:text-white hover:bg-indigo-950 bg-[#FFD15A] px-10 py-4 rounded-full text-indigo-950 text-lg font-semibold"
              >
                Get Started
              </a>
              <a href="#" className="font-semibold text-white flex gap-x-2">
                <Image
                  src="/svgs/device-message-white.svg"
                  width={25}
                  height={25}
                  alt="device-message"
                />
                Schedule a Demo
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-5">
            <div className="bg-white rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
              <Image
                src="/svgs/scroll.svg"
                width={47}
                height={47}
                alt="scroll"
              />
              <h3 className="text-indigo-950 font-bold text-lg">Web Crawl</h3>
            </div>
            <div className="bg-white rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
              <Image
                src="/svgs/cpu-charge.svg"
                width={47}
                height={47}
                alt="growth-2"
              />
              <h3 className="text-indigo-950 font-bold text-lg">Fast Report</h3>
            </div>

            <div className="group">
              <div className="group-hover:bg-[#080C2E] transition ease-in-out duration-500 group-hover:py-[28px] group-hover:cursor-pointer transition bg-white relative rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
                <div className="group-hover:flex hidden absolute right-3 top-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="126"
                    viewBox="0 0 92 126"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_11_2611)">
                      <ellipse
                        cx="45.9017"
                        cy="62.9834"
                        rx="8.84722"
                        ry="48.5082"
                        transform="rotate(30 45.9017 62.9834)"
                        fill="#424560"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_11_2611"
                        x="0.459412"
                        y="0.738525"
                        width="90.8846"
                        height="124.49"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="10"
                          result="effect1_foregroundBlur_11_2611"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="z-10 flex flex-col gap-y-5 items-center">
                  <Image
                    src="/svgs/security-user-white.svg"
                    width={47}
                    height={47}
                    alt="security-user-white"
                    className="group-hover:block hidden transition-all ease-in-out duration-500"
                  />
                  <Image
                    src="/svgs/security-user.svg"
                    width={47}
                    height={47}
                    alt="security-user"
                    className="group-hover:hidden"
                  />
                  <div className="text-center">
                    <h3 className="text-indigo-950 group-hover:text-white font-bold text-lg transition-all ease-in-out duration-500">
                      Anti-DDoS
                    </h3>
                    <a
                      href="#"
                      className="hidden group-hover:block text-base text-gray-500"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
              <Image
                src="/svgs/status-up.svg"
                width={47}
                height={47}
                alt="stats-up"
              />

              <h3 className="text-indigo-950 font-bold text-lg">Auto-Scale</h3>
            </div>
            <div className="bg-white rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
              <Image
                src="/svgs/candle.svg"
                width={47}
                height={47}
                alt="candle"
              />

              <h3 className="text-indigo-950 font-bold text-lg">AI Perform</h3>
            </div>
            <div className="bg-white rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center">
              <Image src="/svgs/crown.svg" width={47} height={47} alt="crown" />

              <h3 className="text-indigo-950 font-bold text-lg">Top Plugins</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
