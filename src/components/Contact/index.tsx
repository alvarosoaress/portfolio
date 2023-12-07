import React from 'react';
import Section from '../Section';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialButton from './SocialButton';
import { useLanguage } from '../Text/LanguageProvider';

export default function Contact() {
  const { translated } = useLanguage();

  return (
    <Section sectionName={'contact'} className="!pt-0">
      <div className="flex flex-col items-center h-screen justify-evenly">
        <h1 className="text-4xl tall:text-5xl text-center text-primary xxl:!text-6xl">
          {translated.contactTitle}
        </h1>

        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <SocialButton
            link="https://www.linkedin.com/in/alvaroegsoares/"
            Icon={FaLinkedin}
            text="Linkedin"
            openNewTab
          />
          <SocialButton
            link="https://github.com/alvarosoaress"
            Icon={FaGithub}
            text="Github"
            openNewTab
          />
          <SocialButton
            link="alvaroegsoares@gmail.com"
            Icon={FaEnvelope}
            text="Email"
          />
        </div>
        <img alt="Cat campfire" src="https://i.imgur.com/itWJkwv.gif" />
      </div>
    </Section>
  );
}
