import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MouseCursor from './components/MouseCursor';

const Background3D = lazy(() => import('./components/Background3D'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <MouseCursor />

      <div className={`min-h-screen text-[#cccccc] selection:bg-primary/35 selection:text-white relative z-0 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
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
