"use client";
import Image from "next/image";
import { speakers } from "@/lib/data";

export default function Speakers() {
  return (
    <section className="bg-white mt-32 w-full min-h-screen">
      {/* Header section */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
        <p className="text-[#662D91] text-sm">START LEARNING</p>
        <h2 className="text-black font-bold text-xl md:text-2xl">
          Our Anonymous Speaker
        </h2>
        <p className="text-gray-700 text-sm md:text-md">
          Real Experts. Real Insights. No Spotlight Needed. <br />
          Because the Brightest Minds Choose to Stay Faceless.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16 mb-10 gap-8 justify-items-center">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm"
          >
            <div>
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={33}
                height={33}
              />
            </div>

            <div className="text-sm text-gray-800 space-y-2">
              <p>
                <span className="text-grey-500">Name:</span>
                <strong>{speaker.name}</strong>
              </p>
              <p>
                <span>Niche: </span>
                <span className="text-black">{speaker.niche}</span>
              </p>

              <p>
                <span className="text-gray-500">Bio:</span> {speaker.bio}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* Rating */}
              <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    alt="star"
                    src="/images/star.png"
                    width={10}
                    height={10}
                    className="text-[10px] md:text-[10px]"
                  />
                ))}
                <Image
                  alt="half-star"
                  src="/images/half-star.png"
                  width={10}
                  height={10}
                  className="text-[10px] md:text-[10px]"
                />
              </div>

              {/* Experience */}
              <div className="flex items-center bg-[#E4E4E4] rounded-full px-3 py-2 w-fit text-[10px] md:text-[10px] text-gray-800">
                {speaker.experience}
              </div>
            </div>
            <a
              href={speaker.accessContent}
              className="rounded-full w-32 h-8 p-2 mt-2 text-sm md:text-sm text-center text-white bg-[#662D91]"
            >
              Access Content
            </a>
          </div>
        ))}
      </div>
      <button className="rounded-full flex mx-auto items-center justify-center mb-40 text-[#662D91] p-2 w-40 h-10 bg-[#F0EAF4]">
        See all
      </button>
    </section>
  );
}
