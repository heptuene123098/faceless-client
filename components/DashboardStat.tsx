"use client";

import { cn } from "@/lib/util";
import { CalendarDays, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LiveIcon from "./icons/LiveIcon";

interface DashboardStatProps {
  icon: string;
  status: string;
  value: string;
  className?: string;
}

const iconMap = {
  LiveIcon,
  CalendarDays,
};

export default function DashboardStat({
  icon,
  status,
  value,
  className,
}: DashboardStatProps) {
  const router = useRouter();
  const pathname = usePathname();
  const Icon = iconMap[icon as keyof typeof iconMap];
  return (
    <div
      className={cn(
        "px-4 py-7 flex justify-between md:justify-center items-center space-x-3 text-white rounded-3xl mt-5 cursor-pointer",
        className
      )}
      onClick={() =>
        router.push(`${pathname}/webinars?status=${status.toLowerCase()}`)
      }
    >
      <span className="bg-white p-2 rounded-full">
        <Icon className="text-[#662D91]" />
      </span>
      <div>
        <p className="font-medium">{status}</p>
        <p className="text-sm">{value}</p>
      </div>
      <ChevronRight />
    </div>
  );
}
