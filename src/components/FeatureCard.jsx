// FeatureCard.jsx (kept as is, already modern)
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({ title, description, icon, className, variants }) => {
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
      className={`relative p-8 bg-secondary/20 backdrop-blur-lg border border-light/10 rounded-3xl text-center transform perspective-1000 overflow-hidden ${className}`}
    >
      {/* Subtle Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        animate={{ opacity: [0.3, 0.5], scale: [1, 1.05] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
      />

      {/* Icon */}
      {icon && (
        <motion.div
          className="text-5xl text-accent mb-6 relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold text-light mb-4 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-midgray text-sm mb-6 max-w-xs mx-auto relative z-10">{description}</p>

      {/* Learn More Button */}
      <motion.button
        className="flex items-center gap-2 mx-auto bg-transparent border border-accent text-accent px-5 py-2 rounded-full hover:bg-accent hover:text-secondary transition-all relative z-10"
        whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(52, 211, 153, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('Learn More (Placeholder)')}
      >
        Learn More <FaArrowRight />
      </motion.button>
    </motion.div>
  );
};

export default FeatureCard;