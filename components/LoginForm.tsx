"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

interface LoginFormValues {
  email: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState<string>("");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(""); // Clear previous errors
    try {
      console.log('Submitting login for:', data.email);
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();
      console.log('Login API response:', result);

      if (result.success) {
        if (result.isAdmin) {
          console.log('Redirecting admin to dashboard');
          // Admin gets immediate access
          router.push('/dashboard');
        } else {
          // Regular users get email confirmation
          setIsLinkSent(true);
          setSubmittedEmail(data.email);
        }
      } else {
        setError(result.error || 'Login failed');
        console.error('Login failed:', result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  if (isLinkSent) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-3xl max-sm:text-xl mb-6">
          Check Your Email
        </h1>
        <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-6">
          <div className="text-green-400 text-lg font-semibold mb-2">
            Login Link Sent!
          </div>
          <p className="text-white/80">
            We&apos;ve sent a login link to <strong>{submittedEmail}</strong>
          </p>
          <p className="text-white/60 text-sm mt-2">
            Click the link in your email to access your dashboard.
          </p>
        </div>
        <Button
          variant="primary"
          className="w-full"
          onClick={() => {
            setIsLinkSent(false);
            setSubmittedEmail("");
          }}
        >
          Back to Login
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-3xl max-sm:text-xl">
        Login for Faceless Con 2025
      </h1>
      
      {error && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email address"
          asterisk={true}
          error={errors.email?.message}
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        <Button
          variant="primary"
          className="w-full mt-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}