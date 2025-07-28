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
            Advice me cousin an spring of needed. Tell use paid law ever yet new.
            Meant to learn of vexed if style allow he there. Tiled man stand tears
            ten joy there terms any widen. Procuring continued suspicion its ten.
            Pursuit brother are had fifteen distant has. Early had add equal china
            quiet visit. Appear an manner as no limits either praise in. In in written
            on charmed justice is amiable farther besides. Law insensible middletons
            unsatiable for apartments boy delightful unreserved.
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
            Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house of we. Ask put yet excuse person see change.
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
            Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
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
            Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;