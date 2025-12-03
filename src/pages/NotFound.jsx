import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import LiquidBlob from '../components/animated/LiquidBlob';
import Button from '../components/ui/Button';
import MagneticButton from '../components/animated/MagneticButton';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs */}
      <LiquidBlob color="coral" size="xlarge" className="top-0 right-0 opacity-10" />
      <LiquidBlob color="gold" size="large" className="bottom-0 left-0 opacity-10" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 */}
          <h1 className="font-display text-[12rem] md:text-[20rem] font-bold text-coral leading-none mb-8">
            404
          </h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="font-display text-h2 text-cream mb-4">
              This Page Got Lost in the Creative Process
            </h2>
            <p className="text-body-lg text-gray-soft mb-12 max-w-2xl mx-auto">
              Looks like you've wandered into uncharted territory. Don't worry—even the best campaigns have the occasional redirect.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Button href="/" size="lg">
                <Home className="mr-2" size={20} />
                Back to Home
              </Button>
            </MagneticButton>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </motion.div>

          {/* Fun Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-sm text-gray-soft italic"
          >
            "Sometimes the best ideas come from getting lost."
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
