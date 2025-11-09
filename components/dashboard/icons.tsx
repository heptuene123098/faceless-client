import Image from "next/image";

export default function Icons() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-8 lg:px-16 mt-20">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Background-style div */}
        <div className="flex-1 rounded-xl bg-[url('/images/background-3.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden min-h-[18rem] lg:min-h-[25rem]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />

          {/* Text */}
          <div className="relative z-20 h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center mt-10 lg:mt-0">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Your Privacy, Your <br /> Power.
            </h2>
            <p className="text-white mt-2 text-sm md:text-md">
              Host and attend live digital experiences without ever revealing
              your face or identity. Total freedom, full control, zero pressure.
            </p>
          </div>
        </div>

        {/* Adjacent image */}
        <div className="flex-none hidden lg:flex items-center justify-center">
          <Image
            src="/images/frame.png"
            alt="Frame"
            width={300}
            height={350}
            className=""
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 py-10">
        {/* Left large card */}
        <div className="flex-1 rounded-xl bg-[url('/images/background-1.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden min-h-[18rem] lg:min-h-[25rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />
          <div className="relative z-20 h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mt-10 lg:mt-0">
              Host, Earn, Stay <br /> Hidden.
            </h2>
            <p className="text-white mt-2 text-sm md:text-md">
              Host and attend live digital experiences without ever revealing
              your face or identity. Total freedom, full control, zero pressure.
            </p>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Top background card */}
          <div className="rounded-xl bg-[url('/images/background-2.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden min-h-[10rem] sm:min-h-[12rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />
            <div className="relative z-20 h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mt-10 lg:mt-0">
                For Everyone.
              </h2>
              <p className="text-white mt-2 text-sm md:text-md">
                Your data is encrypted, your identity stays yours.
              </p>
            </div>
          </div>

          {/* Bottom light card */}
          <div className="rounded-xl bg-[#F4F4F4] relative overflow-hidden min-h-[10rem] sm:min-h-[12rem]">
            <div className="relative z-20 h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
              <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold mt-10 lg:mt-0">
                Host. Earn. Stay Hidden.
              </h2>
              <p className="text-black mt-2 text-sm sm:text-base">
                Host and attend live digital experiences without ever revealing
                your face or identity. Total freedom, full control, zero
                pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
