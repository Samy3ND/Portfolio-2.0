import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import ThreeScene from "../Model/ThreeScene";

const AnimatedButton = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const baseClasses =
    "rounded-full shadow-md py-3 px-6 text-white font-semibold flex items-center justify-center transition-all duration-200 text-sm sm:text-base";

  return (
    <div className="flex flex-wrap gap-4">
      <motion.a
        href="/Samyog CV.pdf"
        download
        initial={{ scale: 1, boxShadow: "0px 4px 10px rgba(99, 102, 241, 0.3)" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.5)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
        className={`bg-indigo-600 ${baseClasses}`}
      >
        Download Resume
      </motion.a>

      <motion.button
        onClick={scrollToContact}
        initial={{ scale: 1, boxShadow: "0px 4px 10px rgba(99, 102, 241, 0.3)" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.5)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
        className={`bg-purple-600 ${baseClasses}`}
      >
        Let’s Connect
      </motion.button>
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 md:px-10"
        id="home"
      >
        <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-7xl mx-auto py-10 gap-10 md:gap-0">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I am{" "}
                <motion.span
                  className="text-indigo-400 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
                  }}
                >
                  Samyog
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mt-2"
              variants={itemVariants}
            >
              Welcome to my portfolio website!
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
              <AnimatedButton />
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.4,
                type: "spring",
                stiffness: 60,
                damping: 10,
              },
            }}
          >
            <ThreeScene />
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about" className="bg-gray-900 text-white px-4 sm:px-10 py-10">
        <About />
      </section>

      <section id="skills" className="bg-gray-800 text-white px-4 sm:px-10 py-10">
        <Skills />
      </section>

      <section id="projects" className="bg-gray-900 text-white px-4 sm:px-10 py-10">
        <Projects />
      </section>

      <section id="contact" className="bg-gray-800 text-white px-4 sm:px-10 py-10">
        <Contact />
      </section>
    </>
  );
}
