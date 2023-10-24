import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <main className="bg-background relative text-text lg:px-48 px-6">
      <Header />
      <Hero refName={'home'} />
      <Hero refName={'about'} />
      <section className="bg-background min-h-screen snap-start flex flex-col justify-center items-center gap-5 pt-5 md:pt-10"></section>
      <section className="bg-background min-h-screen snap-start flex flex-col justify-center items-center gap-5 pt-5 md:pt-10"></section>
    </main>
  );
}

export default App;
