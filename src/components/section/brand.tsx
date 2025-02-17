import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="flex flex-col gap-y-10 md:px-8 md:gap-y-0 items-center md:flex-row gap-x-10 justify-center">
        <Image
          src="/svgs/brand-1.svg"
          width={0}
          height={0}
          alt="b1"
          className="w-[155px] h-auto"
        />
        <Image
          src="/svgs/brand-2.svg"
          width={0}
          height={0}
          alt="b2"
          className="w-[155px] h-auto"
        />
        <Image
          src="/svgs/brand-3.svg"
          width={0}
          height={0}
          alt="b3"
          className="w-[155px] h-auto"
        />
        <Image
          src="/svgs/brand-4.svg"
          width={0}
          height={0}
          alt="b4"
          className="w-[155px] h-auto"
        />
        <Image
          src="/svgs/brand-5.svg"
          width={0}
          height={0}
          alt="b5"
          className="w-[155px] h-auto"
        />
      </div>
    </section>
  );
}
