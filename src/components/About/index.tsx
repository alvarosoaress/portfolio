import React from 'react';
import catTraining from '../../assets/catTraining.gif';
import { useLanguage } from '../Text/LanguageProvider';
import Section from '../Section';

export default function About() {
  const { translated } = useLanguage();

  return (
    <Section sectionName={'about'} className="md:my-20 xxl:!my-0">
      <div className="flex flex-col items-center md:grid md:grid-cols-[1fr_1fr] md:w-full">
        <img
          className="w-[85px] h-[80px] z-10 animate-roundedEnter justify-self-center md:w-[200px] md:h-[200px]"
          src={catTraining}
          loading="lazy"
          alt="Foto de gato treinando"
        />
        <div className="flex flex-col text-center gap-6 md:w-[50vw] md:gap-10 md:text-left">
          <h1 className="text-3xl break-all text-primary tall:text-4xl md:break-normal md:text-5xl xxl:!text-6xl">
            {translated.aboutTitle}
          </h1>

          <p
            className="text-2xl text-center text-text lg:hidden"
            dangerouslySetInnerHTML={{ __html: translated.aboutMobileText }}
          ></p>

          <p
            className="hidden text-2xl text-text lg:block xxl:text-3xl"
            dangerouslySetInnerHTML={{ __html: translated.aboutDesktopText }}
          ></p>
        </div>
      </div>
    </Section>
  );
}
