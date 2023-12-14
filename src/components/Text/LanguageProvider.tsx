import React from 'react';
import { createContext, useEffect, useState } from 'react';

type TextTypes = {
  sections: Array<string>;
  typewriterItems: Array<string>;
  headerItems: Array<string>;
  heroTitle: string;
  heroDev: string;
  aboutTitle: string;
  aboutMobileText: string;
  aboutDesktopText: string;
  contactTitle: string;
  projectTitle: string;
  clipboard: string;
  codeButton: string;
  moreProjects: string;
  lessProjects: string;
};

type LanguageContextTypes = {
  lang: string;
  translated: TextTypes;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextTypes | null>(null);

const defaultLang = 'US';

const textMap = new Map<string, TextTypes>()
  .set('BR', {
    sections: ['home', 'about', 'projects', 'contact'],
    typewriterItems: [
      'Olá, Mundo',
      'Bem-vind@',
      'Bão dia!',
      'Salve, dev',
      '404',
      'Never gonna...',
    ],
    headerItems: ['Home', 'Sobre', 'Projetos', 'Contato'],
    heroTitle: 'Prazer, ',
    heroDev: `Desenvolvedor</br>Web Full-Stack`,
    aboutTitle: 'Sempre aprendendo!',
    aboutMobileText: ` Eu sou um estudante apaixonado por programação web full stack em
      busca de seu primeiro emprego. <br /> 
      Tenho conhecimentos sólidos em
      <span class="text-primary">SQL</span>,
      <span class="text-primary">JavaScript</span>,
      <span class="text-primary">TypeScript</span>,
      <span class="text-primary">HTML</span>,
      <span class="text-primary">CSS</span>,
      <span class="text-primary">ReactJS</span> e
      <span class="text-primary">Node.Js</span>. Além disso, estou
      estudando mobile com
      <span class="text-primary">React Native</span> e <span class="text-primary">back-end</span> com
      NodeJs, TypeScript e <span class="text-primary">Express</span>,
      com foco em <span class="text-primary">Test-Driven Development (TDD)</span> e
      <span class="text-primary">Clean Architecture</span>. Também já
      realizei projetos utilizando <span class="text-primary">C</span>
      , <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span> e
      <span class="text-primary">PHP</span>. Adoro expandir meu
      conhecimento para várias áreas da programação! E claro, minha
      primeira linguagem no mundo da programação foi o
      <span class="text-primary">inglês</span>; sou autodidata nessa
      língua, me permitindo trabalhar e comunicar efetivamente.`,
    aboutDesktopText: ` Eu sou um estudante apaixonado por programação web full stack em
      busca de seu primeiro emprego. Tenho conhecimentos sólidos em
      <span class="text-primary">SQL</span>,
      <span class="text-primary">JavaScript</span>,
      <span class="text-primary">TypeScript</span>,
      <span class="text-primary">HTML</span>,
      <span class="text-primary">CSS</span>,
      <span class="text-primary">ReactJS</span> e
      <span class="text-primary">Node.Js</span>. Além disso, estou
      estudando mobile com
      <span class="text-primary">React Native</span> e <span class="text-primary">back-end</span> com
      NodeJs, TypeScript e <span class="text-primary">Express</span>,
      com foco em <span class="text-primary">Test-Driven Development (TDD)</span> e
      <span class="text-primary">Clean Architecture</span>. Também já
      realizei projetos utilizando <span class="text-primary">C</span>
      , <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span> e
      <span class="text-primary">PHP</span>. <br />
      <br />
      Adoro expandir meu conhecimento para várias áreas da programação! E
      claro, minha primeira linguagem no mundo da programação foi o
      <span class="text-primary">inglês</span>; sou autodidata nessa língua, me permitindo trabalhar e
      comunicar efetivamente. Estou animado com a oportunidade de aplicar
      minhas habilidades e conhecimentos em um ambiente de trabalho aonde
      eu possa aprender e me desenvolver ainda mais.`,
    contactTitle: 'Vamos trocar uma ideia !',
    projectTitle: 'Colocando em prática !',
    clipboard: 'Copiado !',
    codeButton: 'Código',
    moreProjects: 'Ver todos projetos',
    lessProjects: 'Ver menos',
  })
  .set('US', {
    sections: ['home', 'about', 'projects', 'contact'],
    typewriterItems: [
      'Hello, World',
      'Welcome',
      'Good morning!',
      'Oki doki',
      '404',
      'Never gonna...',
    ],
    headerItems: ['Home', 'About', 'Projects', 'Contact'],
    heroTitle: `I am, `,
    heroDev: `Full-Stack</br>Web Developer`,
    aboutTitle: 'Always learning !',
    aboutMobileText: `I am a passionate full-stack web development student in search of my first job.<br /> 
      I have solid knowledge in
      <span class="text-primary">SQL</span>,
      <span class="text-primary">JavaScript</span>,
      <span class="text-primary">TypeScript</span>,
      <span class="text-primary">HTML</span>,
      <span class="text-primary">CSS</span>,
      <span class="text-primary">ReactJS</span>, and
      <span class="text-primary">Node.js</span>. Additionally, I am currently studying mobile development with
      <span class="text-primary">React Native</span> and <span class="text-primary">back-end</span> with Node.js, TypeScript, and 
      <span class="text-primary">Express</span>,
      focusing on <span class="text-primary">Test-Driven Development (TDD)</span> and
      <span class="text-primary">Clean Architecture</span>. I have also completed projects using
      <span class="text-primary">C</span>,
      <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span>, and
      <span class="text-primary">PHP</span>. I love expanding my knowledge across various programming areas! And of course, my first language in the programming world was
      <span class="text-primary">English</span>; I am self-taught in this language, enabling me to work and communicate effectively.`,
    aboutDesktopText: `I am a passionate full-stack web development student in search of my first job. I have a strong foundation in 
      <span class="text-primary">SQL</span>,
      <span class="text-primary">JavaScript</span>,
      <span class="text-primary">TypeScript</span>,
      <span class="text-primary">HTML</span>,
      <span class="text-primary">CSS</span>,
      <span class="text-primary">ReactJS</span> and
      <span class="text-primary">Node.Js</span>. Additionally, I am currently studying mobile development with
      <span class="text-primary">React Native</span> and <span class="text-primary">back-end</span> development with
      NodeJs, TypeScript and <span class="text-primary">Express</span>,
      focusing <span class="text-primary">Test-Driven Development (TDD)</span> and
      <span class="text-primary">Clean Architecture principles</span>. I have also completed projects using 
      <span class="text-primary">C</span>
      , <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span> and
      <span class="text-primary">PHP</span>.<br/><br/> I love expanding my knowledge across various programming areas! 
      Of course, my first language in the programming world was 
      <span class="text-primary">English</span>; I am self-taught in this language, enabling me to work and communicate effectively. I am excited about the opportunity to apply my skills and knowledge in a work environment where I can continue learning and further developing myself.`,
    contactTitle: `Let's talk!`,
    projectTitle: `From Idea to Reality`,
    clipboard: 'Copied !',
    codeButton: 'Code',
    moreProjects: 'See all projects',
    lessProjects: 'See less',
  });

export function LanguageProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [lang, setLang] = useState<string>(() => {
    const storedLang = localStorage.getItem('lang') || browserLang();
    return storedLang === 'BR' ? 'BR' : 'US';
  });

  const [translated, setTranslated] = useState<TextTypes>(textMap.get(lang)!);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    setTranslated(textMap.get(lang)!);
  }, [lang]);

  function toggleLang() {
    setLang((prevLang) => (prevLang === 'BR' ? 'US' : 'BR'));
  }

  function browserLang() {
    const browserLang = navigator.language.split('-')[1];
    return browserLang === 'BR' || browserLang === 'US'
      ? browserLang
      : defaultLang;
  }

  return (
    <LanguageContext.Provider value={{ lang, translated, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextTypes =>
  React.useContext(LanguageContext)!;
