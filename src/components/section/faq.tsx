import Image from "next/image";

export default function FaqSection() {
  return (
    <section className="max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col gap-y-7">
        <h3 className="leading-tight md:leading-lg text-[34px] lg:text-5xl text-indigo-950 text-center font-clashDisplay font-bold mb-5">
          Frequently Asked Questions
        </h3>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex-col flex gap-y-8">
            <div className="group faq-card shaynakit-accordion">
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
                <a href="#" className="btn-accordion">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-indigo-950 font-bold text-lg">
                      Why do we need to use Xpo?
                    </h3>
                    <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
                      <Image
                        src="/svgs/arrow-down.svg"
                        width={20}
                        height={19}
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                </a>
                <div className="accordion-content hidden flex flex-col gap-y-5">
                  <p className="text-base text-gray-500 leading-loose">
                    Kapp is able to develop by themselve without removing the
                    parents permission and lorem dolor si amet fully run network
                    at 100% avoiding data-loss at any moments.
                  </p>
                  <a href="#" className="text-violet-700 font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="group faq-card shaynakit-accordion">
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
                <a href="#" className="btn-accordion">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-indigo-950 font-bold text-lg">
                      What if data doesn’t get stored?
                    </h3>
                    <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
                      <Image
                        src="/svgs/arrow-down.svg"
                        width={20}
                        height={19}
                        alt="arrow-down"
                      />{" "}
                    </div>
                  </div>
                </a>
                <div className="accordion-content hidden flex flex-col gap-y-5">
                  <p className="text-base text-gray-500 leading-loose">
                    Kapp is able to develop by themselve without removing the
                    parents permission and lorem dolor si amet fully run network
                    at 100% avoiding data-loss at any moments.
                  </p>
                  <a href="#" className="text-violet-700 font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="group faq-card shaynakit-accordion">
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
                <a href="#" className="btn-accordion">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-indigo-950 font-bold text-lg">
                      Do we need to pay 6 months per item?
                    </h3>
                    <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
                      <Image
                        src="/svgs/arrow-down.svg"
                        width={20}
                        height={19}
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                </a>

                <div className="accordion-content hidden flex flex-col gap-y-5">
                  <p className=" text-base text-gray-500 leading-loose">
                    Kapp is able to develop by themselve without removing the
                    parents permission and lorem dolor si amet fully run network
                    at 100% avoiding data-loss at any moments.
                  </p>
                  <a href="#" className=" text-violet-700 font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col flex gap-y-8">
            <div className="group faq-card shaynakit-accordion">
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
                <a href="#" className="btn-accordion">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-indigo-950 font-bold text-lg">
                      Can we guarantee no any loss at all?
                    </h3>
                    <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
                      <Image
                        src="/svgs/arrow-down.svg"
                        width={20}
                        height={19}
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                </a>
                <div className="accordion-content hidden flex flex-col gap-y-5">
                  <p className=" text-base text-gray-500 leading-loose">
                    Kapp is able to develop by themselve without removing the
                    parents permission and lorem dolor si amet fully run network
                    at 100% avoiding data-loss at any moments.
                  </p>
                  <a href="#" className=" text-violet-700 font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="group faq-card shaynakit-accordion">
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
                <a href="#" className="btn-accordion">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-indigo-950 font-bold text-lg">
                      How to migrate from other service?
                    </h3>
                    <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
                      <Image
                        src="/svgs/arrow-down.svg"
                        width={20}
                        height={19}
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                </a>
                <div className="accordion-content hidden flex flex-col gap-y-5">
                  <p className=" text-base text-gray-500 leading-loose">
                    Kapp is able to develop by themselve without removing the
                    parents permission and lorem dolor si amet fully run network
                    at 100% avoiding data-loss at any moments.
                  </p>
                  <a href="#" className=" text-violet-700 font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="group faq-card">
              <div className="bg-[#080C2E] rounded-2xl p-5 flex flex-col gap-y-5">
                <div className="flex flex-row justify-between items-center">
                  <a href="#" className="text-white flex gap-x-2">
                    <Image
                      src="/svgs/device-message-white.svg"
                      width={0}
                      height={0}
                      alt="device-message"
                      className="w-[25px] h-auto"
                    />
                    Send e-mail to us for other questions
                  </a>
                  <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full -rotate-90">
                    <Image
                      src="/svgs/arrow-down.svg"
                      width={20}
                      height={19}
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
