import { motion, useScroll, useTransform } from 'framer-motion';

const Background3D = () => {
    const { scrollYProgress } = useScroll();

    // Create 3D parallax depth layers by mapping scroll progress to different vertical translations
    // The larger the range, the closer the objects appear (they move faster)
    const yBack = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
    const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const yFront = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    return (
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#040b16]">
            {/* Ambient Base Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-blue-950/20 via-[#040b16] to-[#040b16]" />

            {/* Deep Background (Slowest - moves slightly up as you scroll down) */}
            <motion.div style={{ y: yBack }} className="absolute top-0 left-0 w-full h-[200vh]">
                <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
                <div className="absolute top-[50%] right-[10%] w-[800px] h-[800px] bg-indigo-900/5 rounded-full blur-[150px]" />
                <div className="absolute top-[80%] left-[30%] w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[120px]" />
            </motion.div>

            {/* Midground (Medium Speed - creates the 3D depth illusion) */}
            <motion.div style={{ y: yMid }} className="absolute top-0 left-0 w-full h-[250vh]">
                <div className="absolute top-[15%] right-[25%] w-[400px] h-[400px] bg-cyan-800/10 rounded-full blur-[80px]" />
                <div className="absolute top-[45%] left-[15%] w-[500px] h-[500px] bg-blue-800/10 rounded-[100%] blur-[100px]" />
                <div className="absolute top-[85%] right-[20%] w-[450px] h-[450px] bg-sky-700/10 rounded-full blur-[90px]" />

                {/* Floating "Crystals" faintly visible in the midground */}
                <div className="absolute top-[25%] left-[80%] w-20 h-20 bg-cyan-400/5 rotate-45 blur-[4px]" />
                <div className="absolute top-[65%] right-[75%] w-32 h-32 bg-blue-500/5 rotate-12 blur-[6px]" />

                {/* 3D Glass Stacks (Isometric perspective rotating) */}
                <div className="absolute top-[40%] right-[10%] w-32 h-32 md:w-48 md:h-48" style={{ perspective: '1000px' }}>
                    <motion.div
                        className="w-full h-full"
                        animate={{ y: [-15, 15, -15], rotateZ: [0, 360], rotateX: 60 }}
                        transition={{
                            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            rotateZ: { duration: 25, repeat: Infinity, ease: "linear" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/20 bg-cyan-900/10 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.1)]" style={{ transform: 'translateZ(-60px)' }} />
                        <div className="absolute inset-0 rounded-[2rem] border border-cyan-200/30 bg-cyan-600/10 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]" style={{ transform: 'translateZ(-30px)' }} />
                        <div className="absolute inset-0 rounded-[2rem] border-2 border-cyan-100/40 bg-cyan-400/10 backdrop-blur-lg shadow-[0_0_40px_rgba(6,182,212,0.4)_inset]" />
                    </motion.div>
                </div>

                <div className="absolute top-[75%] left-[10%] w-32 h-32 md:w-48 md:h-48" style={{ perspective: '1000px' }}>
                    <motion.div
                        className="w-full h-full"
                        animate={{ y: [-20, 20, -20], rotateZ: [360, 0], rotateX: 60 }}
                        transition={{
                            y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            rotateZ: { duration: 35, repeat: Infinity, ease: "linear" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 rounded-[2rem] border border-sky-300/20 bg-sky-900/10 backdrop-blur-sm shadow-[0_0_20px_rgba(14,165,233,0.1)]" style={{ transform: 'translateZ(-60px)' }} />
                        <div className="absolute inset-0 rounded-[2rem] border border-sky-200/30 bg-sky-600/10 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.2)]" style={{ transform: 'translateZ(-30px)' }} />
                        <div className="absolute inset-0 rounded-[2rem] border-2 border-sky-100/40 bg-sky-400/10 backdrop-blur-lg shadow-[0_0_40px_rgba(14,165,233,0.4)_inset]" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Foreground Particles (Fastest) */}
            <motion.div style={{ y: yFront }} className="absolute top-0 left-0 w-full h-[300vh]">
                <div className="absolute top-[10%] left-[5%] w-4 h-4 bg-sky-300/10 rounded-full blur-[1px]" />
                <div className="absolute top-[30%] right-[15%] w-6 h-6 bg-cyan-300/10 rounded-full blur-[2px]" />
                <div className="absolute top-[55%] left-[20%] w-8 h-8 bg-blue-300/10 rounded-full blur-[2px]" />
                <div className="absolute top-[75%] right-[8%] w-5 h-5 bg-sky-200/10 rounded-full blur-[1px]" />
                <div className="absolute top-[90%] left-[50%] w-10 h-10 bg-cyan-400/10 rounded-full blur-[3px]" />
            </motion.div>

            {/* Optional subtle noise overlay for realistic lighting texture */}
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')", opacity: 0.15 }} />
        </div>
    );
};

export default Background3D;
