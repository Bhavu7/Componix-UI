// Help.jsx
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Help = () => {
  const [open, setOpen] = useState(null);
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

  const faqs = [
    { q: 'How do I install the components?', a: 'Copy the code snippet and import into your Tailwind project. Ensure Framer Motion or GSAP is installed for animations.' },
    { q: 'Are the components responsive?', a: 'Yes, all components are built with Tailwind\'s responsive utilities.' },
    { q: 'Can I customize the colors?', a: 'Absolutely, override the theme colors in your Tailwind config.' },
    { q: 'What if I need custom components?', a: 'Contact us for bespoke development services.' },
    { q: 'Is there a refund policy?', a: 'Yes, 30-day money-back guarantee on all plans.' },
    { q: 'How often are components updated?', a: 'Monthly updates with new components and improvements.' },
    { q: 'Do you support light themes?', a: 'Currently focused on dark themes, but light mode support is in the roadmap.' },
  ];

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
        Help & FAQs
      </motion.h1>
      
      <motion.p
        className="text-lg text-midgray mb-16 text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Find answers to common questions about our Tailwind UI components, installation, and usage.
      </motion.p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div key={index} className="mb-6 backdrop-blur-md bg-secondary/30 p-4 rounded-2xl border border-light/10" variants={itemVariants}>
            <motion.button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left text-xl font-semibold text-secondary flex justify-between items-center"
            >
              {faq.q}
              <span>{open === index ? '-' : '+'}</span>
            </motion.button>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-midgray mt-4"
              >
                {faq.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Help;