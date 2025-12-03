import { motion } from 'framer-motion';
import { textReveal, staggerContainer } from '../../utils/animations';

const SplitText = ({ children, className = '', delay = 0 }) => {
  const words = children.split(' ');

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}
    >
      {words.map((word, i) => (
        <div key={i} style={{ overflow: 'hidden' }}>
          <motion.span
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: delay + i * 0.05,
                },
              },
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default SplitText;
