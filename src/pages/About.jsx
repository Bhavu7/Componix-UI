// PAGES :

// About.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers, FaRocket, FaLightbulb } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-16 bg-neutral"
    >
      <motion.h1
        className="text-5xl font-bold text-accent mb-12 text-center uppercase tracking-wide"
        variants={itemVariants}
      >
        About Us
      </motion.h1>
      
      {/* Mission Section */}
      <motion.section ref={(el) => (sectionsRef.current[0] = el)} className="mb-16" variants={itemVariants}>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <FaLightbulb className="text-primary text-6xl mb-6" />
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
            <p className="text-lg text-midgray">
              To empower developers with high-quality, customizable Tailwind UI components that accelerate development while maintaining modern, animated designs. We focus on dark-themed interfaces for a sleek, professional look.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="backdrop-blur-md bg-secondary/30 p-8 rounded-2xl border border-light/10">
            <p className="text-midgray">Join us in revolutionizing UI development with Tailwind CSS.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section ref={(el) => (sectionsRef.current[1] = el)} className="mb-16" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Journey</h2>
        <div className="timeline space-y-8">
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-4 h-4 bg-accent rounded-full"></div>
            <p className="text-lg text-midgray">2023: Founded with a vision for better UI components.</p>
          </motion.div>
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-4 h-4 bg-accent rounded-full"></div>
            <p className="text-lg text-midgray">2024: Launched first set of animated components.</p>
          </motion.div>
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-4 h-4 bg-accent rounded-full"></div>
            <p className="text-lg text-midgray">2025: Expanded to enterprise solutions.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section ref={(el) => (sectionsRef.current[2] = el)} variants={itemVariants}>
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="text-center backdrop-blur-md bg-secondary/30 p-6 rounded-2xl border border-light/10">
            <FaUsers className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-light">John Doe</h3>
            <p className="text-midgray">Founder & CEO</p>
            <p className="text-sm text-midgray mt-2">Passionate about UI/UX and Tailwind CSS.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center backdrop-blur-md bg-secondary/30 p-6 rounded-2xl border border-light/10">
            <FaUsers className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-light">Jane Smith</h3>
            <p className="text-midgray">Lead Designer</p>
            <p className="text-sm text-midgray mt-2">Expert in animations and dark themes.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center backdrop-blur-md bg-secondary/30 p-6 rounded-2xl border border-light/10">
            <FaUsers className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-light">Alex Johnson</h3>
            <p className="text-midgray">Developer</p>
            <p className="text-sm text-midgray mt-2">Specializes in React and GSAP.</p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;