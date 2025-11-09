import { cn } from "@/lib/util";
import { ChevronDown } from "lucide-react";
import React from "react";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder?: string;
  error?: string;
  options?: string[];
  asterisk?: boolean;
  labelClassName?: string;
}

export default function SelectField({
  label,
  id,
  error,
  options,
  placeholder,
  asterisk,
  className,
  labelClassName,
  children,
  ...props
}: SelectInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={cn("block text-xl text-gray-950 mb-1", labelClassName)}
      >
        {label} {asterisk && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          {...props}
          className={cn(
            "w-full rounded-xl text-gray-500 appearance-none bg-[#EFEFEF] p-3 outline-none focus:ring-2 focus:ring-[#532174] transition-colors duration-200 disabled:text-gray-400",
            className
          )}
        >
          {children ? (
            children
          ) : (
            <>
              <option value="" disabled>
                {placeholder || `Select ${label}`}
              </option>
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </>
          )}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
