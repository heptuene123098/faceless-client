import { cn } from "@/lib/util";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "outline" | "destructive";
}

export default function Button({
  variant = "primary",
  ref,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center cursor-pointer p-3 rounded-full font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-[#662D91] text-white hover:bg-[#5B228D] focus:ring-[#5B228D]",
    secondary: "bg-[#F1F1F1] text-gray-500 hover:bg-gray-200",
    outline:
      "bg-transparent text-[#662D91] border border-[#D0BEDD] hover:bg-gray-200",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
