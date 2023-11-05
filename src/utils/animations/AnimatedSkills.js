import { motion } from 'framer-motion';

const initial = { opacity: 0, x: 200 };
const animate = { opacity: 1, x: 0 };
const exit = { opacity: 0, x: 100 };

export const AnimatedSkills = ({ children }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
