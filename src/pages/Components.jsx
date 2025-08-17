// Components.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComponentCard from '../components/ComponentCard';

gsap.registerPlugin(ScrollTrigger);

const Components = () => {
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
        Component Library
      </motion.h1>
      
      <motion.p
        className="text-lg text-midgray mb-16 text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Explore our collection of modern, animated Tailwind UI components. Each is customizable, responsive, and ready for dark themes.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        <ComponentCard 
          name="Alert" 
          example={<div className="bg-accent text-secondary p-4 rounded-lg shadow-lg">Success Alert!</div>} 
          description="Customizable alert boxes for notifications."
          codeSnippet={`<div className="bg-accent text-secondary p-4 rounded-lg shadow-lg">Success Alert!</div>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Modal" 
          example={<div className="bg-secondary p-6 rounded-lg shadow-xl border border-light/10">Modal Content</div>} 
          description="Overlay modals with animations."
          codeSnippet={`<div className="bg-secondary p-6 rounded-lg shadow-xl border border-light/10">Modal Content</div>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Dropdown" 
          example={<select className="bg-secondary border border-accent p-2 rounded text-light"><option>Option 1</option></select>} 
          description="Styled dropdown menus."
          codeSnippet={`<select className="bg-secondary border border-accent p-2 rounded text-light"><option>Option 1</option></select>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Button" 
          example={<button className="bg-primary text-light px-4 py-2 rounded hover:bg-accent">Click Me</button>} 
          description="Interactive buttons with hover effects."
          codeSnippet={`<button className="bg-primary text-light px-4 py-2 rounded hover:bg-accent">Click Me</button>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Card" 
          example={<div className="bg-secondary p-4 rounded-lg shadow-md">Card Content</div>} 
          description="Versatile card components for layouts."
          codeSnippet={`<div className="bg-secondary p-4 rounded-lg shadow-md">Card Content</div>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Tooltip" 
          example={<div className="relative group"><button>Hover</button><span className="absolute hidden group-hover:block bg-accent p-2 rounded">Tooltip</span></div>} 
          description="Simple tooltips on hover."
          codeSnippet={`<div className="relative group"><button>Hover</button><span className="absolute hidden group-hover:block bg-accent p-2 rounded">Tooltip</span></div>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Accordion" 
          example={<details className="bg-secondary p-4 rounded"><summary>Question</summary><p>Answer</p></details>} 
          description="Collapsible accordion sections."
          codeSnippet={`<details className="bg-secondary p-4 rounded"><summary>Question</summary><p>Answer</p></details>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Progress Bar" 
          example={<div className="bg-midgray h-2 rounded"><div className="bg-accent h-full w-1/2"></div></div>} 
          description="Animated progress indicators."
          codeSnippet={`<div className="bg-midgray h-2 rounded"><div className="bg-accent h-full w-1/2"></div></div>`}
          variants={itemVariants}
        />
        <ComponentCard 
          name="Tabs" 
          example={<div className="flex"><button className="bg-accent p-2">Tab 1</button><button className="bg-secondary p-2">Tab 2</button></div>} 
          description="Tabbed interfaces for content switching."
          codeSnippet={`<div className="flex"><button className="bg-accent p-2">Tab 1</button><button className="bg-secondary p-2">Tab 2</button></div>`}
          variants={itemVariants}
        />
      </div>
    </motion.div>
  );
};

export default Components;