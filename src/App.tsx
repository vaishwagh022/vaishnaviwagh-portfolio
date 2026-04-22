import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const handleLoaded = useCallback(() => setLoaded(true), []);

  if (!loaded) {
    return <LoadingScreen onComplete={handleLoaded} />;
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
