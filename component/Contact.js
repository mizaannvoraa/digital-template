"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="border-l-4 border-red-500 pl-4 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact us.
          </h2>
          <p className="text-red-600 font-semibold mt-1">get in touch</p>
        </motion.div>

        <motion.div
          className="md:mt-18 mt-7 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <div className="space-y-10">
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-black">marketing@thinkmint.in</p>
                <p className="text-sm !text-gray-500">Email</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-black">
                  Andheri, Mumbai
                </p>
                <p className="text-sm text-gray-500">Address</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-black">0800 123 456789</p>
                <p className="text-sm text-gray-500">Phone</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How can I help you?
              </label>
              <textarea
                rows="5"
                className="mt-1 block w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition"
            >
              SUBMIT
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
