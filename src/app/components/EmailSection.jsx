"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.status === 200) {
      setEmailSubmitted(true);
      e.target.reset();
      setTimeout(() => setEmailSubmitted(false), 4000); // auto-hide success after 4s
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-6 relative"
    >
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I’d love to hear from you! Whether you have a project in mind, a question,
          or just want to say hello, feel free to reach out — I’ll reply as soon as I can.
        </p>

        {/* Icons in one line */}
        <div className="flex items-center gap-6 mt-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ankycyriaque/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-5xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anky-cyriaque-5ba15324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-5xl" />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/ankycyriaque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition-transform duration-300 transform hover:scale-110"
          >
            <FaSquareXTwitter className="text-5xl" />
          </a>
        </div>
      </div>

      <div className="relative z-10">
        <AnimatePresence>
          {emailSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center p-6 bg-green-900/40 border border-green-500 text-green-300 rounded-2xl shadow-lg"
            >
              <CheckCircle className="w-10 h-10 mb-3 text-green-400" />
              <p className="font-medium text-lg">Message sent successfully!</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-[#18191E]/80 p-6 rounded-2xl shadow-lg"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="email"
                className="text-white mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="mb-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                           text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500"
                placeholder="jacob@google.com"
              />

              <label
                htmlFor="subject"
                className="text-white mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="mb-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                           text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500"
                placeholder="Just saying hi"
              />

              <label
                htmlFor="message"
                className="text-white mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mb-6 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                           text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500"
                placeholder="Let's talk about..."
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 
                           disabled:opacity-70 disabled:cursor-not-allowed 
                           text-white font-semibold py-2.5 px-5 rounded-lg w-full transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EmailSection;
