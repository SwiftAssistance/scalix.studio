import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { hoverScale } from '../../utils/animations';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'font-heading font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-coral text-charcoal hover:bg-gold hover:shadow-glow',
    secondary: 'bg-cream text-charcoal hover:bg-gold',
    outline: 'border-2 border-coral text-coral hover:bg-coral hover:text-charcoal',
    ghost: 'text-cream hover:text-coral hover:bg-cream/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const MotionComponent = motion(href ? 'a' : 'button');

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={buttonClasses}
      variants={hoverScale}
      initial="rest"
      whileHover={!disabled ? "hover" : "rest"}
      whileTap={!disabled ? "tap" : "rest"}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
