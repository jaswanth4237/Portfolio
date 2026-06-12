import { motion } from 'framer-motion';
import { Package, Server, Smartphone, Database } from 'lucide-react';
import IsometricRoom from './IsometricRoom';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Kafka Order Processing",
            description: "Resilient event-driven microservices (Order, Inventory, Notification) system. Implements Outbox pattern, DLQ, and Idempotent Consumers.",
            tech: ["Node.js", "Kafka", "MySQL", "Docker"],
            icon: <Server size={24} />,
            github: "https://github.com/jaswanth4237/kafka-order-processing"
        },
        {
            title: "Smart AgriConnect",
            description: "Cross-platform app connecting farmers with buyers. Features live market prices, weather updates, and role-based login.",
            tech: ["Flutter", "Dart", "Firebase"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/jaswanth4237/Flutter-Codes/tree/main/smart_agri_connect"
        },
        {
            title: "Nexus - DSA Learning",
            description: "Learning platform with DSA visualization, AI chatbot, and progress tracking system.",
            tech: ["Flutter", "Firebase", "REST API"],
            icon: <Package size={24} />,
            github: "https://github.com/jaswanth4237"
        },
        {
            title: "Real Estate MVVM",
            description: "Production-grade property listing app with offline-first storage and Clean Architecture.",
            tech: ["Flutter", "Hive", "Bloc", "CI/CD"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/jaswanth4237/real_estate_mvvm_app"
        },
        {
            title: "Bank Account ES/CQRS",
            description: "Backend system with Event Sourcing and CQRS. Full audit trail, snapshotting, and read projections.",
            tech: ["Node.js", "PostgreSQL", "Docker", "CQRS"],
            icon: <Database size={24} />,
            github: "https://github.com/jaswanth4237/bank-account-es-cqrs-api"
        },
        {
            title: "Blog API",
            description: "RESTful backend with MVC architecture and relational design. Full CRUD and Sequelize ORM integration.",
            tech: ["Node.js", "Express", "MySQL", "Sequelize"],
            icon: <Server size={24} />,
            github: "https://github.com/jaswanth4237/Blog-API"
        },
        {
            title: "Adaptive UI System",
            description: "Flutter app demonstrating advanced UI engineering with adaptive breakpoints and custom gestures.",
            tech: ["Flutter", "Dart", "Docker"],
            icon: <Smartphone size={24} />,
            github: "https://github.com/jaswanth4237"
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
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
