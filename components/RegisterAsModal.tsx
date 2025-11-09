"use client";

import { cn } from "@/lib/util";
import { X } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface RegisterAsOption {
  label: string;
  value: "attendee" | "speaker";
  desc: string;
}

const registerAsOptions: RegisterAsOption[] = [
  {
    label: "Join as a Speaker",
    value: "speaker",
    desc: "Host webinars, sell your knowledge, and connect with your audienceon your terms.",
  },
  {
    label: "Join as an Attendee",
    value: "attendee",
    desc: "Access live webinars, discover expert insights, and collect exclusive content all while staying anonymous.",
  },
];

export default function RegisterAsModal() {
  const { registeringAs, setRegisteringAs, setIsModalOpen } = useAuth();
  const router = useRouter();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100]"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg w-full md:w-[70%] pt-24 md:py-16 overflow-y-auto max-sm:h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-4 right-4 flex items-center cursor-pointer bg-[#F3F3F3] hover:bg-gray-300 transition-colors rounded-full p-1"
          onClick={() => setIsModalOpen(false)}
        >
          <X className="w-5 h-5" />
        </span>
        <div className="flex flex-col items-center space-y-4 max-sm:py-5 max-sm:px-5">
          <h2 className="text-2xl font-bold text-center">
            Register for Faceless Con 2025
          </h2>
          <p className="text-gray-600 text-center max-w-lg">
            Join speakers and attendees from across industries for an
            unforgettable lineup of workshops, insights, and digital connection.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex max-lg:flex-col space-x-5">
              {registerAsOptions.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "flex flex-col items-start space-x-4 my-4 px-4 py-10 max-sm:py-5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors md:w-sm",
                    {
                      "bg-gray-50": registeringAs !== option.value,
                      "border-2 border-[#662D91]":
                        registeringAs === option.value,
                    }
                  )}
                  onClick={() => setRegisteringAs(option.value)}
                >
                  <div className="flex-shrink-0">
                    <input
                      type="radio"
                      name="registerAs"
                      id={option.value}
                      value={option.value}
                      checked={registeringAs === option.value}
                      onChange={() => setRegisteringAs(option.value)}
                      className="h-5 w-5 focus:ring-[#662D91] border-gray-300 rounded accent-[#662D91]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={option.value}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {option.label}
                    </label>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="primary"
              className="mt-5 mx-auto px-10"
              onClick={() => {
                router.push("/sign-up");
                setIsModalOpen(false);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
