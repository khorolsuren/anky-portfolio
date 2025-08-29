"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaImdb } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="text-white py-16 px-6 lg:px-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto flex flex-col"
      >
        {/* Gradient Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-300 leading-relaxed text-center mb-6">
          I’m Anky Cyriaque, an emerging filmmaker and <span className="text-emerald-400 font-semibold">director</span> splitting my time between New York and San Diego. Right now, I’m deep in the journey of creating my first feature film, Seasons. At my core though, I’m just a film lover, the kind who geeks out over cinema the way old-school “film snobs” used to. This is the adventure of turning passion into story, and story into film. Come along for the ride—because one way or another, I’ll see you at the Oscars.
        </p>

        {/* IMDb, Apple TV & Tubi Icons in one line */}
        <div className="flex justify-center mt-4 space-x-6">
          {/* IMDb Icon with Text */}
          <a
            href="https://www.imdb.com/name/nm3977697/?ref_=nv_sr_srsg_0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-yellow-500 hover:text-yellow-400 transition-transform duration-300 transform hover:scale-110"
          >
            {/* Text */}
            <span className="text-lg lg:text-xl font-semibold">
              View My IMDb Profile
            </span>
            {/* Bigger IMDb Icon */}
            <FaImdb className="text-6xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
