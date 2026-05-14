import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Background3D from './components/Background3D';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Background3D />

      <div className={`min-h-screen text-zinc-100 selection:bg-primary/30 selection:text-primary-foreground relative z-0 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
