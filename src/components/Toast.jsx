import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

const Toast = ({ show, message, type = "success", onClose }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="fixed top-4 right-4 z-50 min-w-[280px] max-w-md"
                >
                    <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm ${
                            type === "success"
                                ? "bg-green-500/90 text-white"
                                : "bg-red-500/90 text-white"
                        }`}
                    >
                        {type === "success" ? (
                            <FaCheckCircle className="text-xl flex-shrink-0" />
                        ) : (
                            <FaTimesCircle className="text-xl flex-shrink-0" />
                        )}
                        <p className="flex-1 text-sm font-medium">{message}</p>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white transition-colors flex-shrink-0"
                        >
                            <FaTimes className="text-lg" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
