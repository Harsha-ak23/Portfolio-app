import React from "react";
import {
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: FaReact,
      description:
        "Building responsive and interactive user interfaces with modern frameworks.",
      tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      description: "Creating robust server-side applications and RESTful APIs.",
      tags: ["Node.js", "Express"],
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      description:
        "Designing and optimizing databases for performance and scalability.",
      tags: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      description: "Deploying and managing applications in cloud environments.",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      description:
        "Essential tools and technologies I use in my development workflow.",
      tags: ["Git & GitHub", "Webpack", "Figma", "VSCode"],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Techonolgies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transtion duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-6" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
