"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600">
                Hello, I&apos;m
            </span>

            <br></br>
            <TypeAnimation
              sequence={[
                "Anky Cyriaque",
                1000,
                "Director",
                1000,
                "Producer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-sm">
          Driven by a lifelong love of cinema, Anky Cyriaque creates films that explore identity, culture, and human connection—stories rooted in personal truth, yet made for the world.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Contact Me Button */}
            <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
            >
                Contact Me
            </Link>
        </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="relative rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-500 to-orange-500 p-[4px] shadow-xl">
            {/* Inner Dark Circle with Image */}
            <div className="rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 w-full h-full overflow-hidden flex items-center justify-center">
            <Image
              src="/anky-portfolio/images/main.jpeg"  // <-- change this to your image file
              alt="Profile picture"
              className="object-cover w-full h-full"
              width={400}
              height={400}
              priority
            />
          </div>

            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;