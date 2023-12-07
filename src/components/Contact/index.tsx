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
        <img src="https://private-user-images.githubusercontent.com/13721147/282960042-38e5f654-1322-44b9-85f9-4f6a82033d22.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5NzQyMjMsIm5iZiI6MTcwMTk3MzkyMywicGF0aCI6Ii8xMzcyMTE0Ny8yODI5NjAwNDItMzhlNWY2NTQtMTMyMi00NGI5LTg1ZjktNGY2YTgyMDMzZDIyLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDE4MzIwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdmNmYzYjViNDRhOTliMzljMzRkYThkN2MyODc4YTAxN2M1NmY5NTgzOTU1Zjk5NWQxZGFhY2Q2NjVjZTY2YjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JCGkj-Vud-D98iWWhEqYLbxJCaDaNAQoVSvkdQhoAiw" />
      </div>
    </Section>
  );
}
