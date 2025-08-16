"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites that are fast, intuitive, and built to inspire action.",
    icon: "🖌️",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Logos, visuals, and design systems that capture your essence and stand the test of time.",
    icon: "✏️",
  },
  {
    title: "Social Media Strategy",
    description:
      "Engaging campaigns and content calendars designed to build loyal communities.",
    icon: "🎨",
  },
  {
    title: "Photography & Video Production",
    description:"High-impact visuals and storytelling that connect emotionally with your audience.",
    icon: "📷",
  },
  {
    title: "Content & SEO Optimization",
    description:
      "Words and strategies that rank, resonate, and deliver measurable results.",
    icon: "🎬",
  },
  {
    title: "Creative Consulting",
    description:
      "Tailored advice and fresh ideas to push your brand in the right direction.",
    icon: "📈",
  },
];

const stats = [
  { number: 150, label: "Brands Empowered", showPlus: true },
  { number: 25, label: "Countries Reached", showPlus: false },
  { number: 300, label: "Creative Projects Completed", showPlus: true },
  { number: 95, label: "Client Satisfaction Rate", showPlus: false, showPercent: true },
];

const AnimatedCounter = ({ target, showPlus = false, showPercent = false }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target); // Ensure we end at the exact target
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={startAnimation}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-1"
    >
      <span>{count}</span>
      {showPlus && (
        <motion.span 
          className="text-gray-900 font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 2, duration: 0.3, ease: "easeOut" }}
        >
          +
        </motion.span>
      )}
      {showPercent && (
        <motion.span 
          className="text-gray-900 font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 2, duration: 0.3, ease: "easeOut" }}
        >
          %
        </motion.span>
      )}
    </motion.span>
  );
};

const Service = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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
    <section id="service" className="px-6 md:px-12 lg:px-20 py-16 bg-[#F3F3F3]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <div className="relative">
            <motion.div 
              className="absolute left-0 top-0 w-1 h-12 bg-red-500"
              variants={borderAnimation}
            />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 pl-4 mb-2"
              variants={titleVariants}
            >
              Our services.
            </motion.h2>
            <motion.p 
              className="text-red-600 font-semibold pl-4"
              variants={titleVariants}
              transition={{ delay: 0.2 }}
            >
              who we are
            </motion.p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 py-10 rounded-lg shadow-sm transition-all duration-300 bg-white text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer overflow-hidden relative"
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-red-600 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="font-bold text-lg mb-2 group-hover:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-sm leading-relaxed group-hover:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-16 pt-12 border-t border-gray-300"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center justify-center gap-2"
              variants={statVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="md:text-5xl text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: idx * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter 
                    target={stat.number} 
                    showPlus={stat.showPlus}
                    showPercent={stat.showPercent}
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-center text-[#ff0e2a] font-semibold text-base leading-tight max-w-[160px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 + 1 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;