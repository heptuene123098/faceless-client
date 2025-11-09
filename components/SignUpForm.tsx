"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { cn } from "@/lib/util";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import EmailConfirmationModal from "./EmailConfirmationModal";

interface SignUpFormValues {
  fullName: string;
  email: string;
  phoneNumber?: string;
  industry: string;
  country: string;
}

export default function SignUpForm() {
  const [isIndustrySelectOpen, setIsIndustrySelectOpen] = useState(false);
  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      industry: "",
      country: "",
    },
  });
  const { isModalOpen, setIsModalOpen } = useAuth();

  // Watch the values of industry and country to conditionally style the select fields
  const [industryValue, countryValue] = watch(["industry", "country"]);

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form submitted:", data);
    setIsModalOpen?.(true);
    reset();
    // Handle form submission logic here
  };

  return (
    <div className="mt-32">
      <h1 className="font-bold text-3xl max-sm:text-xl">
        Register for Faceless Con 2025
      </h1>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          asterisk={true}
          error={errors.fullName?.message}
          {...register("fullName", { required: "Full name is required" })}
        />
        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email address"
          asterisk={true}
          error={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <InputField
          label="Phone Number"
          type="text"
          id="phoneNumber"
          placeholder="Enter phone number"
          error={errors.phoneNumber?.message}
          {...register("phoneNumber")}
        />
        <SelectField
          label="Industry"
          id="industry"
          placeholder="Enter area of specialization"
          options={["Tech", "Finance", "Healthcare", "Education", "Other"]}
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
        <Button
          variant="primary"
          className="w-full mt-5 mb-10"
          disabled={isSubmitting}
        >
          Register
        </Button>
      </form>
      {isModalOpen && <EmailConfirmationModal />}
    </div>
  );
}
