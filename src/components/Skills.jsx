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
        <section id="skills" className="section-padding scroll-mt-20">
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
