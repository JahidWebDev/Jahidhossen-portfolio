import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, socials } from "../constants/navLinks";
import useWindowSize from "../hooks/useWindowSize";
import MagneticComponent from "../hoc/MagneticComponent";
import Separator from "../ui/Separator";
import {
  heightVariants,
  linkVariants,
  menuSlide,
  pathAnimation,
  widthVariants,
} from "../lib/animations";

const NavModal = ({ isOpen, onClose, startSplash }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [width, height] = useWindowSize();

  const animate = width > 1280 ? "xl" : width > 1024 ? "lg" : "base";

  const initialPath = `M200 0 L200 ${height} Q-200 ${height / 2} 200 0`;
  const targetPath = `M200 0 L200 ${height} Q200 ${height / 2} 200 0`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 h-screen w-full overflow-hidden bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed right-0 top-0 z-50 h-screen"
          >
            <motion.div
              animate={animate}
              variants={widthVariants}
              className="relative flex h-full flex-col justify-around border-l border-teal-500/20 bg-slate-900 shadow-2xl"
            >
              <motion.div
                animate={animate}
                variants={heightVariants}
                className="mx-auto my-auto flex min-h-[500px] w-3/4 flex-col justify-around xl:w-3/5"
              >
                {/* Navigation */}
                <div className="flex flex-col gap-y-4 uppercase">
                  <p className="text-xs tracking-widest text-white/40">Navigation</p>
                  <Separator className="bg-white/15" />
                </div>

                <div className="flex flex-col gap-y-2">
                  {navLinks.map((link, index) => {
                    const isPath = pathname === link.href;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          onClose();
                          if (pathname === link.href) window.location.reload();
                          else {
                            startSplash && startSplash();
                            navigate(link.href);
                          }
                        }}
                        className="w-fit cursor-pointer py-2 text-left hover:translate-x-1 transition-transform"
                      >
                        <motion.p
                          initial="initial"
                          animate="enter"
                          variants={linkVariants()}
                          className={`text-[2rem] lg:text-[3rem] xl:text-[4rem] ${
                            isPath ? "text-white" : "text-white/50 hover:text-white"
                          }`}
                        >
                          {link.title}
                        </motion.p>
                      </button>
                    );
                  })}
                </div>

                {/* Socials */}
                <div className="mt-4 flex flex-col gap-y-4">
                  <p className="text-xs uppercase tracking-widest text-white/40">Socials</p>
                  <div className="flex gap-x-4 xl:gap-x-8">
                    {socials.map((item, index) => (
                      <MagneticComponent key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-white/50 hover:text-white hover:underline"
                        >
                          {item.name}
                        </a>
                      </MagneticComponent>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* SVG Path */}
              <svg className="absolute -left-[199px] top-0 hidden h-full w-[200px] fill-slate-900 lg:block">
                <motion.path
                  variants={pathAnimation(initialPath, targetPath)}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavModal;