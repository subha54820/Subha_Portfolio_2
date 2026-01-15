import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Mail from "./Mail";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
    const [visible, setVisible] = useState(false);
    const { theme, isDarkMode } = useTheme();
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Subhalaxmi Pradhan Resume-1-1-2-2.pdf';
        link.download = 'Subhalaxmi_Pradhan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className={`pb-20 m-10 transition-colors duration-300`}>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, type: "spring" }}
                className={`my-10 text-center text-4xl transition-colors duration-300 ${
                    isDarkMode ? '' : 'text-slate-900'
                }`}>Get In <span className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                }`}>
                    Touch.
                </span></motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-wrap overflow-hidden justify-center items-center gap-5'
                id='mail'>
                <motion.div
                    variants={itemVariants}
                    className="text-center tracking-tighter xl:flex-[0.75]">
                    <motion.p
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="my-4 cursor-default">{CONTACT.address1}</motion.p>
                    <motion.p
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: -10 }}
                        className="my-4 cursor-default">{CONTACT.address2}</motion.p>
                    <motion.p
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="my-4 cursor-default">{CONTACT.phoneNo}</motion.p>
                    <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href="#mail"
                        className="border-b transition-colors inline-block"
                        style={{ 
                            borderColor: theme.primary + '40',
                            color: 'inherit'
                        }}
                        onMouseEnter={(e) => e.target.style.color = theme.accent}
                        onMouseLeave={(e) => e.target.style.color = 'inherit'}
                        onClick={() => {
                            setVisible(prev => !prev);
                            const ele = document.getElementById('mail');
                            ele.scrollTop = ele?.scrollHeight;
                        }}>
                        {CONTACT.email}
                    </motion.a>
                    <motion.div className="mt-6 mb-4">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className={`flex items-center gap-2 mx-auto text-white px-6 py-3 rounded-lg font-semibold transition-all ${
                                isDarkMode ? 'hover:opacity-90' : 'hover:bg-green-700'
                            }`}
                            style={isDarkMode ? {
                                background: `linear-gradient(to right, ${theme.accent}, ${theme.primary}, ${theme.secondary})`,
                                boxShadow: `0 10px 30px ${theme.primary}50`
                            } : {
                                background: '#16a34a',
                                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
                            }}>
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
                            <FaDownload />
                        </motion.span>
                        Download Resume
                    </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={visible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={`flex-1 bg-black-100 p-8 rounded-2xl w-full justify-start lg:max-w-[500px] bg-black-100 ${visible ? "" : "hidden"}`}>
                    <Mail setVisible={setVisible} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact
