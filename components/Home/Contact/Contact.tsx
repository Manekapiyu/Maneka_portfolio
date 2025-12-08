"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { BiPhone, BiMap } from "react-icons/bi";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.6 } },
};

const slideInRight = {
  initial: { x: 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div id="contact" className="scroll-mt-20 pt-16 pb-16 text-white">
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          className="space-y-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div {...fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4 mt-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 mb-6 text-base sm:text-lg mt-9">
              <span className="text-cyan-400">Reach out to me</span> &nbsp;
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to collaborate.
            </p>
          </motion.div>

          <motion.div className="space-y-6 mt-5" {...fadeIn}>
            {/* Mail */}
            <motion.a
              href="mailto:manekapiyumawali2099@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#0b1221] border border-cyan-400 hover:bg-blue-950 hover:text-black rounded-2xl p-5 cursor-pointer transition-all duration-300"
              {...fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="w-8 h-8 text-cyan-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Mail Me</h3>
                <p className="text-sm text-gray-300">
                  manekapiyumawali299@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:0767859511"
              className="flex items-center gap-4 bg-[#0b1221] border border-cyan-400 hover:bg-blue-950 hover:text-black rounded-2xl p-5 cursor-pointer transition-all duration-300"
              {...fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <BiPhone className="w-8 h-8 text-cyan-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Call Me</h3>
                <p className="text-sm text-gray-300">076-7859511</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://www.google.com/maps/place/Minuwangoda,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#0b1221] border border-cyan-400 hover:bg-blue-950 hover:text-black rounded-2xl p-5 cursor-pointer transition-all duration-300"
              {...fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <BiMap className="w-8 h-8 text-cyan-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Find Me</h3>
                <p className="text-sm text-gray-300">
                  No:24/A, Gartland Estate, Wegowwa Cross Road, Minuwangoda, Sri
                  Lanka
                </p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="bg-[#0c0c29] p-6 rounded-lg shadow-md mt-8"
          {...slideInRight}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div {...fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </motion.div>

            <motion.div {...fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </motion.div>

            <motion.div {...fadeInUp}>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium mb-2"
              >
                Mobile No :
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </motion.div>

            <motion.div {...fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-md bg-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#06A6A3] to-[#0B3B92] text-white font-semibold shadow-md hover:opacity-95 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
