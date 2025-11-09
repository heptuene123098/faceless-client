"use client";
import { useEffect, useState } from "react";
import { FaCircleUp } from "react-icons/fa6";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-60 bottom-[1rem] right-[1rem] text-[2rem] text-white animate-bounce transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaCircleUp />
    </button>
  );
};

export default ToTopBtn;
