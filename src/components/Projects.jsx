import { motion } from 'framer-motion';
import { ExternalLink, Package, Server, Smartphone, Database } from 'lucide-react';
import { GitHub } from './BrandIcons';

const Projects = () => {
    const projects = [
        {
            title: "Kafka Order Processing",
            description: "Resilient event-driven microservices (Order, Inventory, Notification) system. Implements Outbox pattern, DLQ, and Idempotent Consumers.",
            tech: ["Node.js", "Kafka", "MySQL", "Docker"],
            icon: <Server size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Smart AgriConnect",
            description: "Cross-platform app connecting farmers with buyers. Features live market prices, weather updates, and role-based login.",
            tech: ["Flutter", "Dart", "Firebase"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Nexus - DSA Learning",
            description: "Learning platform with DSA visualization, AI chatbot, and progress tracking system.",
            tech: ["Flutter", "Firebase", "REST API"],
            icon: <Package size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Real Estate MVVM",
            description: "Production-grade property listing app with offline-first storage and Clean Architecture.",
            tech: ["Flutter", "Hive", "Bloc", "CI/CD"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Bank Account ES/CQRS",
            description: "Backend system with Event Sourcing and CQRS. Full audit trail, snapshotting, and read projections.",
            tech: ["Node.js", "PostgreSQL", "Docker", "CQRS"],
            icon: <Database size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Blog API",
            description: "RESTful backend with MVC architecture and relational design. Full CRUD and Sequelize ORM integration.",
            tech: ["Node.js", "Express", "MySQL", "Sequelize"],
            icon: <Server size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        },
        {
            title: "Adaptive UI System",
            description: "Flutter app demonstrating advanced UI engineering with adaptive breakpoints and custom gestures.",
            tech: ["Flutter", "Dart", "Docker"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/JaswanthVasamsetti"
        }
    ];

    return (
        <section id="projects" className="section-padding scroll-mt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-2">03.</span> Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass-card overflow-hidden flex flex-col group"
                        >
                            <div className="p-8 pb-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-white">{project.title}</h3>
                                <p className="text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto p-8 pt-0">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors flex items-center text-sm font-medium"
                                    >
                                        <GitHub size={18} className="mr-2" /> Code
                                    </a>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white transition-colors flex items-center text-sm font-medium"
                                    >
                                        <ExternalLink size={18} className="mr-2" /> Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
