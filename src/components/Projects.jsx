import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, user authentication, and payment processing.",
      image: projectImg1,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
      demo: "#",
      code: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop functionality and real-time updates.",
      image: projectImg2,
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
      icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
      demo: "#",
      code: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile app for tracking workouts, nutrition, and health metrics.",
      image: projectImg3,
      tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
      icons: [FaReact, FaDatabase],
      demo: "#",
      code: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
      image: projectImg4,
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
      icons: [FaReact, FaCloud],
      demo: "#",
      code: "#",
    },
    {
      title: "Chat App",
      description:
        "A real-time chat application with group messaging, emojis, and file sharing.",
      image: projectImg5,
      tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
      icons: [FaReact, FaNodeJs, FaDatabase],
      demo: "#",
      code: "#",
    },
    {
      title: "AI Image Generator",
      description:
        "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
      image: projectImg6,
      tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
      icons: [FaRobot, FaReact, FaCloud],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Cards  */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            <span> View More Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
