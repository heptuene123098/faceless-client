"use client";
import { FaGift, IoSparklesOutline, CiStar } from "../components/icons/icons";
import { useState } from "react";
import Image from "next/image";

interface ExpoCardProps {
  title: string;
  img: string;
  speaker: string;
  price: string | number;
  style?: React.CSSProperties; // optional
}

const ExpoCards = ({ title, img, speaker, price, style }: ExpoCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedPrice = parseInt(
    String(price).replace(/[^0-9]/g, "")
  ).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div
      className="perspective-1000 animate-float cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      <div
        className={`relative w-full transition-transform duration-700 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="group relative card-gradient border border-[#D49BFFFC] gap-6 flex flex-col items-center px-4 py-6 rounded-xl max-laptop:gap-4 max-laptop:py-4 max-phoneP:px-2 max-phoneP:py-3 backface-hidden">
          <div className="absolute top-2 right-2 flex gap-2">
            <IoSparklesOutline className="w-5 h-5 text-[#D49BFFFC] animate-sparkle" />
            <CiStar className="w-5 h-5 text-[#D49BFFFC] animate-pulse-slow" />
          </div>

          <div className="z-10 w-full h-[25vh] overflow-hidden rounded-lg max-tablet:h-[20vh] max-phoneP:h-[18vh]">
            <Image
              src={img}
              alt="Course preview"
              width={400}
              height={200}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          <div className="flex flex-col items-center gap-2 flex-grow">
            <h2 className="font-semibold text-lg text-white text-center max-laptop:text-base max-tablet:text-sm">
              {title}
            </h2>

            <h3 className="gradient-text text-base font-medium max-laptop:text-sm max-phoneP:text-xs">
              with {speaker}
            </h3>
          </div>

          <div className="mt-auto flex items-center gap-2">
            <FaGift
              className={`w-5 h-5 text-[#D49BFFFC] ${
                isHovered ? "animate-bounce-slow" : ""
              }`}
            />
            <span className="text-[#D49BFFFC] text-sm font-light">
              Click to discover more!
            </span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 card-gradient border border-[#D49BFFFC] rounded-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180">
          <h3 className="gradient-text text-xl font-bold mb-4">
            What&apos;s Included
          </h3>
          <ul className="text-sm space-y-3 text-white/90 mb-6">
            <li className="flex items-center gap-2">
              <CiStar className="w-4 h-4 text-[#D49BFFFC]" />
              <span>Interactive Live Sessions</span>
            </li>
            <li className="flex items-center gap-2">
              <CiStar className="w-4 h-4 text-[#D49BFFFC]" />
              <span>Hands-on Projects</span>
            </li>
            <li className="flex items-center gap-2">
              <CiStar className="w-4 h-4 text-[#D49BFFFC]" />
              <span>1-on-1 Mentoring</span>
            </li>
            <li className="flex items-center gap-2">
              <CiStar className="w-4 h-4 text-[#D49BFFFC]" />
              <span>Certificate of Completion</span>
            </li>
          </ul>

          <div className="mt-auto">
            <button className="group bg-[#D49BFFFC] text-[#2B113C] px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,155,255,0.4)]">
              <span className="flex items-center gap-2">
                <FaGift className="w-5 h-5" />
                <span>Invest {formattedPrice}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoCards;