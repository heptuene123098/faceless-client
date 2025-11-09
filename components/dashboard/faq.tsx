"use client";
import { faqs } from "lib/data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-contain bg-[#F0EAF4] bg-center relative px-16 py-20"
      style={{ backgroundImage: `url('/images/Vector.png')` }}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
        <h2 className="text-[#241033] font-bold text-2xl md:text-3xl">FAQ</h2>
        <p className="text-gray-700 text-sm md:text-md">
          Unfiltered reviews from the people who use it — speakers and learners
          alike.
        </p>
      </div>

      {/* Background container with image and content */}
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 w-full shadow-md rounded-md overflow-hidden"
          >
            <button
              className={`w-full text-left py-5 px-6 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#662D91] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="uppercase text-sm md:text-sm font-semibold">
                  {faq.question}
                </span>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronDown : faChevronUp}
                  className="text-sm"
                />
              </div>
            </button>

            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === index && (
                <div className="bg-white px-6 py-4 text-sm text-black leading-relaxed">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc ml-5 space-y-2">
                      {faq.answer.map((ans, i) => (
                        <li key={i}>{ans}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          <button className="rounded-full w-32 h-8 p-3 flex items-center justify-center mt-2 text-white bg-[#662D91]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
