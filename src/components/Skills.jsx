import { motion } from 'framer-motion';

const TechIcon = ({ name, color, label }) => (
    <motion.div
        whileHover={{ x: 5, scale: 1.05 }}
        className="flex items-center space-x-4 group cursor-default"
    >
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1e1e1e]/80 border border-[#333333] group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300 p-2.5">
            <img
                src={`https://cdn.simpleicons.org/${name}/${color || 'cccccc'}`}
                alt={label}
                className="w-full h-full object-contain transition-all duration-500 transform group-hover:rotate-12"
            />
        </div>
        <span className="text-base font-semibold text-[#b3b3b3] group-hover:text-white transition-colors tracking-wide">
            {label}
        </span>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            id: "MOBILE",
            gradient: "from-blue-500/30 to-cyan-500/20",
            textGradient: "from-blue-300 via-cyan-300 to-sky-400",
            skills: [
                { name: "flutter", color: "02569B", label: "Flutter" },
                { name: "dart", color: "0175C2", label: "Dart" },
                { name: "android", color: "3DDC84", label: "Android" },
                { name: "ios", color: "ffffff", label: "iOS" },
                { name: "blueprint", color: "137CBD", label: "Architecture" }
            ]
        },
        {
            id: "BACKEND",
            gradient: "from-emerald-500/20 to-green-500/10",
            textGradient: "from-emerald-300 via-green-300 to-teal-400",
            skills: [
                { name: "nodedotjs", color: "339933", label: "Node.js" },
                { name: "express", color: "ffffff", label: "Express.js" },
                { name: "nestjs", color: "E0234E", label: "NestJS" },
                { name: "apachekafka", color: "ffffff", label: "Kafka" },
                { name: "python", color: "3776AB", label: "Python" }
            ]
        },
        {
            id: "DATABASE",
            gradient: "from-purple-500/20 to-pink-500/10",
            textGradient: "from-purple-300 via-pink-300 to-fuchsia-400",
            skills: [
                { name: "mysql", color: "4479A1", label: "MySQL" },
                { name: "postgresql", color: "4169E1", label: "PostgreSQL" },
                { name: "mongodb", color: "47A248", label: "MongoDB" },
                { name: "redis", color: "FF4438", label: "Redis" },
                { name: "firebase", color: "FFCA28", label: "Firebase" },
                { name: "sqlite", color: "003B57", label: "Hive/SQLite" }
            ]
        },
        {
            id: "DEV OPS",
            gradient: "from-orange-500/20 to-yellow-500/10",
            textGradient: "from-orange-300 via-yellow-300 to-amber-400",
            skills: [
                { name: "docker", color: "2496ED", label: "Docker" },
                { name: "git", color: "F05032", label: "Git" },
                { name: "githubactions", color: "2088FF", label: "CI/CD" },
                { name: "postman", color: "FF6C37", label: "Postman" }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding scroll-mt-20 overflow-hidden bg-[#121212]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex items-center space-x-4 mb-32">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                        <span className="text-primary font-black text-2xl">✱</span>
                    </div>
                    <h2 className="text-sm font-bold tracking-[0.5em] text-[#666666] uppercase">Tech Spectrum</h2>
                </div>

                <div className="space-y-32">
                    {categories.map((cat, idx) => (
                        <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-center">
                            {/* Category Label with Glow and Gradient */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="relative group"
                            >
                                <div className={`absolute -inset-10 bg-gradient-to-r ${cat.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                <h3 className={`text-6xl md:text-8xl font-black tracking-tighter leading-none select-none bg-gradient-to-br ${cat.textGradient} bg-clip-text text-transparent opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-700`}>
                                    {cat.id}
                                </h3>
                            </motion.div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8">
                                {cat.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                                    >
                                        <TechIcon {...skill} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
