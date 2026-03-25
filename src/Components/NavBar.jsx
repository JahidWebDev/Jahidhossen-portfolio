'use client';

import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/navLinks'; // Make sure this file exists

import MagneticComponent from './MagneticComponent';
import CodeBy from './CodeBy';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-slate-900/80'
      }`}
    >
      {/* Logo */}
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-x-8">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <MagneticComponent key={index} modifier={{ x: 0.3, y: 0.3 }}>
              <motion.div
                whileHover={{ y: -2, scale: 1.05 }}
                className={`relative cursor-pointer px-2 py-1 transition-colors duration-300 ${
                  isActive ? 'text-teal-500 font-semibold' : 'text-white'
                }`}
              >
                <Link to={link.href}>{link.title}</Link>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500"
                  />
                )}
              </motion.div>
            </MagneticComponent>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 rounded hover:bg-slate-700/50 transition"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900 flex flex-col items-center gap-y-4 py-6 md:hidden"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium hover:text-teal-500 transition"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;