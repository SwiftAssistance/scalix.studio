import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const ScrollReveal = ({
  children,
  className = '',
  variant = fadeInUp,
  delay = 0,
  ...props
}) => {
  // Add delay to the variant
  const variantWithDelay = {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variantWithDelay}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
