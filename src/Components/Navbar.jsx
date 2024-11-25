import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "../constants";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg p-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Replace AISG with Animated Ball */}
        <div className="w-16 h-16 flex items-center justify-center"> {/* Adjusted size */}
          {technologies[0]?.icon ? (
            <BallCanvas icon={technologies[0].icon} />
          ) : (
            <div className="text-3xl font-bold text-green-700">AISG</div>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg text-white">
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <Link to="/activity-areas">Activity Areas</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>

        {/* Call-to-Action Button */}
        <motion.button
          className="px-6 py-2 bg-green-500/80 text-white rounded-lg shadow-md hover:bg-green-400 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
