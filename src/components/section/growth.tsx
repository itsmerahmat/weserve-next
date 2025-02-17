import Image from "next/image";

export default function GrowthSection() {
  return (
    <section className="max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col md:flex-row gap-y-10 justify-start gap-x-10 lg:gap-x-24">
        <div className="flex items-center flex-col">
          <Image
            src="/assets/illustration-features.png"
            className="h-[360px] lg:h-[550px]"
            alt="illustration-features"
            width={500}
            height={360}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-col text-left gap-y-10 basis-2/4">
          <div>
            <h3 className="leading-tight md:leading-lg text-[34px] lg:text-5xl text-indigo-950 font-clashDisplay font-bold mb-5">
              We Have Very
              <br className="hidden lg:block" />
              Strong Ecosystem
            </h3>
            <p className=" text-base leading-lg text-gray-500">
              We provide a variety of servers to grow your users
              <br className="hidden lg:block" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
              <Image
                src="/svgs/health.svg"
                width={0}
                height={0}
                alt="growth-1"
                className="w-[47px] h-auto"
              />
              <div>
                <h3 className="font-bold text-xl">$880 Mio</h3>
                <p className="text-base text-gray-500">Company budget saved</p>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
              <Image
                src="/svgs/cpu-charge.svg"
                width={0}
                height={0}
                alt="growth-2"
                className="w-[47px] h-auto"
              />
              <div>
                <h3 className="font-bold text-xl">450,392</h3>
                <p className="text-base text-gray-500">All servers available</p>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
              <Image
                src="/svgs/cloud-add.svg"
                width={0}
                height={0}
                alt="growth-3"
                className="w-[47px] h-auto"
              />
              <div>
                <h3 className="font-bold text-xl">189 Mio</h3>
                <p className="text-base text-gray-500">
                  Websites are running good
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 lg:flex-row gap-x-5 items-center">
            <a
              href="#"
              className="w-full text-center lg:w-fit transition-all ease-in-out duration-500 hover:bg-indigo-950 bg-violet-700 px-10 py-4 rounded-full text-white text-lg font-semibold"
            >
              Explore More
            </a>
            <a href="#" className="font-semibold text-violet-700 flex gap-x-2">
              <Image
                src="/svgs/device-message.svg"
                width={0}
                height={0}
                alt="device-message"
                className="w-[25px] h-auto"
              />
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
