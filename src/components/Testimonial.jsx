// Testimonial.jsx (added avatar animation)
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ quote, author, rating = 5, className, variants }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={variants || itemVariants}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: 5,
        boxShadow: '0 12px 24px rgba(99, 102, 241, 0.3)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-8 bg-secondary/20 backdrop-blur-lg border border-light/10 rounded-3xl transform perspective-1000 overflow-hidden ${className}`}
    >
      {/* Subtle Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        animate={{ opacity: [0.3, 0.5], scale: [1, 1.05] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
      />

      {/* Avatar Placeholder */}
      <motion.div
        className="w-16 h-16 bg-accent/30 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-light text-2xl font-bold">{author[0]}</span>
      </motion.div>

      {/* Quote */}
      <p className="text-light italic text-base mb-6 max-w-xs mx-auto relative z-10">"{quote}"</p>

      {/* Author */}
      <p className="text-light font-semibold text-lg mb-4 relative z-10">{author}</p>

      {/* Rating */}
      <div className="flex justify-center gap-1 relative z-10">
        {[...Array(rating)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <FaStar className="text-accent text-lg" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;