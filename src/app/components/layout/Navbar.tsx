'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { siteConfig } from '@/app/config/site';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <Image
              src="/staco-data-solutions/images/sds_logo.png"
              alt="Staco Data Solutions Logo"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
            <span className="text-xl font-bold text-primary hover:opacity-90 transition-opacity">
              Staco Data Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                >
                  <Icon className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
                  }`} />
                  {item.name}
                </Link>
              );
            })}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-medium 
                  transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary 
              hover:bg-gray-50 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="px-4 py-2 bg-white/80 backdrop-blur-md space-y-1">
              {siteConfig.navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors
                      ${isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="pt-2 pb-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md 
                      text-sm font-medium transition-all duration-300 hover:bg-accent hover:shadow-lg 
                      hover:shadow-primary/20"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
