import Image from "next/image";

export default function BenefitSection() {
  return (
    <section className="benefits max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <h3 className="text-[34px] md:text-5xl text-indigo-950 font-clashDisplay text-center font-bold mb-10">
        Your Best Choice
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-8">
        <div className="item-card bg-white rounded-2xl p-7 gap-y-7 flex flex-col">
          <Image
            src="/svgs/hierarchy-square.svg"
            width={47}
            height={47}
            alt="benefit-1"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Extra Layers</h3>
            <p className="text-base leading-lg text-gray-500">
              Making your project more secure avoiding DDoS
            </p>
          </div>
          <a href="#" className="text-violet-700 font-semibold">
            Learn More
          </a>
        </div>
        <div className="item-card bg-white rounded-2xl p-7 gap-y-7 flex flex-col">
          <Image
            src="/svgs/3dcube.svg"
            width={47}
            height={47}
            alt="benefit-2"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Customizable</h3>
            <p className="text-base leading-lg text-gray-500">
              Only install what your business needs to grow
            </p>
          </div>
          <a href="#" className="text-violet-700 font-semibold">
            Learn More
          </a>
        </div>
        <div className="item-card bg-[#080C2E] relative rounded-2xl p-7 gap-y-7 flex flex-col">
          <div className="absolute right-10 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="221"
              viewBox="0 0 178 221"
              fill="none"
            >
              <g filter="url(#filter0_f_1_371)">
                <ellipse
                  cx="97.65"
                  cy="102.527"
                  rx="32.0478"
                  ry="76.7916"
                  transform="rotate(30 97.65 102.527)"
                  fill="#424560"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1_371"
                  x="0.27005"
                  y="-15.8951"
                  width="194.76"
                  height="236.845"
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
                    stdDeviation="25"
                    result="effect1_foregroundBlur_1_371"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="z-10 gap-y-7 flex flex-col">
            <Image
              src="/svgs/status-up-white.svg"
              width={47}
              height={47}
              alt="benefit-3"
            />
            <div>
              <h3 className="font-semibold text-white text-xl mb-2">
                AI Automation
              </h3>
              <p className="text-base leading-lg text-gray-500">
                Decide the business flow based on latest reports
              </p>
            </div>
            <a href="#" className="text-white font-semibold">
              Learn More
            </a>
          </div>
        </div>
        <div className="item-card bg-white rounded-2xl p-7 gap-y-7 flex flex-col">
          <Image
            src="/svgs/driver-refresh.svg"
            width={47}
            height={47}
            alt="benefit-4"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Auto-Scaling</h3>
            <p className="text-base leading-lg text-gray-500">
              Have a long weekend without worrying any loss
            </p>
          </div>
          <a href="#" className="text-violet-700 font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
