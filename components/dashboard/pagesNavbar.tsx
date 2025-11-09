"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEquals, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import RegisterAsModal from "../RegisterAsModal";
import Link from "next/link";

export default function PagesNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isModalOpen, setIsModalOpen } = useAuth();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 400);
  };

  const navData = [
    { linkto: "/about", name: "About" },
    { linkto: "/speakers", name: "Speakers" },
    { linkto: "/schedule", name: "Schedule" },
    { linkto: "/workshop", name: "Workshops" },
    { linkto: "/expo", name: "Expo" },
  ];

  const toggleNavBar = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const, // ✅ fixes type error
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav
        className={`
    fixed top-0 left-0 z-60
    flex items-center justify-between
    px-6 w-full h-15 bg-[#F8F8F8] shadow-md

    /* Laptop and above: center & rounded */
    laptop:top-6 laptop:left-1/2 laptop:-translate-x-1/2
    laptop:max-w-[63rem]
    laptop:rounded-full laptop:px-16 laptop:py-4
  `}
      >
        {/* Middle: Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/header-logo.png"
            alt="FacelessCon Logo"
            width={55}
            height={49}
            className="w-10 h-auto sm:w-12 lg:w-[40px]"
          />
          <span className="text-lg lg:text-2xl font-bold text-[#130022]">
            FacelessCon
          </span>
        </div>

        {/* Left: Desktop Nav Links + Auth */}
        <div className="hidden laptop:flex items-center gap-10">
          <ul className="flex gap-6 text-[#130022] font-medium">
            {navData.map((item) => (
              <Link
                href={item.linkto}
                key={item.linkto}
                className="cursor-pointer hover:text-[#662D91]"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <ul className="flex gap-4 items-center text-[#130022]">
            <li
              className="cursor-pointer bg-[#F1F1F1] p-3 rounded-full hover:text-[#662D91]"
              onClick={() => router.push("/login")}
            >
              Login
            </li>
            <li
              className="cursor-pointer bg-[#662D91] text-white px-4 py-2 rounded-full hover:bg-[#4b1a74] transition"
              onClick={() => setIsModalOpen(true)}
            >
              Register
            </li>
          </ul>
        </div>

        {/* Right: Hamburger on mobile */}
        <button
          className="block laptop:hidden p-2 rounded-md text-white bg-[#662D91]"
          onClick={toggleNavBar}
          style={{
            backgroundColor: isOpen ? "#F0EAF4" : "#662D91",
          }}
        >
          {isOpen ? (
            <FaTimes className="w-3 md:w-4 h-3 md:h-4 text-[#130022]" />
          ) : (
            <FaEquals className="w-3 md:w-4 h-3 md:h-4" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-md font-semibold"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-1 mt-5 items-center">
              {navData.map((data, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-1 text-sm tablet:text-md mt-4"
                >
                  <button
                    className="hover:underline"
                    onClick={() => handleNavClick(data.linkto)}
                  >
                    {data.name}
                  </button>
                </motion.li>
              ))}
              <hr className="border border-t-4 w-full text-webpurple" />
              <motion.li variants={itemVariants}>
                <button
                  className="mt-6 px-2 py-2 rounded-md bg-[#662D91] text-white font-semibold text-sm tablet:text-md uppercase tracking-widest"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    toggleNavBar();
                  }}
                  className="mt-4 px-2 py-2 rounded-md bg-[#662D91] text-white font-bold text-sm tablet:text-md uppercase tracking-widest"
                >
                  Register
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && <RegisterAsModal />}
    </>
  );
}
