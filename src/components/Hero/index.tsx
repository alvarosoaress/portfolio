import React, { useEffect, useMemo, useRef } from 'react';
import profilePhoto from '../../assets/profilePhoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import { useIsVisible } from '../../utils';

export default function Hero({ refName }: { refName: string }) {
  const $ref = useRef<HTMLDivElement | null>(null);

  const isVisible = useIsVisible($ref);

  const homeEvent = useMemo(() => new Event(refName), [refName]);

  useEffect(() => {
    if (isVisible) {
      document.dispatchEvent(homeEvent);
    }
  }, [isVisible, homeEvent]);

  return (
    <section
      ref={$ref}
      className="bg-background min-h-screen flex flex-col items-center gap-5 pt-10 sm:pt-10 tall:justify-center md:justify-center md:snap-start"
    >
      <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_auto] md:w-full">
        <div className="flex flex-col items-center text-center md:block md:text-left">
          <h1 className="text-3xl text-center md:text-left tall:text-4xl md:!text-7xl md:mb-1">
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
          <h1 className="text-4xl break-all md:break-normal tall:text-5xl sm:text-6xl md:!text-8xl">
            Prazer, <a className="text-primary">Álvaro!</a>
          </h1>
        </div>
        <img
          className="w-[170px] h-[300px] z-10 animate-roundedEnter sm:w-[250px] sm:h-[425px] tall:w-[250px] tall:h-[425px] md:!w-[300px] md:!h-[525px]"
          src={profilePhoto}
          alt="Foto de perfil"
        />
      </div>
      <h1 className="text-primary text-4xl text-center tall:text-5xl sm:text-5xl md:!text-7xl">
        Desenvolvedor<br></br>Web Full-Stack
      </h1>
      <div className="animate-scaleEnter md:animate-socialEnterRight lg:absolute lg:right-28 lg:top-72">
        <div className="flex items-center justify-center gap-5 w-full lg:flex-col">
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
      </div>
      <FontAwesomeIcon icon={faChevronDown} bounce />
    </section>
  );
}
