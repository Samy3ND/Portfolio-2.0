import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaProjectDiagram,
  FaBullhorn,
  FaVideo,
  FaPaintBrush,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiFigma,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Quality Assurance", icon: <FaCheckCircle className="text-green-500" /> },
  { name: "Content Marketing", icon: <FaBullhorn className="text-orange-400" /> },
  { name: "Project Management", icon: <FaProjectDiagram className="text-purple-500" /> },
  { name: "Video Editing", icon: <FaVideo className="text-red-500" /> },
  { name: "Graphic Design", icon: <FaPaintBrush className="text-indigo-400" /> },
  
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => (
  <motion.section
    id="skills"
    className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-5xl mx-auto"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-indigo-400 border-b-4 border-indigo-600 inline-block pb-2">
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
      {skills.map(({ name, icon }) => (
        <motion.div
          key={name}
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 p-5 bg-gray-800 rounded-xl shadow-md transition-all duration-300 cursor-default"
          title={name}
        >
          <div className="text-4xl sm:text-5xl">{icon}</div>
          <p className="text-gray-200 font-medium text-sm sm:text-base">{name}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
