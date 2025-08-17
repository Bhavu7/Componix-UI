// SignIn.jsx
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const SignIn = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(formRef.current, { opacity: 0, duration: 0.5, onComplete: () => alert('Sign In submitted! (Placeholder)') });
    gsap.to(formRef.current, { opacity: 1, duration: 0.5, delay: 0.5 });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-6 py-20 bg-neutral relative overflow-hidden"
    >
      {/* Subtle Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        animate={{ opacity: [0.3, 0.5], scale: [1, 1.05] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-center text-light mb-12 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        variants={itemVariants}
      >
        Sign In
      </motion.h1>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-secondary/20 backdrop-blur-lg p-8 rounded-3xl border border-light/10 shadow-2xl relative z-10"
        variants={itemVariants}
      >
        {/* Email Field */}
        <motion.div className="relative mb-6" variants={itemVariants}>
          <FaEnvelope className="absolute top-4 left-4 text-accent" />
          <motion.input
            whileFocus={{ borderColor: '#6366F1', scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="bg-transparent border-b-2 border-accent p-3 pl-12 text-light placeholder-midgray focus:border-primary focus:outline-none w-full rounded-none"
            required
          />
        </motion.div>

        {/* Password Field */}
        <motion.div className="relative mb-6" variants={itemVariants}>
          <FaLock className="absolute top-4 left-4 text-accent" />
          <motion.input
            whileFocus={{ borderColor: '#6366F1', scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="bg-transparent border-b-2 border-accent p-3 pl-12 text-light placeholder-midgray focus:border-primary focus:outline-none w-full rounded-none"
            required
          />
        </motion.div>

        {/* Forgot Password */}
        <motion.a
          href="#"
          className="text-accent text-sm hover:underline block mb-6"
          variants={itemVariants}
        >
          Forgot Password?
        </motion.a>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(52, 211, 153, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-accent text-secondary px-8 py-4 rounded-full font-bold w-full flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          Sign In <FaSignInAlt />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default SignIn;