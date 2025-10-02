"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InstallationSteps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Animation runs every time it enters view
    amount: 0.3 
  });

  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Link Callisto to your infrastructure in minutes with simple OAuth integration.",
      color: "from-pink-400 to-orange-400",
    },
    {
      number: "02",
      title: "Configure",
      description: "Set up permissions and workflows with our AI-powered setup wizard.",
      color: "from-purple-400 to-pink-400",
    },
    {
      number: "03",
      title: "Go Live",
      description: "Launch your file management system with zero downtime.",
      color: "from-cyan-400 to-blue-400",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} aria-labelledby="installation-steps-heading" className="py-28 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <header className="mb-16 text-center">
          <h2 id="installation-steps-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Get started in 3 simple steps
          </h2>
        </header>

        {/* Steps grid with animation */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, idx) => (
            <motion.article
              key={idx}
              className="relative group"
              variants={itemVariants}
            >
              {/* Colored glow behind card */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`} aria-hidden="true" />
              
              {/* Card */}
              <div className="relative rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm p-8 shadow-xl h-full flex flex-col">
                {/* Step number */}
                <div className={`inline-block w-fit mb-6 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                  {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}