"use client";
import Image from "next/image";

export default function FacelessCon() {
  return (
    <div className="bg-[#FAF4FF] mx-auto px-4 sm:px-8 lg:px-16 phoneL:mt-20 tablet:mt-10 py-16 sm:py-20 w-full min-h-screen">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] leading-snug">
            Your personal webinar hub.
          </h2>

          <p className="text-gray-700 text-md md:text-md leading-relaxed">
            Everything you need to attend, explore and engage in one smart dashboard.
          </p>

          {/* Cards for Host and Attendees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-row items-center gap-3">
              <Image
                src={"/images/track-time.png"}
                alt="Faceless icon"
                width={34}
                height={34}
              />
              <span className="text-md md:text-md">Track what&apos;s live right now</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image
                src={"/images/track-time.png"}
                alt="Faceless icon"
                width={34}
                height={34}
              />
              <span className="text-md md:text-md">See what&apos;s coming next</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image
                src={"/images/track-cloud.png"}
                alt="Faceless icon"
                width={34}
                height={34}
              />
              <span className="text-md md:text-md">Access completed Webinars</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image
                src={"/images/track-search.png"}
                alt="Faceless icon"
                width={34}
                height={34}
              />
              <span className="text-md md:text-md">Discover more Webinars</span>
            </div>
          </div>

          <div>
            <button className="bg-[#662D91] text-white rounded-full px-4 py-3 sm:px-4 sm:py-4 text-sm sm:text-base">
              Start Exploring
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            alt="Faceless Screenshot"
            src="/images/faceless-screenshot.png"
            width={550}
            height={300}
            className="rounded-xl w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
