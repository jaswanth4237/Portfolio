import { motion } from 'framer-motion';

const TechIcon = ({ name, color, label }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center space-x-3 group cursor-default"
    >
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1e1e1e] border border-[#333333] group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300 p-2">
            <img
                src={`https://cdn.simpleicons.org/${name}/${color || 'cccccc'}`}
                alt={label}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
        </div>
        <span className="text-base font-medium text-[#808080] group-hover:text-white transition-colors tracking-wide">
            {label}
        </span>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            id: "MOBILE",
            skills: [
                { name: "flutter", color: "02569B", label: "Flutter" },
                { name: "dart", color: "0175C2", label: "Dart" },
                { name: "android", color: "3DDC84", label: "Android" },
                { name: "ios", color: "000000", label: "iOS" },
                { name: "blueprint", color: "137CBD", label: "MVVM/Bloc" }
            ]
        },
        {
            id: "BACKEND",
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
            skills: [
                { name: "mysql", color: "4479A1", label: "MySQL" },
                { name: "postgresql", color: "4169E1", label: "PostgreSQL" },
                { name: "mongodb", color: "47A248", label: "MongoDB" },
                { name: "firebase", color: "FFCA28", label: "Firebase" },
                { name: "sqlite", color: "003B57", label: "Hive/SQLite" }
            ]
        },
        {
            id: "DEV TOOLS",
            skills: [
                { name: "docker", color: "2496ED", label: "Docker" },
                { name: "git", color: "F05032", label: "Git" },
                { name: "githubactions", color: "2088FF", label: "CI/CD" },
                { name: "postman", color: "FF6C37", label: "Postman" }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding scroll-mt-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex items-center space-x-3 mb-24">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">✱</span>
                    </div>
                    <h2 className="text-sm font-bold tracking-[0.3em] text-[#808080] uppercase">My Stack</h2>
                </div>

                <div className="space-y-24">
                    {categories.map((cat, idx) => (
                        <div key={cat.id} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 items-start">
                            {/* Category Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h3 className="text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter leading-none select-none hover:text-[#222] transition-colors">
                                    {cat.id}
                                </h3>
                            </motion.div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
                                {cat.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
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
