import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('portfolio-dark-mode');
        return saved ? JSON.parse(saved) : true; // Default to dark mode
    });

    useEffect(() => {
        localStorage.setItem('portfolio-dark-mode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    // Theme colors that work in both modes - reactive to isDarkMode using useMemo
    const theme = useMemo(() => ({
        primary: isDarkMode ? '#a855f7' : '#22c55e', // Purple for dark, Green for light
        secondary: isDarkMode ? '#9333ea' : '#16a34a', // Purple for dark, Darker green for light
        accent: isDarkMode ? '#c084fc' : '#4ade80', // Light purple for dark, Light green for light
    }), [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
