import { motion } from 'framer-motion';
import { blobMorph } from '../../utils/animations';

const LiquidBlob = ({ color = 'coral', size = 'large', className = '' }) => {
  const sizes = {
    small: 'w-32 h-32',
    medium: 'w-64 h-64',
    large: 'w-96 h-96',
    xlarge: 'w-[600px] h-[600px]',
  };

  const colors = {
    coral: 'bg-coral',
    gold: 'bg-gold',
    navy: 'bg-navy',
  };

  return (
    <motion.div
      className={`blob rounded-full ${sizes[size]} ${colors[color]} ${className}`}
      variants={blobMorph}
      animate="animate"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
      }}
    />
  );
};

export default LiquidBlob;
