import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ isVisible, onComplete }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onAnimationComplete={(definition) => {
                        if (definition.opacity === 0) {
                            onComplete?.();
                        }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1E56E8]"
                >
                    {/* Subtle background effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                            <Image
                                src="/derbykids.jpeg"
                                alt="Derby Kids Online School"
                                fill
                                sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 256px"
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Loading indicator */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "linear" }}
                            className="mt-6 h-1 bg-[#FBBF24] rounded-full mx-auto max-w-[200px]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
