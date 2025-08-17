// Footer.jsx (added more links)
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTwitter, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    gsap.to('.newsletter-form', {
      opacity: 0.5,
      duration: 0.3,
      onComplete: () => {
        alert('Subscribed! (Placeholder)');
        gsap.to('.newsletter-form', { opacity: 1, duration: 0.3 });
      },
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="footer bg-secondary/40 backdrop-blur-lg border-t border-light/10 py-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Copyright */}
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <h3 className="text-2xl font-extrabold text-light bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Componix UI
          </h3>
          <p className="text-midgray text-sm">
            &copy; 2025 Componix UI. All rights reserved.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="text-center" variants={itemVariants}>
          <h4 className="text-lg font-bold text-accent mb-4 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/components" className="text-midgray hover:text-accent">Components</Link></li>
            <li><Link to="/pricing" className="text-midgray hover:text-accent">Pricing</Link></li>
            <li><Link to="/help" className="text-midgray hover:text-accent">Help</Link></li>
            <li><Link to="/contact" className="text-midgray hover:text-accent">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div className="text-center" variants={itemVariants}>
          <h4 className="text-lg font-bold text-accent mb-4 uppercase tracking-wide">
            Stay in the Loop
          </h4>
          <form
            onSubmit={handleNewsletterSubmit}
            className="newsletter-form flex justify-center gap-2"
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b-2 border-accent p-3 text-light placeholder-midgray focus:border-primary focus:outline-none rounded-none w-64"
              whileFocus={{ borderColor: '#6366F1', scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-accent text-secondary p-3 rounded-full hover:bg-primary hover:text-light transition-all"
              whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(52, 211, 153, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowRight />
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center md:justify-end gap-6" variants={itemVariants}>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, color: '#34D399' }}
            className="text-light text-3xl"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, color: '#34D399' }}
            className="text-light text-3xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, color: '#34D399' }}
            className="text-light text-3xl"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;