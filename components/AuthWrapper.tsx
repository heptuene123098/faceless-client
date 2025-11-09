"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { registeringAs } = useAuth();
  return (
    <main className="flex h-screen bg-gray-100 space-x-10">
      <div className="flex-1 items-center justify-end p-4 hidden xl:flex">
        <div className="relative w-full max-w-lg h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/auth-bg.jpg"
            alt="Auth Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#532174]/40 to-transparent z-10"></div>
          <div className="flex items-center space-x-2 absolute top-3 left-3 text-white z-20">
            <Image
              src="/svgs/faceless-icon-white.svg"
              alt="Faceless logo"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-bold">FacelessCon</h2>
          </div>
          <p className="absolute bottom-4 right-7 text-white italic space-x-1 z-20">
            <span>🎉 Join as {registeringAs === "attendee" ? "an" : "a"}</span>
            <span className="capitalize">
              {registeringAs.charAt(0).toUpperCase() + registeringAs.slice(1)}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-start p-4 max-lg:justify-center">
        <div className="w-full xl:h-full flex justify-center items-center max-w-lg p-10 bg-[#FAFAFA] rounded-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}
