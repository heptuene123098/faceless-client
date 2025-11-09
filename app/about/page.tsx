// components/dashboard/about.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col laptop:flex-row items-center justify-center overflow-hidden px-6 py-20">
      
      {/* Futuristic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Left Content */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex-1 flex flex-col items-start space-y-6 max-w-xl"
      >
        <h2 className="text-3xl tablet:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-base tablet:text-lg leading-relaxed text-gray-300">
          We are building a <span className="text-purple-400">faceless future </span> 
          where innovation thrives without boundaries.  
          Our platform connects pioneers in <span className="text-blue-400">AEC </span> 
          and <span className="text-blue-400">Oil & Gas </span> industries, 
          creating a gateway to share knowledge, learn, and shape tomorrow.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          Join the Movement
        </button>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 flex-1 flex justify-center mt-10 laptop:mt-0"
      >
        <Image
          src="/images/futuristic-about.jpg"
          alt="Futuristic Concept"
          width={500}
          height={500}
          className="rounded-2xl shadow-2xl border border-purple-500/30"
        />
      </motion.div>
    </section>
  );
}
