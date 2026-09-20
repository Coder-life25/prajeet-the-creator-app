"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CareerBatoForm from "@/components/career-bato/CareerBatoForm";

const ApplyModalContext = createContext({ open: () => {}, close: () => {} });

export function useApplyModal() {
  return useContext(ApplyModalContext);
}

export default function ApplyModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open modal automatically after 2 seconds on page load
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <ApplyModalContext.Provider value={{ open, close }}>
      {children}

      {/* ── MODAL FORM ────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto pt-20 pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-900 border border-dark-800/60 rounded-2xl p-6 sm:p-10 shadow-2xl m-auto"
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 text-dark-400 hover:text-white transition-colors bg-dark-800 hover:bg-dark-700 p-2 rounded-full z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <CareerBatoForm onClose={close} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ApplyModalContext.Provider>
  );
}
