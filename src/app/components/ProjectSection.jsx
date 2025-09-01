"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { SiTubi } from "react-icons/si";
import { GrMultimedia } from "react-icons/gr";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "Apple TV Movie",
      description: "See my project featured on Apple TV.",
      icon: <FaApple className="text-5xl text-white" />,
      link: "https://tv.apple.com/us/movie/love--i-had-a-fight/umc.cmc.278i55jkztx85vw6pq0pk75bb",
    },
    {
      id: 2,
      name: "Tubi Movies",
      description: "Watch my movie available now on Tubi.",
      icon: <SiTubi className="text-5xl text-yellow-400" />,
      link: "https://tubitv.com/movies/688627/small-world?start=true",
    },
  ];

  const press = [
    {
      id: 3,
      name: "The Hollywood Reporter",
      description: "Japanese Stars Join Cast of Anky Cyriaque’s ‘Seasons’.",
      // Corrected image path
      image: "/anky-portfolio/images/thr_logo.png",
      link: "https://www.hollywoodreporter.com/movies/movie-news/anky-cyriaque-seasons-cast-serena-motola-seiya-matsudo-ray-shirakawa-1236111521/",
    },
    {
      id: 4,
      name: "Uptown Magazine",
      description: "Anky Cyriaque’s ‘Seasons’ debut film is already a game-changer",
      // Corrected image path
      image: "/anky-portfolio/images/uptown.png",
      link: "https://uptownmagazine.com/2025/03/19/anky-cyriaques-seasons-debut-film-is-already-a-game-changer/",
    },
    {
      id: 5,
      name: "Blex Media",
      description: "Serena Motola, Seiya Matsudo, and Ray Shirakawa Join Anky Cyriaque’s Multilingual Fantasy-Drama ‘Seasons’",
      icon: <GrMultimedia className="text-5xl text-blue-300" />,
      link: "https://blexmedia.com/anky-cyriaques-multilingual-fantasy-drama-seasons/",
    },
  ];

  const renderCards = (items) =>
    items.map((item) => (
      <motion.a
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
      >
        <div className="mb-4">
          {item.image ? (
            <Image src={item.image} alt={item.name} width={200} height={80} />
          ) : (
            item.icon
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </motion.a>
    ));

  return (
    <section className="text-white py-16 px-6 lg:px-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto flex flex-col gap-20"
      >
        {/* Projects */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 text-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">{renderCards(projects)}</div>
        </div>

        {/* Latest Press */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 text-center">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-red-500 bg-clip-text text-transparent">
              My Latest Press
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">{renderCards(press)}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;