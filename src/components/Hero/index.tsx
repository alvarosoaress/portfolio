import React from 'react';
import profilePhoto from '../../assets/profilePhoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="bg-background min-h-screen snap-start flex flex-col justify-center items-center gap-5 pt-10 scroll-smooth">
      <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_auto] md:w-full">
        <div className="flex flex-col items-center text-center text-5xl md:block md:text-left md:text-8xl ">
          <h1 className="text-3xl text-center md:text-left md:text-7xl md:mb-1">
            <Typewriter
              options={{
                strings: [
                  'Olá, Mundo',
                  'Bem-vind@',
                  'Bão dia!',
                  'Salve, dev',
                  '404',
                  'Never gonna...',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className="break-all md:break-normal">
            Prazer, <a className="text-primary">Álvaro!</a>
          </h1>
        </div>
        <img
          className="w-[300px] h-[500px] rounded-full"
          src={profilePhoto}
          alt="Foto de perfil"
        />
      </div>
      <h1 className="text-primary text-5xl text-center md:text-7xl">
        Desenvolvedor<br></br>Web Full-Stack
      </h1>
      <div className="flex items-center justify-center gap-5 w-full">
        <button className="text-4xl">
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button className="text-4xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button className="text-4xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
      {/* <div className="flex items-center justify-center gap-5 w-full">
        <button className="text-4xl">
          <IconBrandGithub size={'45px'} />
        </button>
        <button className="text-4xl">
          <IconBrandLinkedin size={'45px'} />
        </button>
        <button className="text-4xl">
          <IconMail size={'45px'} />
        </button>
      </div> */}
      <FontAwesomeIcon icon={faChevronDown} bounce />
    </section>
  );
}
