"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const borderAnimation = {
    hidden: { 
      scaleX: 0,
      originX: 0
    },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Text Section */}
        <motion.div variants={fadeInLeft}>
          <div className="relative pl-4 mb-4">
            {/* Animated border */}
            <motion.div 
              className="absolute left-0 top-0 w-1 h-full bg-red-500"
              variants={borderAnimation}
            />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={fadeInUp}
            >
              About us.
            </motion.h2>
            <motion.p 
              className="text-red-600 font-semibold mt-1"
              variants={fadeInUp}
            >
              who we are
            </motion.p>
          </div>
          <motion.p 
            className="text-gray-700 mb-6 leading-relaxed"
            variants={fadeInUp}
          >
          Thinkmint is a forward-thinking creative agency built on the belief that fresh ideas spark growth. Our team of designers, strategists, and digital innovators collaborate to craft solutions that are not just beautiful, but purposeful.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="w-full"
          variants={fadeInRight}
        >
          <motion.div
            variants={scaleIn}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/assets/trialabout.jpg"
              alt="About us image"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              width={400}
              height={300}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom 3 Columns */}
      <motion.div 
        className="grid md:grid-cols-3 gap-10 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.h3 
            className="text-lg font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Who we are
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            🌿 Fresh Perspective – We challenge the ordinary with ideas that stand out.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.h3 
            className="text-lg font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our philosophy
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
           💡 Smart Strategy – Every design is backed by insights and data.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.h3 
            className="text-lg font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            How we work
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            🤝 Collaborative Spirit – We grow together with our clients, step by step.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;