"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#F0EAF4] w-full px-4 sm:px-8 lg:px-16 py-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10">
        <p className="text-[#662D91] text-xs sm:text-sm mt-4 sm:mt-8">TESTIMONIALS</p>
        <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
          What They&apos;re Saying About Faceless
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Unfiltered reviews from the people who use it <br className="hidden sm:block" /> speakers and
          learners alike.
        </p>
      </div>

      {/* Image + Box container */}
      <div className="relative w-full h-[28rem] sm:h-[35rem] lg:h-[50rem] mx-auto mb-20 rounded-2xl overflow-hidden">
        <Image
          src="/images/testimonial.jpg"
          alt="face image"
          fill
          className="object-contain lg:object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-2xl" />

        <div
          className="
            absolute z-20
            bottom-4 right-4
            w-64
            sm:top-1/2 sm:right-10 sm:w-[28rem]
            lg:right-20 lg:w-[40rem]
            transform sm:-translate-y-1/2
          "
        >
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg flex flex-col justify-between w-[10rem] h-[10rem] phoneL:w-[15rem] phoneL:h-[10rem] phoneL:ml-5 mb-32 md:w-[20rem] md:h-[19rem] ml-20 md:ml-32 lg:w-[30rem] lg:h-[15rem] lg:ml-48 ">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1"
              >
                <span className="text-black text-[7px] phoneL:text-[8px] md:text-sm lg:text-sm leading-snug">
                  {testimonials[currentIndex].quote}
                </span>
                <span className="text-black text-[9px] phoneL:text-[10px] md:text-lg lg:text-sm font-semibold">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-[#9D9D9D] text-[7px] phoneL:text-[10px] md:text-sm lg:text-sm italic">
                  {testimonials[currentIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Nav + dots */}
            <div className="flex justify-between items-center mt-1 md:mt-2">
              {/* Arrows */}
              <div className="flex gap-2 sm:gap-3">
                <button onClick={goPrev} aria-label="Previous testimonial" className="p-0">
                  <Image
                    alt="left button"
                    src="/images/left-button.png"
                    width={28}
                    height={28}
                    className="cursor-pointer w-[10px] h-[10px] phoneL:w-[15px] phoneL:h-[15px] md:w-[20px] md:h-[20px] hover:opacity-80"
                  />
                </button>
                <button onClick={goNext} aria-label="Next testimonial" className="p-0">
                  <Image
                    alt="right button"
                    src="/images/right-button.png"
                    width={28}
                    height={28}
                    className="cursor-pointer w-[10px] h-[10px] phoneL:w-[15px] phoneL:h-[15px] md:w-[20px] md:h-[20px]  hover:opacity-80"
                  />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-1 sm:gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-[#662D91]" : "bg-[#662D91]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
