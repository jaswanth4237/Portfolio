import { motion } from 'framer-motion';
import { GitHub } from './BrandIcons';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: index % 2 === 0 ? 80 : -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
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
    );
};

export default ProjectCard;
