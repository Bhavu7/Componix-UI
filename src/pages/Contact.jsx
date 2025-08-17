// Contact.jsx
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(formRef.current, { opacity: 0, duration: 0.5, onComplete: () => alert('Form submitted! (Placeholder)') });
    gsap.to(formRef.current, { opacity: 1, duration: 0.5, delay: 0.5 });
  };

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
        Contact Us
      </motion.h1>
      
      <motion.p
        className="text-lg text-midgray mb-16 text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Get in touch for custom components, support, or collaborations. We're here to help with your Tailwind UI needs.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div ref={(el) => (sectionsRef.current[0] = el)} variants={itemVariants}>
          <h2 className="text-3xl font-bold text-secondary mb-8">Our Details</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-2xl" />
              <p className="text-midgray">support@tailwindui.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-primary text-2xl" />
              <p className="text-midgray">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <p className="text-midgray">123 UI Street, Design City, 90210</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-secondary/30 p-8 rounded-2xl border border-light/10"
          variants={itemVariants}
        >
          <motion.input
            whileFocus={{ borderColor: '#34D399', scale: 1.02 }}
            type="text"
            placeholder="Name"
            className="bg-transparent border-b-2 border-accent p-3 text-light placeholder-midgray focus:border-primary focus:outline-none w-full mb-6"
            required
          />
          <motion.input
            whileFocus={{ borderColor: '#34D399', scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="bg-transparent border-b-2 border-accent p-3 text-light placeholder-midgray focus:border-primary focus:outline-none w-full mb-6"
            required
          />
          <motion.textarea
            whileFocus={{ borderColor: '#34D399', scale: 1.02 }}
            placeholder="Message"
            className="bg-transparent border-b-2 border-accent p-3 text-light placeholder-midgray focus:border-primary focus:outline-none w-full mb-6 h-32"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(99, 102, 241, 0.5)' }}
            type="submit"
            className="bg-primary text-light px-6 py-3 rounded-full font-bold w-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;