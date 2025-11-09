import Image from "next/image";

export default function ShareKnowledge() {
  return (
    <div className="bg-white mx-auto flex flex-col w-full min-h-screen px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-8">
        {/* Images section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Image
            alt="placeholder"
            src={"/images/placeholder.jpg"}
            width={330}
            height={390}
            className="object-cover w-full sm:w-1/2 lg:w-auto max-w-xs sm:max-w-sm"
          />
          <Image
            alt="frame"
            src={"/images/speaker-frame.png"}
            width={330}
            height={399}
            className="object-cover w-full sm:w-1/2 lg:w-auto max-w-xs sm:max-w-sm"
          />
        </div>

        {/* Text section */}
        <div className="flex-1 flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left">
          <span className="text-[#998200] text-sm sm:text-base">JOIN</span>
          <span className="text-black font-bold text-2xl sm:text-xl lg:text-3xl leading-tight">
            Become a Speaker and share your Knowledge
          </span>
          <span className="text-gray-700 text-sm sm:text-base">
            Your expertise can inspire others, even anonymously. Join our
            platform to share your insights while maintaining your privacy.
          </span>
          <button className="rounded-full w-full px-16 py-2 flex items-center justify-center mt-2 text-white bg-[#662D91] hover:bg-[#5a2680] transition-colors">
            Host Webinar
          </button>
        </div>
      </div>
    </div>
  );
}
