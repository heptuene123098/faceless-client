import { cn } from "@/lib/util";
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  asterisk?: boolean;
  labelClassName?: string;
}

export default function InputField({
  label,
  id,
  error,
  asterisk,
  className,
  labelClassName,
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cn("block text-xl text-gray-950", labelClassName)}
      >
        {label} {asterisk && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        className={cn(
          "mt-1 block w-full bg-[#EFEFEF] rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#532174] transition-colors duration-200",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
