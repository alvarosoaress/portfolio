import React from 'react';
import profilePhoto from '../../assets/profilePhoto.jpg';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../Text/LanguageProvider';
import {
  FaChevronDown,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';
import Section from '../Section';

export default function Hero() {
  const { translated } = useLanguage();

  return (
    <Section sectionName={'home'}>
      <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_auto] md:w-full">
        <div className="flex flex-col items-center text-center md:block md:text-left">
          <h1 className="text-3xl text-center md:text-left tall:text-4xl xxl:!text-7xl md:mb-1">
            <Typewriter
              options={{
                strings: translated.typewriterItems,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className="text-4xl break-all md:break-normal tall:text-5xl sm:text-6xl xxl:!text-8xl">
            {translated.heroTitle} <a className="text-primary">Álvaro!</a>
          </h1>
        </div>
        <img
          className="w-[170px] h-[300px] z-10 animate-roundedEnter sm:h-[425px] tall:w-[250px] tall:h-[425px] md:!w-[250px] md:!h-[385px] xxl:!w-[300px] xxl:!h-[525px]"
          src={profilePhoto}
          alt="Foto de perfil"
        />
      </div>
      <h1
        className="text-primary text-4xl text-center tall:text-5xl sm:text-5xl xxl:!text-7xl"
        dangerouslySetInnerHTML={{ __html: translated.heroDev }}
      ></h1>
      <div className="animate-scaleEnter md:animate-socialEnterRight lg:absolute md:right-28 md:top-44 xxl:right-28 xxl:top-72">
        <div className="flex items-center justify-center w-full gap-5 lg:flex-col">
          <button className="text-4xl hover:scale-125">
            <FaGithub size={'40px'} />
          </button>
          <button className="text-4xl hover:scale-125">
            <FaLinkedin size={'40px'} />
          </button>
          <button className="text-4xl hover:scale-125">
            <FaEnvelope size={'40px'} />
          </button>
        </div>
      </div>

      <a href="#about">
        <FaChevronDown className="animate-bounce" />
      </a>
      {/* <FontAwesomeIcon icon={faChevronDown} bounce className="cursor-pointer" /> */}
    </Section>
  );
}
