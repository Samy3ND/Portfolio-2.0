import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-400 border-b-4 border-indigo-600 inline-block pb-1">
        About Me
      </h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
        I am a technology and aviation enthusiast passionate about building interactive web applications as a React developer. With experience in Python, content marketing, video editing, and graphic design, I enjoy solving problems with clean, efficient code and exploring new technologies.
      </p>
    </motion.section>
  );
};

export default About;
