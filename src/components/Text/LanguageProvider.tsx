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

type Lang = 'BR' | 'US';

type LanguageContextTypes = {
  lang: Lang;
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
    heroDev: `Desenvolvedor</br>Full-Stack`,
    aboutTitle: 'Sempre aprendendo!',
    aboutMobileText: `Desenvolvedor full-stack apaixonado por tecnologia em
      busca de novos desafios. <br /> 
      Trabalho com <span class="text-primary">TypeScript</span> no dia a dia, 
      atuando com <span class="text-primary">NestJS/Express</span> no back-end e 
      <span class="text-primary">React/Next.js</span> no front-end, além de ter contato 
      com <span class="text-primary">React Native</span>. 
      Tenho experiência com <span class="text-primary">SQL</span> e <span class="text-primary">NoSql</span>,
      e curto desenvolver com foco em <span class="text-primary">TDD</span> e <span class="text-primary">Clean Architecture</span>.<br />
      <br />
      Também tenho vivência com <span class="text-primary">Azure/DevOps</span>, trabalhando com <span class="text-primary">pipelines de CI/CD</span>, 
      <span class="text-primary">deploys</span> e <span class="text-primary">monitoramento/evolução de ambientes</span>. 
      Ao longo da minha jornada, já realizei projetos com 
      <span class="text-primary">Go</span>, 
      <span class="text-primary">C</span>, 
      <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span> e
      <span class="text-primary">PHP</span>, o que me deu uma boa base para aprender e me adaptar rápido.<br/>
      <br/>
      Adoro expandir meu
      conhecimento para várias áreas da programação! E claro, minha
      primeira linguagem no mundo da programação foi o
      <span class="text-primary">inglês</span>; sou autodidata nessa
      língua, me permitindo trabalhar e comunicar efetivamente. Estou em busca de oportunidades onde eu possa gerar valor, aprender bastante e crescer junto com o time.`,
    aboutDesktopText: `Desenvolvedor full-stack apaixonado por tecnologia em
      busca de novos desafios. <br /> 
      Trabalho com <span class="text-primary">TypeScript</span> no dia a dia, 
      atuando com <span class="text-primary">NestJS/Express</span> no back-end e 
      <span class="text-primary">React/Next.js</span> no front-end, além de ter contato 
      com <span class="text-primary">React Native</span>. 
      Tenho experiência com <span class="text-primary">SQL</span> e <span class="text-primary">NoSql</span>,
      e curto desenvolver com foco em <span class="text-primary">TDD</span> e <span class="text-primary">Clean Architecture</span>.<br />
      <br />
      Também tenho vivência com <span class="text-primary">Azure/DevOps</span>, trabalhando com <span class="text-primary">pipelines de CI/CD</span>, 
      <span class="text-primary">deploys</span> e <span class="text-primary">monitoramento/evolução de ambientes</span>. 
      Ao longo da minha jornada, já realizei projetos com 
      <span class="text-primary">Go</span>, 
      <span class="text-primary">C</span>, 
      <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span> e
      <span class="text-primary">PHP</span>, o que me deu uma boa base para aprender e me adaptar rápido.<br/>
      <br/>
      Adoro expandir meu
      conhecimento para várias áreas da programação! E claro, minha
      primeira linguagem no mundo da programação foi o
      <span class="text-primary">inglês</span>; sou autodidata nessa
      língua, me permitindo trabalhar e comunicar efetivamente. Estou em busca de oportunidades onde eu possa gerar valor, aprender bastante e crescer junto com o time.`,
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
    heroDev: `Full-Stack</br>Developer`,
    aboutTitle: 'Always learning !',
    aboutMobileText: `Full-stack developer passionate about technology and always looking for new challenges. <br />
      I work with <span class="text-primary">TypeScript</span> on a daily basis, 
      building with <span class="text-primary">NestJS/Express</span> on the back end, 
      <span class="text-primary">React/Next.js</span> on the front end and <span class="text-primary">SQL</span>, <span class="text-primary">NoSQL</span> for databases. 
      I also have experience with 
      <span class="text-primary">React Native</span>
      and enjoy developing with a focus on <span class="text-primary">TDD</span> and <span class="text-primary">Clean Architecture</span>.<br />
      <br />
      I also work with <span class="text-primary">Azure/DevOps</span>, with focus on <span class="text-primary">CI/CD pipelines</span>, 
      <span class="text-primary">deployments</span>, and <span class="text-primary">environment monitoring and evolution</span>. 
      Throughout my journey, I've built projects using 
      <span class="text-primary">Go</span>, 
      <span class="text-primary">C</span>, 
      <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span>, and
      <span class="text-primary">PHP</span>, which gave me a strong foundation to learn and adapt quickly.<br/>
      <br/>
      I love expanding my knowledge across different areas of programming! And yes—my first “language” in the world of programming was 
      <span class="text-primary">English</span>; I'm self-taught, which allows me to work and communicate effectively. I'm looking for opportunities where I can add value, learn a lot, and grow with the team.`,
    aboutDesktopText: `Full-stack developer passionate about technology and always looking for new challenges. <br />
      I work with <span class="text-primary">TypeScript</span> on a daily basis, 
      building with <span class="text-primary">NestJS/Express</span> on the back end, 
      <span class="text-primary">React/Next.js</span> on the front end and <span class="text-primary">SQL</span>, <span class="text-primary">NoSQL</span> for databases. 
      I also have experience with 
      <span class="text-primary">React Native</span>
      and enjoy developing with a focus on <span class="text-primary">TDD</span> and <span class="text-primary">Clean Architecture</span>.<br />
      <br />
      I also work with <span class="text-primary">Azure/DevOps</span>, with focus on <span class="text-primary">CI/CD pipelines</span>, 
      <span class="text-primary">deployments</span>, and <span class="text-primary">environment monitoring and evolution</span>. 
      Throughout my journey, I've built projects using 
      <span class="text-primary">Go</span>, 
      <span class="text-primary">C</span>, 
      <span class="text-primary">C#</span>,
      <span class="text-primary">Java</span>, and
      <span class="text-primary">PHP</span>, which gave me a strong foundation to learn and adapt quickly.<br/>
      <br/>
      I love expanding my knowledge across different areas of programming! And yes—my first “language” in the world of programming was 
      <span class="text-primary">English</span>; I'm self-taught, which allows me to work and communicate effectively. I'm looking for opportunities where I can add value, learn a lot, and grow with the team.`,
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
  const [lang, setLang] = useState<Lang>(() => {
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
