import { PROJECTS } from "../constants"
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
    hover: {
        y: -10,
        transition: {
            duration: 0.3
        }
    }
}


const imageVariants = {
    hover: {
        scale: 1.2,
        rotate: 5,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 1.1,
        rotate: -5
    }
}

const techTagVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            type: "spring",
            stiffness: 200
        }
    }),
    hover: {
        scale: 1.15,
        y: -5,
        transition: {
            duration: 0.2
        }
    }
}

const Projects = () => {
    const { theme, isDarkMode } = useTheme();
    
    return (
        <div className={`pb-4 transition-colors duration-300`}>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                className={`my-20 text-center text-4xl transition-colors duration-300 ${
                    isDarkMode ? '' : 'text-slate-900'
                }`}>Projects.</motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectCardVariants}
                        className={`mb-8 flex flex-wrap lg:justify-center p-4 rounded-lg transition-all ${
                            isDarkMode ? 'border-2 border-transparent' : 'border-2 border-transparent'
                        }`}
                        whileHover={{
                            y: -10,
                            borderColor: isDarkMode ? theme.primary : '#16a34a',
                            transition: { duration: 0.3 }
                        }}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            className="w-full lg:w-1/4 flex justify-center sm:justify-start">
                            <div className={`mb-6 w-full max-w-[200px] h-[250px] rounded-lg border-2 overflow-hidden shadow-lg cursor-pointer transition-colors duration-300 ${
                                isDarkMode ? 'border-neutral-800' : 'border-slate-200 hover:border-green-500'
                            }`}>
                                <motion.img
                                    variants={imageVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <motion.h6
                                whileHover={{ scale: 1.05 }}
                                className="mb-2 font-semibold flex justify-center sm:justify-normal items-center">
                                {project.title}
                                {project.link && (
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.3, rotate: 15 }}
                                        whileTap={{ scale: 1.1 }}
                                        className="ml-2 transition-colors"
                                        style={{ color: theme.accent }}
                                        onMouseEnter={(e) => e.target.style.color = theme.primary}
                                        onMouseLeave={(e) => e.target.style.color = theme.accent}>
                                        <FaExternalLinkAlt />
                                    </motion.a>
                                )}
                            </motion.h6>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                                className={`mb-4 flex text-center sm:text-start transition-colors duration-300 ${
                                    isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                                }`}>{project.description}</motion.p>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex items-center sm:items-start justify-center sm:justify-start flex-wrap">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        custom={techIndex}
                                        variants={techTagVariants}
                                        whileHover="hover"
                                        className={`mr-2 mt-4 rounded px-2 py-1 text-sm font-bold cursor-pointer transition-all ${
                                            isDarkMode 
                                                ? `bg-neutral-900 ${techIndex % 2 === 0 ? "text-red-800" : techIndex % 3 === 0 ? "text-green-800" : "text-blue-800"}`
                                                : 'bg-green-600 text-white hover:bg-green-700'
                                        }`}>
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
