'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoadingStore } from '@/store/loading-store';

const LOADER_DURATION = 750; // 750ms = 0.75 seconds

const RouteLoader = () => {
  const pathname = usePathname();
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
        >
          <div className="relative">
            <motion.div 
              className="w-24 h-24 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.75, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary 
                    clip-path-hexagon animate-pulse filter blur-[2px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary 
                    clip-path-hexagon animate-glitch" />
                  
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/30 clip-path-hexagon"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 0.75, ease: "linear", repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-primary/20 clip-path-hexagon mix-blend-overlay"
              animate={{ 
                x: [-2, 2, -2],
                y: [2, -2, 2],
              }}
              transition={{ 
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute inset-0 m-auto w-4 h-4 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <style jsx global>{`
            @keyframes glitch {
              0% {
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                transform: scale(1);
              }
              25% {
                clip-path: polygon(49% -1%, 101% 24%, 101% 76%, 51% 101%, -1% 76%, -1% 24%);
                transform: scale(1.01);
              }
              50% {
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                transform: scale(1);
              }
              75% {
                clip-path: polygon(51% 1%, 99% 26%, 99% 74%, 49% 99%, 1% 74%, 1% 26%);
                transform: scale(0.99);
              }
              100% {
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                transform: scale(1);
              }
            }

            .clip-path-hexagon {
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            }

            .animate-glitch {
              animation: glitch 0.3s ease infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteLoader;
