import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
     title: "Audio2Text",
    description: "A responsive web application that converts speech and audio files to text in multiple languages using the Web Speech API.",
    tech: ["Javascript", "React", "Web Speech API","Tailwind CSS"],
    live: "https://audio2-text.vercel.app/",
    github: "https://github.com/Samy3ND/Audio2Text",},
    {
    title: "Cover Page Maker",
    description: "Lab Cover Page Maker for my Batchmates",
    tech: ["Python", "Streamlit"],
    live: "https://cpmaker.streamlit.app/",
    github: "https://github.com/Samy3ND/CoverPage_Maker",
  },
  {
    title: "Wiki Table Scraper",
    description: "Wikipedia Table Data Scraper",
    tech: ["Python", "Streamlit", "BeautifulSoup"],
    live: "https://wikitablescraper.streamlit.app/",
    github: "https://github.com/Samy3ND/Wiki_TableScraper",
  },
  {
    title: "Basic Resume Builder",
    description: "Resume Builder with AI skill recommendations",
    tech: ["Python", "Streamlit", "API"],
    github: "https://github.com/Samy3ND/resume-builder",
  },
  {
    title: "Articles on Aviation",
    description: "30+ Articles Published",
    tech: ["Airplanes", "Airports"],
    live: "https://aviationnepal.com/author/samyog/",
  },
  {
    title: "Avi Bot",
    description: "Simple Discord bot that provides airport and aircraft information.",
    tech: ["Python", "discord.py"],
    github: "https://github.com/Samy3ND/AviBot",
    
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-indigo-300 mb-14 border-b-4 border-indigo-600 inline-block pb-2"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-5">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-700/30 text-indigo-300 px-2 py-1 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm text-center bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-indigo-400/40"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-green-400/40"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </a>
                )}
              </div>

              {/* Border Animation on Hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:border-2 group-hover:border-indigo-400 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
