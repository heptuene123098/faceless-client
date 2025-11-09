"use client";

import { cn } from "@/lib/util";
import {
  LayoutGrid,
  LogOut,
  Search,
  Settings,
  ShoppingCart,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FacelessIcon from "./icons/FacelessIcon";
import { useApp } from "@/contexts/AppContext";

interface NavItemType {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItemType[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "My webinars",
    href: "/my-webinars",
    icon: FacelessIcon,
  },
  {
    name: "Discover",
    href: "/discover",
    icon: Search,
  },
  {
    name: "Expo Page",
    href: "/expo",
    icon: ShoppingCart,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const { isSideBarOpen, setIsSideBarOpen } = useApp();
  return (
    <aside
      className={cn(
        "min-h-screen max-sm:h-full max-lg:-translate-x-full max-lg:fixed max-lg:z-20 w-[290px] flex flex-col py-8 px-4 space-y-6 transition-all duration-300 border z-50 bg-white border-r-[#DDDDDD]",
        isSideBarOpen && "max-lg:translate-x-0"
      )}
    >
      <div className="flex items-center space-x-3 px-4 mb-6 relative">
        <Image
          width={40}
          height={40}
          src="/svgs/faceless-icon-purple.svg"
          alt="Faceless Icon"
        />
        <p className="font-semibold text-2xl">FacelessCon</p>
        <X
          className="absolute right-3 top-0 cursor-pointer xl:hidden"
          onClick={() => setIsSideBarOpen(false)}
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 rounded-md transition",
                  pathname.includes(href)
                    ? "bg-[#F0EAF4] text-[#662D91] font-semibold rounded-full"
                    : "hover:bg-[#662D91] rounded-full hover:text-gray-50 text-gray-600"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center space-x-3 px-4 py-2 rounded-full text-red-500 hover:bg-red-600 hover:text-red-50 transition">
        <LogOut className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </aside>
  );
}
