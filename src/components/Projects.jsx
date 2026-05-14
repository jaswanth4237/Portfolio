import { motion } from 'framer-motion';
import { Package, Server, Smartphone, Database } from 'lucide-react';
import { GitHub } from './BrandIcons';
import IsometricRoom from './IsometricRoom';

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
        <section id="projects" className="section-padding scroll-mt-20 relative overflow-hidden">
            {/* Isometric 3D Room background */}
            <IsometricRoom />
            <div className="absolute top-[30%] right-[2%] w-32 h-32 md:w-64 md:h-64 pointer-events-none -z-10 opacity-70" style={{ perspective: '1000px' }}>
                <motion.div
                    className="w-full h-full"
                    animate={{ y: [-30, 30, -30], rotateZ: [360, 0], rotateX: 60 }}
                    transition={{
                        y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        rotateZ: { duration: 35, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute inset-0 rounded-[2rem] border border-sky-300/40 bg-sky-900/20 backdrop-blur-sm shadow-[0_0_40px_rgba(14,165,233,0.3)]" style={{ transform: 'translateZ(-60px)' }} />
                    <div className="absolute inset-0 rounded-[2rem] border border-sky-200/50 bg-sky-600/20 backdrop-blur-md shadow-[0_0_40px_rgba(14,165,233,0.3)]" style={{ transform: 'translateZ(-30px)' }} />
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-sky-100/60 bg-sky-400/20 backdrop-blur-lg shadow-[0_0_60px_rgba(14,165,233,0.5)_inset]" />
                </motion.div>
            </div>

            {/* Opposite side: glowing spinning orb */}
            <div className="absolute top-[50%] left-[-3%] w-28 h-28 md:w-52 md:h-52 pointer-events-none -z-10 opacity-70">
                <motion.div
                    className="w-full h-full rounded-full border-2 border-sky-400/30 bg-transparent"
                    animate={{
                        y: [-20, 20, -20],
                        rotateZ: [0, 360],
                        boxShadow: [
                            '0 0 30px rgba(14,165,233,0.2), 0 0 60px rgba(14,165,233,0.1) inset',
                            '0 0 60px rgba(14,165,233,0.5), 0 0 100px rgba(14,165,233,0.3) inset',
                            '0 0 30px rgba(14,165,233,0.2), 0 0 60px rgba(14,165,233,0.1) inset',
                        ]
                    }}
                    transition={{
                        y: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                        rotateZ: { duration: 22, repeat: Infinity, ease: 'linear' },
                        boxShadow: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    {/* Inner ring 1 */}
                    <motion.div
                        className="absolute inset-4 rounded-full border border-sky-300/40"
                        animate={{ rotateZ: [360, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Inner ring 2 */}
                    <motion.div
                        className="absolute inset-8 rounded-full border border-sky-200/50 bg-sky-400/5"
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Core glow */}
                    <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-sky-400/20 blur-sm" />
                </motion.div>
            </div>

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
                            initial={{ opacity: 0, y: i % 2 === 0 ? 80 : -80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: '-60px' }}
                            transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
                            className="glass-card overflow-hidden flex flex-col group"
                        >
                            <div className="p-8 pb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2d2d2d] flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-white">{project.title}</h3>
                                <p className="text-sm text-[#b3b3b3] mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto p-8 pt-0">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-[#808080] px-2 py-1 rounded bg-surface border border-border">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#808080] hover:text-white transition-colors flex items-center text-sm font-medium"
                                    >
                                        <GitHub size={18} className="mr-2" /> Code
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
