import Image from "next/image";
import FaqItem from "../ui/faq-item";

export default function FaqSection() {
  const faqItems = [
    {
      question: "Why do we need to use Xpo?",
      answer:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
    },
    {
      question: "What if data doesn't get stored?",
      answer:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
    },
    {
      question: "Do we need to pay 6 months per item?",
      answer:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
    },
    {
      question: "Can we guarantee no any loss at all?",
      answer:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
    },
    {
      question: "How to migrate from other service?",
      answer:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col gap-y-7">
        <h3 className="leading-tight md:leading-lg text-[34px] lg:text-5xl text-indigo-950 text-center font-clashDisplay font-bold mb-5">
          Frequently Asked Questions
        </h3>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
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
    </section>
  );
}
