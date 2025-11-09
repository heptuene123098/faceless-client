"use client";

import { AlarmClock, CalendarDays } from "lucide-react";
import Image from "next/image";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectField from "./SelectField";
import { cn } from "@/lib/util";
import Button from "./Button";

interface WebinarRegisterValues {
  fullName: string;
  email: string;
  industry: string;
  country: string;
}

export default function WebinarRegistration() {
  const [isIndustrySelectOpen, setIsIndustrySelectOpen] = useState(false);
  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WebinarRegisterValues>({
    defaultValues: {
      fullName: "",
      email: "",
      industry: "",
      country: "",
    },
  });

  // Watch the values of industry and country to conditionally style the select fields
  const [industryValue, countryValue] = watch(["industry", "country"]);

  const onSubmit = (data: WebinarRegisterValues) => {
    console.log("Form submitted:", data);
    reset();
    // Handle form submission logic here
  };

  return (
    <section>
      <div className="h-full space-y-3">
        <h1 className="font-semibold text-2xl">Details</h1>
        <Image
          src="/imgs/auth-bg.jpg"
          alt="Placeholder"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-40 object-cover rounded-2xl"
        />
      </div>
      <div className="flex max-sm:flex-col max-sm:space-y-5 justify-between mt-10 md:space-x-5">
        <div className="md:w-1/2 space-y-3">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="font-medium text-3xl">
                Professional Oil&Gas conference
              </h2>
              <p className="text-gray-700">
                The Oil & Gas Leadership Conference is a premier international
                forum that brings together leading executives, engineers,
                policymakers, and investors across the upstream, midstream, and
                downstream sectors. Designed to address the most pressing
                challenges and opportunities in today’s energy landscape, the
                conference offers expert-led panel discussions, technical
                workshops, and strategic keynote sessions. Attendees will gain
                valuable insights into energy transition strategies,
                technological advancements, investment trends, regulatory
                shifts, and sustainable development goals. With a focus on
                collaboration and knowledge exchange, the event fosters
                high-level networking, cross-sector partnerships, and actionable
                takeaways to drive growth and innovation across the oil and gas
                value chain.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center space-x-5">
                <p className="flex items-center space-x-2">
                  <span className="bg-[#F0EAF4] p-2 rounded-full">
                    <CalendarDays className="text-[#662D91] w-5 h-5" />
                  </span>
                  <span className="font-medium">Monday-18 Dec 2025</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="bg-[#F0EAF4] p-2 rounded-full">
                    <AlarmClock className="text-[#662D91] w-5 h-5" />
                  </span>
                  <span className="font-medium">
                    1:30 PM- 5:00PM{" "}
                    <span className="text-sm text-gray-600">4hr30mins</span>
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-5">
                <div className="flex items-center space-x-[-10px]">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full overflow-hidden bg-[#E8E8E8] p-1"
                    >
                      <Image
                        src="/svgs/profile-head.svg"
                        alt="Placeholder"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">and 24 others are going</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-2xl font-semibold">Details</p>
            <div className="mt-5">
              <span className="inline-block bg-gray-300 rounded-full w-10 h-10"></span>
              <p>Speaker</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-7 border border-gray-400 rounded-3xl flex flex-col h-full">
          <h2 className="text-2xl">Register for Professional Oil&Gas Con...</h2>
          <form
            className="flex flex-col flex-1 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-5 flex-1">
              <InputField
                label="Full Name"
                labelClassName="text-base"
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                asterisk={true}
                error={errors.fullName?.message}
                {...register("fullName", { required: "Full name is required" })}
              />
              <InputField
                label="Email Address"
                labelClassName="text-base"
                type="email"
                id="email"
                placeholder="Enter your email address"
                asterisk={true}
                error={errors.email?.message}
                {...register("email", { required: "Email is required" })}
              />
              <SelectField
                label="Industry"
                labelClassName="text-base"
                id="industry"
                placeholder="Enter area of specialization"
                options={[
                  "Tech",
                  "Finance",
                  "Healthcare",
                  "Education",
                  "Other",
                ]}
                asterisk={true}
                onFocus={() => setIsIndustrySelectOpen(true)}
                error={errors.industry?.message}
                {...register("industry", { required: "Industry is required" })}
                onBlur={() => setIsIndustrySelectOpen(false)}
                className={cn(
                  isIndustrySelectOpen ? "text-gray-950" : "text-gray-500",
                  industryValue && "text-gray-950"
                )}
              />
              <SelectField
                label="Country"
                labelClassName="text-base"
                id="country"
                placeholder="Enter your country"
                options={["USA", "Canada", "UK"]}
                asterisk={true}
                onFocus={() => setIsCountrySelectOpen(true)}
                error={errors.country?.message}
                {...register("country", { required: "Country is required" })}
                onBlur={() => setIsCountrySelectOpen(false)}
                className={cn(
                  isCountrySelectOpen ? "text-gray-950" : "text-gray-500",
                  countryValue && "text-gray-950"
                )}
              />
            </div>
            <Button
              variant="primary"
              className="w-full mt-10"
              disabled={isSubmitting}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
