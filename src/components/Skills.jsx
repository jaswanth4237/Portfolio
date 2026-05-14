import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Layers,
    Terminal,
    Smartphone,
    Cpu,
    Monitor
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 size={20} />,
            skills: ["Dart", "Python", "Java", "JavaScript", "Node.js"]
        },
        {
            title: "Mobile",
            icon: <Smartphone size={20} />,
            skills: ["Flutter", "Riverpod", "Bloc", "MVVM"]
        },
        {
            title: "Backend",
            icon: <Layers size={20} />,
            skills: ["Kafka", "CQRS", "Event Sourcing", "REST APIs"]
        },
        {
            title: "Databases",
            icon: <Database size={20} />,
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Hive"]
        },
        {
            title: "Tools & DevOps",
            icon: <Terminal size={20} />,
            skills: ["Git", "Docker", "GitHub Actions", "CI/CD"]
        },
        {
            title: "AI & ML",
            icon: <Cpu size={20} />,
            skills: ["Generative AI", "Data Structures", "Algorithms"]
        }
    ];

    return (
        <section id="skills" className="section-padding scroll-mt-20 relative">
            <div className="absolute top-[10%] left-[-5%] w-32 h-32 md:w-56 md:h-56 pointer-events-none -z-10 opacity-80" style={{ perspective: '1000px' }}>
                <motion.div
                    className="w-full h-full"
                    animate={{ y: [-20, 20, -20], rotateZ: [0, 360], rotateX: 60 }}
                    transition={{
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 25, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/40 bg-cyan-900/20 backdrop-blur-sm shadow-[0_0_40px_rgba(6,182,212,0.3)]" style={{ transform: 'translateZ(-60px)' }} />
                    <div className="absolute inset-0 rounded-[2rem] border border-cyan-200/50 bg-cyan-600/20 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.3)]" style={{ transform: 'translateZ(-30px)' }} />
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-cyan-100/60 bg-cyan-400/20 backdrop-blur-lg shadow-[0_0_60px_rgba(6,182,212,0.5)_inset]" />
                </motion.div>
            </div>

            {/* Opposite side: glowing spinning circle/orb */}
            <div className="absolute top-[40%] right-[-3%] w-28 h-28 md:w-52 md:h-52 pointer-events-none -z-10 opacity-70">
                <motion.div
                    className="w-full h-full rounded-full border-2 border-cyan-400/30 bg-transparent"
                    animate={{
                        y: [-15, 15, -15],
                        rotateZ: [360, 0],
                        boxShadow: [
                            '0 0 30px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.1) inset',
                            '0 0 60px rgba(6,182,212,0.5), 0 0 100px rgba(6,182,212,0.3) inset',
                            '0 0 30px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.1) inset',
                        ]
                    }}
                    transition={{
                        y: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                        rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
                        boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    {/* Inner ring 1 */}
                    <motion.div
                        className="absolute inset-4 rounded-full border border-cyan-300/40"
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Inner ring 2 */}
                    <motion.div
                        className="absolute inset-8 rounded-full border border-cyan-200/50 bg-cyan-400/5"
                        animate={{ rotateZ: [360, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Core glow */}
                    <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-cyan-400/20 blur-sm" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-2">02.</span> Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 rounded-lg bg-zinc-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
