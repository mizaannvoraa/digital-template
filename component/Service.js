"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "🖌️",
  },
  {
    title: "Design & Concept",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "✏️",
  },
  {
    title: "Social Media",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "🎨",
  },
  {
    title: "Photography",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "📷",
  },
  {
    title: "Video Edit",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "🎬",
  },
  {
    title: "Seo Optimization",
    description:
      "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.",
    icon: "📈",
  },
];

const stats = [
  { number: 820, label: "SATISFACTION CLIENTS" },
  { number: 430, label: "EMPLOYEES ON WORLDWIDE" },
  { number: 940, label: "PROJECTS COMPLETED ON 60 COUNTRIES" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const duration = 1.5;

  useEffect(() => {
    controls.start({
      count: target,
      transition: { duration, ease: "easeOut" },
    });
  }, [controls, target]);

  return (
    <motion.span
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        if (typeof latest.count === "number") {
          setCount(Math.floor(latest.count));
        }
      }}
    >
      {count}
    </motion.span>
  );
};

const Service = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="service" className=" px-6 md:px-12 lg:px-20 py-16 bg-[#F3F3F3] ">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-red-500 pl-4 mb-2">
            Our services.
          </h2>
          <p className="text-red-600 font-semibold pl-4">who we are</p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`px-6 py-10 rounded-lg shadow-sm transition-all duration-300 bg-white text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mt-16 pt-12 border-t border-gray-300"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex md:flex-row flex-col items-center justify-center gap-1 md:gap-3">
              <h3 className="md:text-5xl text-3xl font-bold text-gray-900 mb-2">
                {inView ? <Counter target={stat.number} /> : "0"}
              </h3>
              <p className="text-center md:text-start w-full md:max-w-[160px] text-[#ff0e2a] font-semibold text-[17px] md:text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
