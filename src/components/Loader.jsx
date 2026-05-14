import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2500; // 2.5 seconds total loading time
        const intervalTime = 30; // update frequency
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    // Wait a tiny bit at 100% before triggering complete
                    setTimeout(() => {
                        onComplete();
                    }, 400); // 400ms delay at 100%
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Determine how many squares to light up
    const totalSquares = 15;
    const activeSquares = Math.floor((progress / 100) * totalSquares);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030614] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-full max-w-md px-8 relative">
                {/* Percentage Counter */}
                <div className="flex justify-end mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-100 tracking-widest">
                        {Math.round(progress)}%
                    </span>
                </div>

                {/* Progress Bar (Squares) */}
                <div className="flex space-x-2 items-center justify-between w-full mb-3">
                    {Array.from({ length: totalSquares }).map((_, index) => {
                        const isActive = index < activeSquares;
                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    backgroundColor: isActive ? '#e2e8f0' : '#1e293b',
                                    scale: isActive ? 1.0 : 0.9,
                                }}
                                transition={{ duration: 0.2 }}
                                className="w-4 h-4 rounded-sm"
                            />
                        );
                    })}
                </div>

                {/* Loading Text */}
                <div className="flex justify-start">
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em]">
                        LOADING CONTENT
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
