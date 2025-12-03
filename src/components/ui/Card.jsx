import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { hoverLift } from '../../utils/animations';

const Card = ({
  children,
  className,
  hoverable = true,
  padding = 'lg',
  ...props
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const cardClasses = clsx(
    'bg-navy rounded-xl',
    paddingSizes[padding],
    hoverable && 'cursor-pointer',
    className
  );

  if (hoverable) {
    return (
      <motion.div
        className={cardClasses}
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
