import React from "react";
import { motion } from "framer-motion";
import { data } from "react-router-dom";

const Experience = () => {
  const workData = [
    {
      role: "Frontend Developer Intern",
      company: "Saumata Technologies PVT LTD",
      duration: "June-2025 -- September-2025",
      description:
        "Working with React, JavaScript, Tailwind etc and Creating some website like Huzaifa Hajj Umrah Services, Faizan Umrah Service.",
      color: "purple",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work
          <span className="text-purple"> Experience</span>
        </h2>
        <p className="text-gray-400 text-center mx-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((work, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline  */}
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>
                {/* Box  */}
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold ">{work.role}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm">
                      {work.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{work.company}</p>
                  <p className="text-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
