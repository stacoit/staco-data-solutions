'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoadingStore } from '@/store/loading-store';
import Image from 'next/image';
import sdsLogo from '../../../public/sds_logo.svg';

const LOADER_DURATION = 1000; // 1 second for smoother transition

const RouteLoader = () => {
  const pathname = usePathname();
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, [pathname, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute w-24 h-24 border-4 border-primary/30 rounded-full"
            />

            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="absolute w-32 h-32 bg-primary/20 rounded-full"
            />

            <Image src={sdsLogo} alt="SDS Logo" width={96} height={96} className="relative w-24 h-24" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteLoader;
