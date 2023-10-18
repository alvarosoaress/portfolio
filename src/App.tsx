import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <main className="bg-background relative text-text lg:px-48 px-6">
      <Header />
      <Hero />
      <Hero />
      <Hero />
    </main>
  );
}

export default App;
