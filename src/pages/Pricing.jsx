// Pricing.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PricingTier from '../components/PricingTier';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
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
        Pricing Plans
      </motion.h1>
      
      <motion.p
        className="text-lg text-midgray mb-16 text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Choose a plan that fits your needs. All plans include access to our Tailwind UI components with dark theme support.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        <PricingTier 
          tier="Basic" 
          price="$0" 
          features={['Access to free components', 'Community support', 'Basic documentation', 'Limited animations']} 
          variants={itemVariants}
        />
        <PricingTier 
          tier="Pro" 
          price="$29/mo" 
          features={['All components', 'Priority support', 'Custom themes', 'Advanced animations', 'Monthly updates']} 
          highlighted 
          variants={itemVariants}
        />
        <PricingTier 
          tier="Enterprise" 
          price="Contact Us" 
          features={['Unlimited access', 'Dedicated team', 'API integration', 'Custom development', 'On-site training']} 
          variants={itemVariants}
        />
      </div>

      <motion.div ref={(el) => (sectionsRef.current[0] = el)} className="mt-16 text-center" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-secondary mb-8">Frequently Asked Questions</h2>
        <p className="text-midgray mb-4">Can I upgrade later? Yes, anytime.</p>
        <p className="text-midgray mb-4">Is there a trial? Pro plan has a 14-day trial.</p>
        <p className="text-midgray">Payment methods: Credit card, PayPal.</p>
      </motion.div>
    </motion.div>
  );
};

export default Pricing;