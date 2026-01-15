import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const iconVariants = (duration, delay = 0) => ({
    initial: { y: -10, opacity: 0, scale: 0.5 },
    animate: {
        y: [10, -10],
        opacity: 1,
        scale: 1,
        transition: {
            y: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            },
            opacity: {
                duration: 0.5,
                delay: delay
            },
            scale: {
                duration: 0.5,
                delay: delay,
                type: "spring",
                stiffness: 200
            }
        }
    },
    hover: {
        scale: 1.2,
        rotate: 360,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
})

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const Technologies = () => {
    const { theme, isDarkMode } = useTheme();
    const technologies = [
        { icon: RiReactjsLine, color: "text-cyan-400", duration: 2, delay: 0 },
        { icon: FaPython, color: "text-blue-500", duration: 4, delay: 0.1 },
        { icon: SiDjango, color: "text-green-600", duration: 3.5, delay: 0.2 },
        { icon: RiJavascriptFill, color: "text-yellow-500", duration: 2, delay: 0.3 },
        { icon: BiLogoTailwindCss, color: "text-cyan-400", duration: 4, delay: 0.4 },
        { icon: AiFillHtml5, color: "text-orange-600", duration: 2.5, delay: 0.5 },
        { icon: BiLogoCss3, color: "text-cyan-400", duration: 3.6, delay: 0.6 },
        { icon: SiMysql, color: "text-blue-500", duration: 2, delay: 0.7 },
        { icon: BiLogoGit, color: "text-orange-600", duration: 2, delay: 0.8 },
    ];

    return (
        <div className={`pb-20 transition-colors duration-300`}>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`my-20 text-center text-4xl transition-colors duration-300 ${
                    isDarkMode ? '' : 'text-slate-900'
                }`}>Technologies.</motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={iconVariants(tech.duration, tech.delay)}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`rounded-2xl border-4 p-4 transition-colors cursor-pointer ${
                                isDarkMode ? 'border-neutral-800' : 'border-slate-200 hover:border-green-500'
                            }`}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.primary}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                            <IconComponent className={`text-7xl ${tech.color}`} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    )
}

export default Technologies
