import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section className="mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col text-center">
          <h3 className="text-[34px] lg:text-5xl text-indigo-950 font-clashDisplay font-bold mb-5">
            Our Showcase
          </h3>
          <p className="text-base leading-lg text-gray-500">
            They built amazing website to help more people around the world
            <br className="hidden md:block" />
            by using our recommendation services and products
          </p>
        </div>
        <div className="flex flex-wrap gap-y-8 lg:flex-row justify-center gap-x-7 items-center">
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className="transition-all ease-in-out duration-500 shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <Image
              src="/assets/showcase1.png"
              alt="showcase1"
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
              width={320}
              height={220}
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <Image
              src="/assets/showcase2.png"
              alt="showcase2"
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
              width={320}
              height={220}
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <Image
              src="/assets/showcase3.png"
              alt="showcase3"
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
              width={320}
              height={220}
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <Image
              src="/assets/showcase4.png"
              alt="showcase4"
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
              width={320}
              height={220}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
