import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import spImg from "../assets/img/sp.png";
import darkSpImg from "../assets/img/dark-sp.png";
import { useTheme } from "../context/ThemeContext";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    },
    hover: {
        scale: 1.1,
        rotate: 360,
        transition: {
            duration: 0.6
        }
    }
}

const floatingVariants = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const darkModeColorFilters = [
    { filter: "hue-rotate(0deg) saturate(1.3) brightness(1.2)", gradient: "from-purple-500/40 via-pink-500/40 to-cyan-500/40" },
    { filter: "hue-rotate(60deg) saturate(1.4) brightness(1.25)", gradient: "from-cyan-500/40 via-blue-500/40 to-indigo-500/40" },
    { filter: "hue-rotate(120deg) saturate(1.3) brightness(1.15)", gradient: "from-violet-500/40 via-purple-500/40 to-fuchsia-500/40" },
    { filter: "hue-rotate(180deg) saturate(1.2) brightness(1.1)", gradient: "from-pink-500/40 via-rose-500/40 to-orange-500/40" },
    { filter: "hue-rotate(240deg) saturate(1.4) brightness(1.2)", gradient: "from-indigo-500/40 via-blue-500/40 to-cyan-500/40" },
    { filter: "hue-rotate(300deg) saturate(1.3) brightness(1.25)", gradient: "from-fuchsia-500/40 via-pink-500/40 to-purple-500/40" },
];

const lightModeColorFilters = [
    { filter: "hue-rotate(0deg) saturate(1.5) brightness(0.7)", gradient: "from-green-600/40 via-emerald-600/40 to-teal-600/40" },
    { filter: "hue-rotate(60deg) saturate(1.4) brightness(0.75)", gradient: "from-teal-600/40 via-cyan-600/40 to-blue-600/40" },
    { filter: "hue-rotate(120deg) saturate(1.6) brightness(0.7)", gradient: "from-emerald-600/40 via-green-600/40 to-lime-600/40" },
    { filter: "hue-rotate(180deg) saturate(1.3) brightness(0.65)", gradient: "from-blue-600/40 via-indigo-600/40 to-purple-600/40" },
    { filter: "hue-rotate(240deg) saturate(1.5) brightness(0.7)", gradient: "from-teal-600/40 via-green-600/40 to-emerald-600/40" },
    { filter: "hue-rotate(300deg) saturate(1.4) brightness(0.75)", gradient: "from-cyan-600/40 via-blue-600/40 to-indigo-600/40" },
];

const Hero = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const { theme, isDarkMode } = useTheme();

    const colorFilters = isDarkMode ? darkModeColorFilters : lightModeColorFilters;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prev) => (prev + 1) % colorFilters.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [colorFilters.length]);

    const currentColor = colorFilters[currentColorIndex];
    
    return (
        <div className={`pb-4 lg:mb-36 transition-colors duration-300`}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-start">
                        <motion.h1
                            variants={itemVariants}
                            className={`pb-16 text-5xl lg:text-7xl font-light tracking-tight lg:mt-16 transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-neutral-100' 
                                    : 'text-slate-900'
                            }`}
                            style={{
                                fontWeight: 300,
                                letterSpacing: '-0.02em'
                            }}>
                            Subhalaxmi Pradhan
                        </motion.h1>
                        <motion.span
                            key={`software-dev-${isDarkMode}`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.15, x: 10 }}
                            whileTap={{ scale: 1.05 }}
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }}
                            dragElastic={0.2}
                            className="bg-clip-text text-3xl tracking-tight text-transparent cursor-grab active:cursor-grabbing"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: `linear-gradient(to right, ${theme.accent}, ${theme.primary}, ${theme.secondary})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                            Software Developer
                        </motion.span>
                        <motion.p
                            variants={itemVariants}
                            className={`my-2 max-w-xl py-6 font-light tracking-tighter text-lg transition-colors duration-300 text-left ${
                                isDarkMode ? '' : 'text-slate-600'
                            }`}>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="flex justify-center">
                        <motion.div
                            variants={logoVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`relative overflow-hidden shadow-2xl transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'rounded-full border-2 border-neutral-700' 
                                    : 'rounded-full border-2 border-green-100'
                            }`}
                            style={{ 
                                display: 'inline-block', 
                                lineHeight: 0, 
                                margin: 0, 
                                padding: isDarkMode ? '1.5rem' : '1.5rem',
                                maxWidth: '400px', 
                                width: '100%',
                                backgroundColor: isDarkMode ? undefined : '#f0fdf4',
                                boxShadow: isDarkMode ? undefined : '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}>
                            <motion.img
                                key={`${isDarkMode}-${currentColorIndex}`}
                                src={isDarkMode ? spImg : darkSpImg}
                                alt="SP Logo"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    filter: currentColor.filter
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                className="block w-full h-auto"
                                style={{ 
                                    display: 'block', 
                                    margin: 0, 
                                    padding: 0
                                }}
                            />
                            <motion.div
                                key={`gradient-${isDarkMode}-${currentColorIndex}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`absolute inset-0 bg-gradient-to-br ${currentColor.gradient} pointer-events-none rounded-full`}
                            />
                            <motion.div
                                animate={{
                                    boxShadow: isDarkMode ? [
                                        `0 0 30px ${theme.primary}40`,
                                        `0 0 60px ${theme.accent}50`,
                                        `0 0 90px ${theme.secondary}40`,
                                        `0 0 60px ${theme.primary}50`,
                                        `0 0 30px ${theme.primary}40`
                                    ] : [
                                        `0 0 20px rgba(22, 163, 74, 0.3)`,
                                        `0 0 40px rgba(34, 197, 94, 0.4)`,
                                        `0 0 60px rgba(22, 163, 74, 0.3)`,
                                        `0 0 40px rgba(34, 197, 94, 0.4)`,
                                        `0 0 20px rgba(22, 163, 74, 0.3)`
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 rounded-full pointer-events-none"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
