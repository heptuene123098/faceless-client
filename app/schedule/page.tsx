"use client";
import ScheduleCards from "@/components/ScheduleCards";
import { FaClock } from "react-icons/fa";

const SchedulePage = () => {
  return (
    <div className="relative bg-gradient-to-tr min-h-screen from-black from-50% to-[#662D91]">
      <div className="absolute bg-[url('/images/bg-img.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay inset-0 opacity-20"></div>

      <main className="container mx-auto px-4 py-16 space-y-8">
        <h2
          className="text-3xl tablet:text-5xl mt-5 laptop:mt-9 font-bold 
               bg-gradient-to-r from-purple-400 to-blue-400 
               bg-clip-text text-transparent text-center"
        >
          Schedules
        </h2>

        <section className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <ScheduleCards />
            <ScheduleCards />
            <ScheduleCards />
            <ScheduleCards />
          </div>

          <div className="relative py-8">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D49BFFFC] to-transparent"></div>
            <div className="flex items-center justify-center gap-4 bg-[#3F1C5A] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaClock className="w-6 h-6 text-[#D49BFFFC]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#D49BFFFC]">
                Lunch Break
              </h2>
              <span className="text-lg md:text-xl font-semibold">
                12:30 PM - 1:30 PM
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D49BFFFC] to-transparent"></div>
          </div>

          <div className="space-y-4">
            <ScheduleCards />
            <ScheduleCards />
            <ScheduleCards />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SchedulePage;
