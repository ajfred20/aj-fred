"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BlurMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          {/* Blur Background */}
          <div
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="relative z-10 h-full flex flex-col items-center justify-center gap-8"
          >
            <button onClick={onClose} className="absolute top-6 right-6">
              <X className="w-6 h-6" />
            </button>

            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/highlights", label: "Highlights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-medium hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
