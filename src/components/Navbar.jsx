// Navbar.jsx (added more animations)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Components', 'Pricing', 'Contact', 'Help'];

  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className="fixed w-full z-20 bg-secondary/30 backdrop-blur-lg border-b border-light/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-light bg-clip-text bg-gradient-to-r from-primary to-accent">
          Componix UI
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#34D399' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="text-light hover:text-accent font-medium">
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signin" className="text-light hover:text-accent font-medium">
              Sign In
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="bg-accent text-secondary px-5 py-2 rounded-full font-bold hover:bg-primary hover:text-light transition-all"
            >
              Sign Up
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-3xl text-light"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-secondary/80 backdrop-blur-lg border-t border-light/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-light text-lg font-medium hover:text-accent"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signin" className="text-light text-lg font-medium hover:text-accent" onClick={toggleMenu}>
                  Sign In
                </Link>
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/signup"
                  className="bg-accent text-secondary px-6 py-3 rounded-full font-bold text-lg hover:bg-primary hover:text-light"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;