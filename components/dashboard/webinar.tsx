"use client";
import Image from "next/image";

export default function Webinar() {
  return (
    <div className="bg-[#FBFBFB] flex justify-center px-4 sm:px-8 lg:px-16 items-center max-w-[110rem] min-h-screen">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            alt="Webinar Photo"
            src="/images/webinar.png"
            width={628}
            height={374}
            className="rounded-xl w-full h-auto max-w-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#333] leading-snug">
            End-to-End Webinar Delivery — No Identity Required.
          </div>

          <p className="text-gray-700 text-md md:text-md leading-relaxed">
            Experience uninterrupted, high-definition webinar sessions without compromising your identity. Whether you&apos;re hosting or attending, Faceless delivers secure, low-latency streaming optimized for all devices. Our platform ensures that every session runs smoothly while keeping your face, name, and personal data hidden until you choose otherwise. Perfect for professionals, educators, and thought leaders who value privacy as much as performance.
          </p>

          {/* Host & Attendee Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Host */}
            <div className="bg-[#F1F1F1] p-4 sm:p-6 shadow-md rounded-lg w-full sm:w-1/2">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#662D91] mb-2">
                For Hosts
              </h4>
              <p className="text-gray-600 text-md md:text-md leading-snug">
                Host webinars confidently while maintaining complete anonymity and control over your content.
              </p>
            </div>

            {/* Attendee */}
            <div className="bg-[#F1F1F1] p-4 sm:p-6 shadow-md rounded-lg w-full sm:w-1/2">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#662D91] mb-2">
                For Attendees
              </h4>
              <p className="text-gray-600 text-md md:text-md leading-snug">
                Open sessions freely, gaining insights without revealing your identity or personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
