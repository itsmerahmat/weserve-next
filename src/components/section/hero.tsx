import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-6xl md:px-8 px-4 mx-auto py-12 xl:px-0">
      <div className="flex flex-col gap-y-10 md:flex-row md:justify-between items-center">
        <div className="gap-y-10 flex flex-col md:basis-2/4 lg:basis-3/6">
          <div className="flex py-2 flex-row small-badge items-center bg-white rounded-full gap-x-2 px-3 w-fit">
            <Image src="/svgs/globe.svg" width={25} height={25} alt="globe" />
            <p className="lg:text-base text-sm font-semibold text-indigo-950">
              We host more than 120,000 websites
            </p>
          </div>
          <div>
            <h1 className="lg:text-[70px] text-[40px] text-indigo-950 font-clashDisplay font-bold leading-none mb-3">
              Grow Online <br />
              Business Faster.
            </h1>
            <p className="text-base leading-loose text-gray-500">
              We provide a variety of servers to grow your users
              <br className="lg:block hidden" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center">
            <a
              href="#"
              className="w-full text-center lg:w-fit transition-all ease-in-out duration-500 hover:bg-indigo-950 bg-violet-700 px-10 py-4 rounded-full text-white text-lg font-semibold"
            >
              Try Free Trial
            </a>
            <a href="#" className="font-semibold text-violet-700 flex gap-x-2">
              <Image
                src="/svgs/device-message.svg"
                width={25}
                height={25}
                alt="device-message"
              />
              Schedule a Demo
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <Image
            src="/assets/illustration-hero.png"
            className="h-[397px] md:basis-2/4 lg:h-[550px]"
            alt="heroImage"
            width={550}
            height={397}
          />
        </div>
      </div>
    </section>
  );
}
