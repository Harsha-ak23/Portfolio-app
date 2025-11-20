import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/ProfileImage2.jpg";

import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

const About = () => {
  const aboutInfo = [
    {
      icon: FaLightbulb,
      title: "Innovative",
      description:
        "I love creating unique solutions to complex problems with cutting-edge technologies.",
      color: "text-purple",
    },
    {
      icon: FaPaintBrush,
      title: "Design Oriented",
      description:
        "Beautiful design and user experience are at the heart of everything I create.",
      color: "text-pink",
    },
    {
      icon: FaCode,
      title: "Clean Code",
      description:
        "I write maintainable, efficient code following best practices and modern patterns.",
      color: "text-blue",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple"> Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Get to know more about my backgound and passion.
        </p>
        {/* Image and my journey section */}
        <div className="flex flex-col md:flex-row items center gap-12">
          {/* Image section */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={ProfileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Journery section  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                {" "}
                I'm a passionate full-stack developer with over 3 months of
                experience creating digital solutions for bussinesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-12">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>
              {/* Cards  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
