import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white drop-shadow-lg cursor-pointer"
        >
          Suhana.dev
        </motion.h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-cyan-300 duration-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl shadow-lg duration-300"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
