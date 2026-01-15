import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { isDarkMode, theme } = useTheme();
  
  return (
    <div className={`overflow-x-hidden antialiased transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-neutral-950 text-neutral-300' 
        : 'bg-white text-slate-800'
    }`} style={{ 
      '--selection-bg': theme.accent,
      '--selection-text': isDarkMode ? '#000' : '#fff'
    }}>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`absolute top-0 z-[-2] h-screen w-screen transition-colors duration-300 ${
          isDarkMode
            ? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
            : 'bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.05),rgba(255,255,255,0))]'
        }`} /></div>

      <div className="container mx-auto sm:px-20 px-6 lg:px-24 pt-24">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App;
