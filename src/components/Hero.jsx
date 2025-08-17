// Hero.jsx (kept as is)
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = forwardRef(({ className, ...props }, ref) => {
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
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-light relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] bg-repeat opacity-10" /> {/* Organic pattern placeholder */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="text-center max-w-5xl mx-auto px-8 relative z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-light to-accent"
          variants={itemVariants}
        >
          Unleash Epic UI with Tailwind
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Transform your web projects with cutting-edge, animated UI components designed for the future.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(52, 211, 153, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-secondary px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 mx-auto"
          >
            Explore Now <FaArrowRight className="text-accent" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Orbs for Futuristic Effect */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-accent/30 rounded-full blur-xl"
        animate={{ y: [-20, 20], scale: [1, 1.2] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-primary/30 rounded-full blur-xl"
        animate={{ y: [20, -20], scale: [1.2, 1] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4 }}
      />
    </motion.section>
  );
});

export default Hero;