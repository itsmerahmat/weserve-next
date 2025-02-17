import Image from "next/image";

export default function FooterSection() {
  return (
    <section className=" bg-[#080C2E] lg:-z-10 lg:-mt-[230px] lg:pt-[230px] h-fit">
      <div className="max-w-6xl mx-auto mt-[100px] px-5 py-10 lg:py-0 xl:px-0">
        <div className="grid lg:grid-cols-5 gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2">
          <div className="lg:col-span-2 flex flex-col gap-y-8">
            <Image
              src="svgs/logo.svg"
              alt="logo"
              className="w-fit h-[42px]"
              width={180}
              height={82}
            />
            <p className="text-base text-gray-400 leading-relaxed">
              We host your empire business today
              <br /> using the latest technologies.
            </p>
            <div className="flex flex-row gap-x-4">
              <div className="bg-white flex items-center p-[10px] rounded-full">
                <a href="#">
                  <Image src="/svgs/sms.svg" width={25} height={25} alt="sms" />
                </a>
              </div>
              <div className="bg-white flex items-center p-[10px] rounded-full">
                <a href="#">
                  <Image
                    src="/svgs/global.svg"
                    width={25}
                    height={25}
                    alt="global"
                  />
                </a>
              </div>
              <div className="bg-white flex items-center p-[10px] rounded-full">
                <a href="#">
                  <Image
                    src="/svgs/call.svg"
                    width={25}
                    height={25}
                    alt="call"
                  />
                </a>
              </div>
              <div className="bg-white flex items-center p-[10px] rounded-full">
                <a href="#">
                  <Image
                    src="/svgs/video-play.svg"
                    width={25}
                    height={25}
                    alt="video-play"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="gap-y-4 flex flex-col">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Powerful Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Auto-Backup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Auto-Scaling Up
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="gap-y-4 flex flex-col">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Support 24/7
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  How-to Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Blog & Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="gap-y-4 flex flex-col">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Join With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-300">
                  Our Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="py-20 text-center text-base text-gray-400">
          All Rights Reserved • Copyright Weserve by{" "}
          <a
            href="https://buildwithangga.com/"
            className="hover:text-violet-300"
          >
            BuildWithAngga
          </a>{" "}
          2024 in Bandung
        </p>
      </div>
    </section>
  );
}
