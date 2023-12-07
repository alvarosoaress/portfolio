import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import { LanguageProvider } from './components/Text/LanguageProvider';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <main className="relative px-6 bg-background text-text lg:px-48">
        <Header />
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
