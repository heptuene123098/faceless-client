import { useAuth } from "@/contexts/AuthContext";
import { X } from "lucide-react";
import Image from "next/image";

export default function EmailConfirmationModal() {
  const { setIsModalOpen } = useAuth();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-1/2 max-sm:w-[90%] py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-2 right-2 flex items-center cursor-pointer bg-[#F3F3F3] hover:bg-gray-300 transition-colors rounded-full p-1"
          onClick={() => setIsModalOpen(false)}
        >
          <X className="w-5 h-5" />
        </span>
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            src="/svgs/envelope.svg"
            alt="Envelope Icon"
            width={193}
            height={193}
          />
          <h2 className="text-2xl font-bold">Email Confirmation</h2>
          <p className="text-gray-600">
            We’ve sent a verification link to your inbox. Tap it and you’re in.
          </p>
        </div>
      </div>
    </div>
  );
}
