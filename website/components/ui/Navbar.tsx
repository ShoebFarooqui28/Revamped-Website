"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Home, Info, Phone } from "lucide-react";

const links = [
  { name: "Home", url: "/home", icon: <Home size={24} /> },
  { name: "About", url: "/about", icon: <Info size={24} /> },
  { name: "Contact", url: "/contact", icon: <Phone size={24} /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (url: string) => pathname === url;

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center p-6">
        <motion.nav
          className="flex gap-30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              className="flex flex-col items-center"
              variants={linkVariants}
            >
              <a
                href={link.url}
                className={`text-2xl font-italiana ${
                  isActive(link.url) ? "text-foreground" : "text-gray-400"
                }`}
              >
                {link.name}
              </a>
              {isActive(link.url) && (
                <motion.div
                  className="w-2 h-2 mt-1 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </motion.nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-background border-t py-4 px-8 md:hidden">
        <motion.nav
          className="flex justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              className="flex flex-col items-center text-foreground"
              variants={linkVariants}
              whileHover="hover"
            >
              <a href={link.url} className="flex flex-col items-center">
                {link.icon}
              </a>
              {isActive(link.url) && (
                <motion.div
                  layoutId="active-dot"
                  className="w-1 h-1 mt-1 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
