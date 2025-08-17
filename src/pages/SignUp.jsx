// SignUp.jsx (already modern, added more fields like confirm password)
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaUser, FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';

const SignUp = () => {
  const formRef = useRef(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
    gsap.to(formRef.current, {
      opacity: 0.3,
      scale: 0.98,
      duration: 0.5,
      onComplete: () => {
        alert('Sign Up submitted! (Placeholder)');
        gsap.to(formRef.current, { opacity: 1, scale: 1, duration: 0.5 });
      },
    });
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
        Join the Future
      </motion.h1>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-secondary/20 backdrop-blur-lg p-8 rounded-3xl border border-light/10 shadow-2xl relative z-10"
        variants={itemVariants}
      >
        {/* Username Field */}
        <motion.div className="relative mb-6" variants={itemVariants}>
          <FaUser className="absolute top-4 left-4 text-accent" />
          <motion.input
            whileFocus={{ borderColor: '#6366F1', scale: 1.02 }}
            type="text"
            placeholder="Username"
            className="bg-transparent border-b-2 border-accent p-3 pl-12 text-light placeholder-midgray focus:border-primary focus:outline-none w-full rounded-none"
            required
          />
        </motion.div>

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

        {/* Confirm Password Field */}
        <motion.div className="relative mb-6" variants={itemVariants}>
          <FaLock className="absolute top-4 left-4 text-accent" />
          <motion.input
            whileFocus={{ borderColor: '#6366F1', scale: 1.02 }}
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-b-2 border-accent p-3 pl-12 text-light placeholder-midgray focus:border-primary focus:outline-none w-full rounded-none"
            required
          />
        </motion.div>

        {/* Terms and Conditions Checkbox */}
        <motion.div className="flex items-center gap-2 mb-8" variants={itemVariants}>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="appearance-none w-5 h-5 border-2 border-accent rounded-md checked:bg-accent checked:border-transparent focus:outline-none cursor-pointer"
          />
          <label htmlFor="terms" className="text-light text-sm">
            I agree to the <a href="#" className="text-accent hover:underline">Terms and Conditions</a>
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(52, 211, 153, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-accent text-secondary px-8 py-4 rounded-full font-bold w-full flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          Sign Up <FaCheckCircle />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default SignUp;