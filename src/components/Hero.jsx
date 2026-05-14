import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements (Parallax) */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/30 via-transparent to-transparent -z-20"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 w-full h-3/4 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent -z-10"
            />

            <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ opacity }}
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-[#808080] mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for Internships</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I&apos;m <span className="text-gradient">Jaswanth</span>
                    </h1>

                    <p className="text-xl text-[#b3b3b3] mb-8 max-w-lg leading-relaxed">
                        A <span className="text-white font-medium">Flutter & Full Stack Developer</span> and AI & ML enthusiast. I build scalable mobile apps and robust backend systems with modern architectures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-[#1a8fe3] transition-colors group">
                            View My Work
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a href="mailto:24p35a4237@acet.ac.in" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface border border-border font-semibold hover:bg-[#2d2d2d] transition-colors">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        {/* Profile Picture */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 9,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                            className="relative w-64 h-80 md:w-80 md:h-96 z-10 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] rounded-3xl overflow-hidden border border-cyan-500/30"
                        >
                            <img
                                src="/profile.jpg"
                                alt="Jaswanth"
                                className="w-full h-full object-cover"
                            />
                            {/* Inner glowing facets */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent mix-blend-overlay" />
                        </motion.div>

                        {/* Behind Glow */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bg-cyan-400 w-64 h-64 md:w-80 md:h-80 blur-[100px] rounded-full z-0"
                        />

                        {/* Floor Reflection */}
                        <motion.div
                            animate={{ scaleX: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 bg-cyan-300 w-64 md:w-96 h-12 blur-[40px] rounded-[100%] z-0"
                        />

                        {/* Stats Cards Reveal on scroll */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -right-2 md:-right-6 top-1/4 glass-card p-4 shadow-2xl z-20 border-cyan-900/50 bg-background/40"
                        >
                            <p className="text-2xl font-bold text-sky-100">8.59</p>
                            <p className="text-xs text-sky-400 uppercase tracking-widest">Current CGPA</p>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -left-2 md:-left-6 bottom-1/4 glass-card p-4 shadow-2xl z-20 border-cyan-900/50 bg-background/40"
                        >
                            <p className="text-2xl font-bold text-sky-100">5+</p>
                            <p className="text-xs text-sky-400 uppercase tracking-widest">Live Projects</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
