"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import InputField from "./InputField";

interface LoginFormValues {
  email: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login submitted:", data);
    // Handle login logic here
  };

  return (
    <div>
      <h1 className="font-bold text-3xl max-sm:text-xl">
        Login for Faceless Con 2025
      </h1>
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email address"
          asterisk={true}
          error={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <Button
          variant="primary"
          className="w-full mt-5"
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
