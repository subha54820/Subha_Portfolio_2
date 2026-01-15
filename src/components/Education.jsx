import { EDUCATION } from "../constants"
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
    hover: {
        scale: 1.02,
        x: 10,
        transition: {
            duration: 0.3
        }
    }
}

const techTagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: index * 0.1,
            type: "spring",
            stiffness: 200
        }
    }),
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2
        }
    }
}

const Education = () => {
    const { isDarkMode, theme } = useTheme();
    
    return (
        <div className={`pb-4 transition-colors duration-300`}>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                className={`my-20 text-center text-4xl transition-colors duration-300 ${
                    isDarkMode ? '' : 'text-slate-900'
                }`}>Education.</motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}>
                {EDUCATION.map((education, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`mb-8 flex flex-wrap lg:justify-center p-4 rounded-lg transition-all ${
                            isDarkMode ? 'border-2 border-transparent' : 'border-2 border-transparent'
                        }`}
                        whileHover={{
                            scale: 1.02,
                            x: 10,
                            borderColor: isDarkMode ? theme.primary : '#16a34a',
                            transition: { duration: 0.3 }
                        }}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="w-full lg:w-1/4">
                            <motion.p
                                animate={isDarkMode ? {
                                    color: ["#a3a3a3", "#ffffff", "#a3a3a3"]
                                } : {}}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={`mb-2 text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'text-neutral-400' : ''
                                }`}
                                style={!isDarkMode ? { 
                                    color: 'rgba(var(--bs-body-color-rgb), .75)' 
                                } : {}}>{education.year}</motion.p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className={`mb-2 font-semibold transition-colors duration-300 ${
                                isDarkMode ? '' : 'text-slate-900'
                            }`}>{education.degree} -
                                <span className={`text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'text-purple-100' : 'text-slate-900'
                                }`}>{education.institution}</span></h6>
                            <p className={`mb-4 transition-colors duration-300 ${
                                isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                            }`}>{education.description}</p>
                            {education.technologies.length > 0 && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap">
                                    {education.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            custom={techIndex}
                                            variants={techTagVariants}
                                            whileHover="hover"
                                            className={`mr-2 mt-4 rounded px-2 py-1 text-sm font-medium cursor-pointer transition-all ${
                                                isDarkMode 
                                                    ? `bg-neutral-900 ${techIndex % 2 === 0 ? "text-green-800" : techIndex % 3 === 0 ? "text-red-800" : "text-purple-800"}`
                                                    : 'bg-green-600 text-white hover:bg-green-700'
                                            }`}>
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Education
