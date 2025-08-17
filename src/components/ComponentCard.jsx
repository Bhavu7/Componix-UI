// COMPONENTS :

// ComponentCard.jsx (enhanced with better code display)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaCopy, FaBook } from 'react-icons/fa';

const ComponentCard = ({ name, example, description = 'A versatile UI component for modern applications.', codeSnippet = '', className, variants }) => {
  const [showCode, setShowCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    alert('Code copied to clipboard!');
  };

  const codeVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: 5,
        boxShadow: '0 12px 24px rgba(99, 102, 241, 0.3)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.95 }}
      className={`p-8 bg-secondary/20 backdrop-blur-lg border border-light/10 rounded-3xl text-center transform perspective-1000 ${className}`}
    >
      {/* Component Name */}
      <h3 className="text-2xl font-bold text-light mb-4 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        {name}
      </h3>

      {/* Component Example */}
      <div className="flex justify-center items-center mb-6">{example}</div>

      {/* Description */}
      <p className="text-midgray text-sm mb-6 max-w-xs mx-auto">{description}</p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <motion.button
          className="flex items-center gap-2 bg-transparent border border-accent text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-secondary transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCode(!showCode)}
        >
          <FaCode /> {showCode ? 'Hide Code' : 'Show Code'}
        </motion.button>
        <motion.button
          className="flex items-center gap-2 bg-accent text-secondary px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('View Documentation (Placeholder)')}
        >
          <FaBook /> View Docs
        </motion.button>
      </div>

      {/* Code Snippet */}
      <AnimatePresence>
        {showCode && (
          <motion.div
            variants={codeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-secondary/50 p-4 rounded-xl text-left text-light text-sm relative overflow-auto max-h-48"
          >
            <pre className="overflow-x-auto">
              <code>{codeSnippet || `// Sample ${name} code\n<${name.toLowerCase()} className="bg-primary text-light ..." />`}</code>
            </pre>
            <motion.button
              className="absolute top-2 right-2 text-accent hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopyCode}
            >
              <FaCopy />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ComponentCard;