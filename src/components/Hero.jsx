import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements (Parallax) */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-1/4 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10"
            />

            <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ opacity }}
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for Internships</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I&apos;m <span className="text-gradient">Jaswanth</span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                        A <span className="text-white font-medium">Flutter & Full Stack Developer</span> and AI & ML enthusiast. I build scalable mobile apps and robust backend systems with modern architectures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors group">
                            View My Work
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a href="mailto:24p35a4237@acet.ac.in" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface border border-zinc-800 font-semibold hover:bg-zinc-900 transition-colors">
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
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-800 overflow-hidden relative group">
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl select-none opacity-20 group-hover:opacity-30 transition-opacity duration-500">VJ</span>
                        </div>
                    </div>

                    {/* Stats Cards Reveal on scroll */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="absolute -right-6 top-1/4 glass-card p-4 shadow-2xl"
                    >
                        <p className="text-2xl font-bold">8.59</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">Current CGPA</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="absolute -left-6 bottom-1/4 glass-card p-4 shadow-2xl"
                    >
                        <p className="text-2xl font-bold">5+</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">Live Projects</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
