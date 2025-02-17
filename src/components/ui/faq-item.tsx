"use client";

import { useState } from "react";
import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group faq-card shaynakit-accordion">
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
        <a
          href="#"
          className="btn-accordion"
          onClick={(e) => {
            e.preventDefault();
            toggleAccordion();
          }}
        >
          <div className="flex flex-row justify-between">
            <h3 className="text-indigo-950 font-bold text-lg">{question}</h3>
            <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
              <Image
                src="/svgs/arrow-down.svg"
                width={20}
                height={19}
                alt="arrow-down"
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </a>
        <div
          className={`accordion-content ${
            isOpen ? "flex" : "hidden"
          } flex-col gap-y-5`}
        >
          <p className="text-base text-gray-500 leading-loose">{answer}</p>
          <a href="#" className="text-violet-700 font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
