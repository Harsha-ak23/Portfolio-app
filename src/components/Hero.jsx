import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/ProfileImage1.jpg";
const Hero = () => {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Software Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Backend Developer",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [index, subIndex, roles, deleting]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Ashish Kasaudhan</span>
          </h1>
          <motion.div
            className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span
              className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
              style={{ height: "1em" }}
            ></span>
          </motion.div>
          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experience with modern technologies and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Right Side content  */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                src={profile}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
