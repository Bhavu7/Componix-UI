// Home.jsx (kept parallax as is, added more content like additional sections)
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ComponentCard from '../components/ComponentCard';
import PricingTier from '../components/PricingTier';
import Testimonial from '../components/Testimonial';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

    // Keep parallax animation intact for Hero background
    gsap.to('.hero-bg', {
      y: 150,
      scrollTrigger: {
        trigger: '.hero-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
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
    <div className="bg-neutral text-light">
      {/* Hero Section */}
      <Hero ref={(el) => (sectionsRef.current[0] = el)} className="hero-bg relative overflow-hidden" />

      {/* Features Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24 bg-gradient-to-br from-secondary to-neutral"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center text-accent mb-16 tracking-wide uppercase"
            variants={itemVariants}
          >
            Core Innovations
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-12 md:gap-16" variants={containerVariants}>
            <FeatureCard
              title="Adaptive Interfaces"
              description="Fluid designs that evolve with user interactions, powered by advanced responsiveness."
              icon={<FaCheckCircle className="text-primary text-5xl" />}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/30 border border-light/10 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform"
            />
            <FeatureCard
              title="Immersive Dynamics"
              description="Captivating animations that bring your UI to life with seamless motion."
              icon={<FaCheckCircle className="text-primary text-5xl" />}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/30 border border-light/10 rounded-2xl shadow-2xl transform hover:-rotate-1 transition-transform md:col-start-2"
            />
            <FeatureCard
              title="Intuitive Customization"
              description="Effortless tailoring with modular classes for rapid prototyping."
              icon={<FaCheckCircle className="text-primary text-5xl" />}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/30 border border-light/10 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform"
            />
            {/* Added more features */}
            <FeatureCard
              title="Dark Theme Mastery"
              description="Optimized for low-light environments with high contrast and readability."
              icon={<FaCheckCircle className="text-primary text-5xl" />}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/30 border border-light/10 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform"
            />
            <FeatureCard
              title="Performance Optimized"
              description="Lightweight components that load fast without sacrificing functionality."
              icon={<FaCheckCircle className="text-primary text-5xl" />}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/30 border border-light/10 rounded-2xl shadow-2xl transform hover:-rotate-1 transition-transform md:col-start-2"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Sample Components Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-50" />
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <motion.h2
            className="text-5xl font-extrabold text-center text-accent mb-16 tracking-wide uppercase"
            variants={itemVariants}
          >
            UI Elements Showcase
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-12" variants={containerVariants}>
            <ComponentCard
              name="Interactive Button"
              example={
                <motion.button
                  className="bg-accent text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)' }}
                >
                  Engage
                </motion.button>
              }
              variants={itemVariants}
              className="backdrop-blur-lg bg-light/5 p-8 rounded-3xl border border-accent/20 hover:border-accent transition-all"
            />
            <ComponentCard
              name="Elevated Card"
              example={
                <div className="bg-secondary/50 p-8 rounded-3xl shadow-xl backdrop-blur-md transform perspective-1000 rotate-y-5">
                  Elevated Content Layer
                </div>
              }
              variants={itemVariants}
              className="backdrop-blur-lg bg-light/5 p-8 rounded-3xl border border-accent/20 hover:border-accent transition-all"
            />
            <ComponentCard
              name="Smart Input"
              example={
                <input
                  className="bg-transparent border-b-2 border-accent p-4 w-full focus:border-primary focus:outline-none transition-all text-light placeholder-midgray"
                  placeholder="Type here..."
                />
              }
              variants={itemVariants}
              className="backdrop-blur-lg bg-light/5 p-8 rounded-3xl border border-accent/20 hover:border-accent transition-all"
            />
            {/* Added more components */}
            <ComponentCard
              name="Progress Bar"
              example={<div className="bg-midgray h-4 rounded-full"><motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="bg-accent h-full rounded-full" /></div>}
              variants={itemVariants}
              className="backdrop-blur-lg bg-light/5 p-8 rounded-3xl border border-accent/20 hover:border-accent transition-all"
            />
            <ComponentCard
              name="Avatar"
              example={<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-light font-bold">UI</div>}
              variants={itemVariants}
              className="backdrop-blur-lg bg-light/5 p-8 rounded-3xl border border-accent/20 hover:border-accent transition-all"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24 bg-gradient-to-br from-neutral to-secondary"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center text-accent mb-16 tracking-wide uppercase"
            variants={itemVariants}
          >
            Investment Tiers
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-12" variants={containerVariants}>
            <PricingTier
              tier="Essential"
              price="$0"
              features={['Core components access', 'Forum assistance', 'Basic documentation', 'Community updates']}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/40 border border-light/20 rounded-2xl shadow-xl"
            />
            <PricingTier
              tier="Advanced"
              price="$39/mo"
              features={['Full library', 'Dedicated support', 'Bespoke designs', 'Priority updates', 'Custom animations']}
              highlighted
              variants={itemVariants}
              className="backdrop-blur-md bg-accent/20 border-2 border-accent rounded-2xl shadow-2xl scale-105"
            />
            <PricingTier
              tier="Corporate"
              price="Inquire"
              features={['Enterprise scalability', 'Custom team', 'API enhancements', 'On-site training', 'Exclusive components']}
              variants={itemVariants}
              className="backdrop-blur-md bg-secondary/40 border border-light/20 rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center text-accent mb-16 tracking-wide uppercase"
            variants={itemVariants}
          >
            Voices of Innovation
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants}>
            <Testimonial
              quote="Revolutionized our design process with futuristic flair!"
              author="Alex Rivera, Tech Visionary"
              variants={itemVariants}
              className="p-8 bg-secondary/30 backdrop-blur-lg rounded-xl border border-primary/30 hover:shadow-primary/20 transition-shadow"
            />
            <Testimonial
              quote="A blend of nostalgia and modernity that's truly inspiring."
              author="Morgan Lee, Creative Director"
              variants={itemVariants}
              className="p-8 bg-secondary/30 backdrop-blur-lg rounded-xl border border-primary/30 hover:shadow-primary/20 transition-shadow"
            />
            {/* Added more testimonials */}
            <Testimonial
              quote="These components saved us weeks of development time."
              author="Sam Taylor, Developer Lead"
              variants={itemVariants}
              className="p-8 bg-secondary/30 backdrop-blur-lg rounded-xl border border-primary/30 hover:shadow-primary/20 transition-shadow"
            />
            <Testimonial
              quote="Perfect for dark mode apps – sleek and professional."
              author="Jordan Kim, UI Designer"
              variants={itemVariants}
              className="p-8 bg-secondary/30 backdrop-blur-lg rounded-xl border border-primary/30 hover:shadow-primary/20 transition-shadow"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* New Section: Why Choose Us */}
      <motion.section
        ref={(el) => (sectionsRef.current[5] = el)}
        className="py-24 bg-gradient-to-br from-secondary to-neutral"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center text-accent mb-16 tracking-wide uppercase"
            variants={itemVariants}
          >
            Why Choose Tailwind UI
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-12" variants={containerVariants}>
            <FeatureCard
              title="Developer-Friendly"
              description="Easy integration with React, Vite, and Tailwind."
              icon={<FaCode className="text-primary text-5xl" />}
              variants={itemVariants}
            />
            <FeatureCard
              title="Community Driven"
              description="Built with feedback from thousands of developers."
              icon={<FaUsers className="text-primary text-5xl" />}
              variants={itemVariants}
            />
            <FeatureCard
              title="Future-Proof"
              description="Regular updates to keep up with web trends."
              icon={<FaRocket className="text-primary text-5xl" />}
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={(el) => (sectionsRef.current[6] = el)}
        className="py-24 bg-gradient-to-r from-primary to-accent text-light text-center relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,...')] bg-repeat" /> {/* Placeholder for organic pattern */}
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <motion.h2
            className="text-5xl font-extrabold mb-8 tracking-wide uppercase"
            variants={itemVariants}
          >
            Ignite Your Project
          </motion.h2>
          <motion.p className="text-xl mb-12 max-w-3xl mx-auto" variants={itemVariants}>
            Embrace the future of web design with our cutting-edge Tailwind UI toolkit. Start building today!
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 6px 20px rgba(52, 211, 153, 0.5)' }}
              whileTap={{ scale: 0.9 }}
              className="bg-light text-secondary px-10 py-5 rounded-full font-bold text-xl shadow-lg"
            >
              Launch Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;