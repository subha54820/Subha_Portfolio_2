import { useState, useEffect } from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import aboutImg from "../assets/img/about.png";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
    hover: {
        scale: 1.05,
        rotate: 5,
        transition: {
            duration: 0.3
        }
    }
}

const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const About = () => {

    const { isDarkMode } = useTheme();
    
    return (
        <div className={`pb-4 transition-colors duration-300`}>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                className={`my-20 text-center text-4xl transition-colors duration-300 ${
                    isDarkMode ? '' : 'text-slate-900'
                }`}>
                About
                <span className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                }`}>
                    &nbsp;Me.
                </span>
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap">
                <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            src={aboutImg}
                            alt="About Me"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={textVariants}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`my-2 max-w-xl py-6 text-normal lg:text-lg leading-relaxed transition-colors duration-300 ${
                                isDarkMode ? 'text-neutral-300' : ''
                            }`}
                            style={!isDarkMode ? { 
                                color: 'rgba(var(--bs-body-color-rgb), .75)' 
                            } : {}}>
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
