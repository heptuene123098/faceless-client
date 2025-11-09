"use client";

import { Bell, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NotificationDropdown from "./NotificationDropDown";
import AccountDropDown from "./AccountDropDown";
import { Breadcrumbs } from "./Breadcrumbs";
import { useApp } from "@/contexts/AppContext";

const notifications = [
  {
    id: 1,
    message: "New webinars available. Go register now!!",
  },
  {
    id: 2,
    message: "Checkout the materials uploaded by the speakers",
  },
];

export default function AppTopNav() {
  const { setIsSideBarOpen } = useApp();
  const [notifOpen, setNotifOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setNotifOpen(false);
      }
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center py-4 px-3 md:px-5 bg-white">
      <div className="flex items-center space-x-3">
        <Menu
          className="block xl:hidden w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
          onClick={() => setIsSideBarOpen(true)}
        />
        <Breadcrumbs />
      </div>

      <div className="flex justify-between items-center space-x-2 md:space-x-3 flex-1 max-w-2xl ml-4">
        <div className="relative flex-1 md:max-w-md">
          <input
          aria-label="*"
            className="w-full bg-[#F1F1F1] rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#532174] transition-colors duration-200 peer"
            placeholder=""
          />
          <div className="absolute inset-y-0 left-3 flex items-center space-x-1 text-gray-500 peer-focus:hidden pointer-events-none">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline text-sm">Search</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              className="relative p-1.5 md:p-2 rounded-full bg-[#F1F1F1] hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Notifications"
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-950" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 text-red-500 text-xs md:text-sm w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-semibold bg-white border border-red-200">
                  {notifications.length}
                </span>
              )}
            </button>
            {notifOpen && (
              <NotificationDropdown notifications={notifications} />
            )}
          </div>

          <div className="relative" ref={accountRef}>
            <button
              className="flex justify-center items-center md:space-x-2 bg-[#F1F1F1] hover:bg-gray-200 rounded-full p-2.5 md:py-2 md:px-3 cursor-pointer transition-colors"
              onClick={() => setAccountOpen((prev) => !prev)}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <Image
                  src="/svgs/profile-head.svg"
                  alt="Profile Img"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-950 text-sm hidden md:block font-medium">
                Emverse
              </p>
            </button>
            {accountOpen && <AccountDropDown />}
          </div>
        </div>
      </div>
    </header>
  );
}
