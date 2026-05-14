import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseCursor = () => {
    const [isActive, setIsActive] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const springX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 });

    useEffect(() => {
        const updatePosition = (event) => {
            x.set(event.clientX);
            y.set(event.clientY);
            setIsActive(true);
        };

        const hideCursor = () => setIsActive(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, [x, y]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
            <motion.div
                className="absolute top-0 left-0 h-10 w-10 rounded-full border border-[#007acc]/60 bg-[#007acc]/10 backdrop-blur-sm"
                style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
                animate={{ scale: isActive ? 1 : 0.7, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-[#9cdcfe] shadow-[0_0_18px_rgba(0,122,204,0.9)]"
                style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.12 }}
            />
        </div>
    );
};

export default MouseCursor;