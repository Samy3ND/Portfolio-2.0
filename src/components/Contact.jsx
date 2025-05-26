import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import Model from "../Model/CompModel"
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import {  SiX } from "react-icons/si"; // Import X (Twitter) logo


const Contact = () => {
  
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};



return (
  <motion.section
    id="contacts"
    className="bg-gray-900 text-gray-100 py-16 px-6 lg:px-24"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    <motion.h2
      className="text-4xl font-bold mb-12 text-indigo-400 text-center"
      variants={fadeInUp}
    >
      Get In Touch
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <motion.div
        className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-lg mx-auto md:mx-0"
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-semibold mb-6 text-center">Let's Connect</h3>

        <form onSubmit={null} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-5 p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-5 p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full mb-6 p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full text-white font-semibold transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* 3D Model & Social Links */}
      <motion.div
        className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto"
        variants={fadeInUp}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-80 rounded-2xl shadow-lg mb-6"
          style={{ backgroundColor: "#cc7a2c" }}
        >
          <Model />
        </motion.div>

        <nav
          className="flex justify-center gap-6 text-3xl mb-6"
          role="navigation"
          aria-label="Social media links"
        >
          <a
            href="https://github.com/Samy3ND"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samyog-kc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Samy0g_KC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-transform transform hover:scale-110"
            aria-label="X (Twitter)"
          >
            <SiX />
          </a>
           <a
    href="https://www.instagram.com/samyog.kc/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition-transform transform hover:scale-110"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.facebook.com/samyog.kc.391932/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition-transform transform hover:scale-110"
    aria-label="Facebook"
  >
    <FaFacebook />
  </a>
        </nav>

        <footer className="text-sm text-gray-500 select-none">
          &copy; {new Date().getFullYear()} Samyog. All rights reserved.
        </footer>
      </motion.div>
    </div>
  </motion.section>
);

};



export default Contact;
