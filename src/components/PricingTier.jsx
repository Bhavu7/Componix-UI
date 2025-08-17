// PricingTier.jsx (added more features display animation)
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingTier = ({ tier, price, features, highlighted = false, className, variants }) => {
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
      className={`relative p-8 bg-secondary/20 backdrop-blur-lg border ${highlighted ? 'border-accent/50' : 'border-light/10'} rounded-3xl text-center transform perspective-1000 overflow-hidden ${highlighted ? 'scale-105' : ''} ${className}`}
    >
      {/* Subtle Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        animate={{ opacity: [0.3, 0.5], scale: [1, 1.05] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
      />

      {/* Popular Badge for Highlighted Tier */}
      {highlighted && (
        <motion.div
          className="absolute top-4 right-4 bg-accent text-secondary text-xs font-bold uppercase px-3 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Popular
        </motion.div>
      )}

      {/* Tier Title */}
      <h3 className="text-2xl font-bold text-light mb-4 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent relative z-10">
        {tier}
      </h3>

      {/* Price */}
      <p className="text-3xl font-extrabold text-light mb-6 relative z-10">
        {price}
        {price !== 'Contact Us' && <span className="text-sm text-midgray font-normal"> /month</span>}
      </p>

      {/* Features List */}
      <ul className="text-midgray text-sm mb-8 max-w-xs mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 mb-3 justify-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <FaCheck className="text-accent" /> {feature}
          </motion.li>
        ))}
      </ul>

      {/* Choose Plan Button */}
      <motion.button
        className={`flex items-center gap-2 mx-auto ${highlighted ? 'bg-accent text-secondary' : 'bg-transparent border border-accent text-accent'} px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-light transition-all relative z-10`}
        whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(52, 211, 153, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert(`Choose ${tier} Plan (Placeholder)`)}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

export default PricingTier;