"use client";
import imgholder from "@/public/images/destop.png";
import { FaClock, FaCalendar, CiMonitor } from "./icons/icons";
import Image from "next/image";

const ScheduleCards = () => {
  return (
    <div className="shadow-lg shadow-[#3F1C5A] perspective-1000 animate-float cursor-pointer relative bg-[#3F1C5A] flex flex-col md:flex-row min-h-[6rem] rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="absolute inset-0 schedule_card opacity-[10%]"></div>

      <div className="w-full md:w-[9rem] h-[200px] md:h-full">
        <Image
          src={imgholder}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-wrap">
        <div className="flex-1 min-w-[200px] p-4 border-b md:border-b-0 md:border-x border-[#D29AFD33]">
          <h2 className="text-sm font-semibold text-[#D49BFFFC] mb-1">
            Topic:
          </h2>
          <p className="text-sm md:text-base text-white">
            The Future of Digital Transformation
          </p>
        </div>

        <div className="flex-1 min-w-[150px] p-4 border-b md:border-b-0 md:border-x border-[#D29AFD33]">
          <div className="flex items-center gap-2 mb-1">
            <FaCalendar className="w-4 h-4 text-[#D49BFFFC]" />
            <h2 className="text-sm font-semibold text-[#D49BFFFC]">Date:</h2>
          </div>
          <p className="text-sm text-white">February 15th, 2025</p>
        </div>

        <div className="flex-1 min-w-[150px] p-4 border-b md:border-b-0 md:border-x border-[#D29AFD33]">
          <div className="flex items-center gap-2 mb-1">
            <FaClock className="w-4 h-4 text-[#D49BFFFC]" />
            <h2 className="text-sm font-semibold text-[#D49BFFFC]">Time:</h2>
          </div>
          <p className="text-sm text-white">9:00AM-10:00AM</p>
        </div>

        <div className="flex-1 min-w-[150px] p-4">
          <div className="flex items-center gap-2 mb-1">
            <CiMonitor className="w-4 h-4 text-[#D49BFFFC]" />
            <h2 className="text-sm font-semibold text-[#D49BFFFC]">
              Platform:
            </h2>
          </div>
          <p className="text-sm text-white">Microsoft Teams</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCards;
