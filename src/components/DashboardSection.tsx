"use client";
import React from "react";
import Squares from "./Squares";
import { motion } from "framer-motion";
const macDash = `${import.meta.env.BASE_URL}mac-dash.png`;

const DashboardSection = () => {
  return (
    <section
      id="dashboard"
      className="dashboard-animated-section relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-28"
    >
      {/* Background with grid */}
      <div className="absolute inset-0 -z-20 will-change-transform">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1, margin: "100px" }}
        >
          Your{" "}
          <span className="text-purple-600 bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
            all-in-one
          </span>{" "}
          <span className="text-black">dashboard</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1, margin: "100px" }}
        >
          See live calls, transcripts, transactions, and outcomes in one place.
          Update business info, track payments, monitor earnings, and identify
          peak call times — so you can staff smarter and grow revenue
          effortlessly.
        </motion.p>

        {/* Mockup */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1, margin: "100px" }}
        >
          <img
            src={macDash}
            alt="Dashboard Preview"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
