import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa"
import { TbLetterS, TbLetterP } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme, theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoVariants = {
        hover: {
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5
            }
        }
    }

    const iconVariants = {
        hover: {
            scale: 1.3,
            rotate: 360,
            transition: {
                duration: 0.5
            }
        },
        tap: {
            scale: 0.9
        }
    }

    const navVariants = {
        initial: { y: -100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    }

    const backgroundVariants = {
        initial: { 
            opacity: 0, 
            backdropFilter: "blur(0px)",
            scale: 0.95
        },
        scrolled: {
            opacity: 1,
            backdropFilter: "blur(16px)",
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const logoContainerVariants = {
        initial: { scale: 1, x: 0 },
        scrolled: {
            scale: 0.85,
            x: -10,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200
            }
        }
    }

    const iconsContainerVariants = {
        initial: { scale: 1, x: 0, opacity: 0 },
        visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.6
            }
        },
        scrolled: {
            scale: 0.9,
            x: -10,
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200
            }
        }
    }

    return (
        <motion.nav
            variants={navVariants}
            initial="initial"
            animate="animate"
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
                scrolled 
                    ? `py-3 px-6 sm:px-20 lg:px-24 shadow-2xl border-b-2 ${
                        isDarkMode ? 'bg-neutral-950/80 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md border-slate-200'
                    }` 
                    : 'py-6 px-6 sm:px-20 lg:px-24'
            }`}
            style={scrolled ? { borderColor: `${theme.primary}30` } : {}}>
            <AnimatePresence>
                {scrolled ? (
                    <motion.div
                        variants={backgroundVariants}
                        initial="initial"
                        animate="scrolled"
                        exit="initial"
                        className={`absolute inset-0 -z-10 transition-colors duration-300 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950' 
                                : 'bg-gradient-to-r from-white via-slate-50 to-white'
                        }`}
                    />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-transparent -z-10"
                    />
                )}
            </AnimatePresence>
            
            <motion.div
                variants={logoContainerVariants}
                animate={scrolled ? "scrolled" : "initial"}
                className="flex flex-shrink-0 items-center cursor-pointer relative z-10">
                {scrolled ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        variants={logoVariants}
                        whileHover="hover"
                        className="flex items-center gap-0.5 px-4 py-2 rounded-full border"
                        style={isDarkMode ? {
                            background: `linear-gradient(to right, ${theme.primary}20, ${theme.secondary}20)`,
                            borderColor: `${theme.primary}30`
                        } : {
                            background: '#16a34a',
                            borderColor: '#15803d'
                        }}>
                        <motion.div
                            whileHover={{ scale: 1.2, x: -5 }}
                            className="font-bold text-xl"
                            style={{ color: isDarkMode ? theme.accent : '#ffffff' }}>
                            <TbLetterS className="w-6 h-6" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, x: 5 }}
                            className="font-bold text-xl"
                            style={{ color: isDarkMode ? theme.primary : '#ffffff' }}>
                            <TbLetterP className="w-6 h-6" />
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        variants={logoVariants}
                        whileHover="hover"
                        className="flex items-center gap-0">
                        <motion.div
                            whileHover={{ scale: 1.2, x: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            style={{ color: theme.accent }}>
                            <TbLetterS className="w-8 h-1/5" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            style={{ color: theme.primary }}>
                            <TbLetterP className="w-8 h-1/5" />
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
            
            <motion.div
                variants={iconsContainerVariants}
                initial="initial"
                animate={scrolled ? "scrolled" : "visible"}
                className="flex items-center justify-center gap-4 text-2xl relative z-10">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={toggleTheme}
                    className={`relative ${scrolled 
                        ? 'p-2 rounded-lg border transition-all' 
                        : 'text-neutral-400 hover:text-neutral-300 transition-colors'
                    }`}
                    style={scrolled ? {
                        backgroundColor: `${theme.primary}20`,
                        borderColor: `${theme.primary}30`,
                        color: theme.accent
                    } : {}}
                >
                    <motion.div
                        animate={{ rotate: isDarkMode ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isDarkMode ? <FaMoon /> : <FaSun />}
                    </motion.div>
                </motion.button>

                {scrolled ? (
                    <>
                        <motion.a
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="https://www.linkedin.com/in/subhalaxmi-pradhan-77b7043a2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border transition-all ${
                                isDarkMode
                                    ? 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/30 text-blue-400 hover:text-blue-300'
                                    : 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 text-blue-600 hover:text-blue-700'
                            }`}>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="https://github.com/subha54820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border transition-all ${
                                isDarkMode
                                    ? 'bg-neutral-700/50 hover:bg-neutral-600/70 border-neutral-600 text-white hover:text-gray-200'
                                    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900'
                            }`}>
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="mailto:pradahn.subhalaxmi9178@gmail.com"
                            className={`p-2 rounded-lg border transition-all ${
                                isDarkMode
                                    ? 'bg-red-500/20 hover:bg-red-500/40 border-red-500/30 text-red-400 hover:text-red-300'
                                    : 'bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-600 hover:text-red-700'
                            }`}>
                            <FaEnvelope />
                        </motion.a>
                    </>
                ) : (
                    <>
                        <motion.a
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="https://www.linkedin.com/in/subhalaxmi-pradhan-77b7043a2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${
                                isDarkMode 
                                    ? 'text-neutral-400 hover:text-blue-500' 
                                    : 'text-slate-600 hover:text-green-600'
                            }`}>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="https://github.com/subha54820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${
                                isDarkMode 
                                    ? 'text-neutral-400 hover:text-white' 
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}>
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                            href="mailto:pradahn.subhalaxmi9178@gmail.com"
                            className={`transition-colors ${
                                isDarkMode 
                                    ? 'text-neutral-400 hover:text-red-500' 
                                    : 'text-slate-600 hover:text-red-600'
                            }`}>
                            <FaEnvelope />
                        </motion.a>
                    </>
                )}
            </motion.div>
        </motion.nav>
    )
}

export default Navbar
