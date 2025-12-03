import { clsx } from 'clsx';

const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-coral/20 text-coral border-coral/30',
    gold: 'bg-gold/20 text-gold border-gold/30',
    cream: 'bg-cream/20 text-cream border-cream/30',
  };

  const badgeClasses = clsx(
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-semibold border',
    variants[variant],
    className
  );

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
