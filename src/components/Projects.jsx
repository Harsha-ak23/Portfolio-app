import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaArrowRight,
  FaJs,
} from "react-icons/fa";

import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";
import projectImg7 from "../assets/currencyImg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Online Food Restaurant App",
      description:
        "A full-featured online restaurant app with cart, user, restaurant, order status, authentication and admin pannel.",
      image: projectImg1,
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      icons: [FaNodeJs, FaDatabase, FaStripe],
      demo: "https://github.com/Harsha-ak23/Online-Food-Restaurant-Backend-Project",
      code: "https://github.com/Harsha-ak23/Online-Food-Restaurant-Backend-Project",
    },
    {
      title: "Full Stack Todo Application",
      description:
        "A full-stack Todo application featuring user authentication, database storage, add/delete/update/complete todo functionality, and user profile management.",
      image: projectImg2,
      tech: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "Express",
        "JWT",
      ],
      icons: [FaReact, FaFire, FaCloud, FaDatabase, FaNodeJs],
      demo: "https://github.com/Harsha-ak23/Full-Stack-Todo-List-Application",
      code: "https://github.com/Harsha-ak23/Full-Stack-Todo-List-Application",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
      image: projectImg4,
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
      icons: [FaReact, FaCloud],
      demo: "https://portfolio-ak-97.netlify.app/",
      code: "https://github.com/Harsha-ak23/Portfolio-app",
    },
    {
      title: "Weather Applicaton",
      description: "A Weather application with Real-Time weather report.",
      image: projectImg5,
      tech: ["JavaScript", "Tailwind CSS", "HTML", "Weather API"],
      icons: [FaJs],
      demo: "https://github.com/Harsha-ak23/Weather-Application",
      code: "https://github.com/Harsha-ak23/Weather-Application",
    },
    {
      title: "News AK",
      description:
        "A real-time News application with categories like science, sports etc",
      image: projectImg6,
      tech: ["React", "News API", "JavaScript", "Tailwind CSS"],
      icons: [FaRobot, FaReact, FaCloud],
      demo: "https://github.com/Harsha-ak23/News-Ak",
      code: "https://github.com/Harsha-ak23/News-Ak",
    },
    {
      title: "Currency Converter",
      description:
        "A Currency Converter application which simulate the currency with real time exchange rate.",
      image: projectImg7,
      tech: ["React", "JavaScript", "Tailwind CSS", "Currency API", "HTML"],
      icons: [FaJs, FaReact],
      demo: "https://github.com/Harsha-ak23/Currency-Converter",
      code: "https://github.com/Harsha-ak23/Currency-Converter",
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
          <span className="text-purple"> Projects</span>
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
