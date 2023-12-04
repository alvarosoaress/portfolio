import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import { LanguageProvider } from './components/Text/LanguageProvider';
import Project from './components/Project';

function App() {
  return (
    <LanguageProvider>
      <main className="relative px-6 bg-background text-text lg:px-48">
        <Header />
        <Hero refName={'home'} />
        <About refName={'about'} />
        <Project refName={'projects'} />
        <section className="flex flex-col items-center justify-center min-h-screen gap-5 pt-5 bg-background snap-start md:pt-10"></section>
        <section className="flex flex-col items-center justify-center min-h-screen gap-5 pt-5 bg-background snap-start md:pt-10"></section>
      </main>
    </LanguageProvider>
  );
}

export default App;
