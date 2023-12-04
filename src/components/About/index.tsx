import React, { useEffect, useMemo, useRef } from 'react';
import { useIsVisible } from '../../utils';
import catTraining from '../../assets/catTraining.gif';
import { useLanguage } from '../Text/LanguageProvider';

export default function About({ refName }: { refName: string }) {
  const { translated } = useLanguage();

  const $ref = useRef<HTMLDivElement | null>(null);

  const isVisible = useIsVisible($ref);

  const sectionEvent = useMemo(() => new Event(refName), [refName]);

  useEffect(() => {
    if (isVisible) {
      document.dispatchEvent(sectionEvent);
    }
  }, [isVisible, sectionEvent]);

  return (
    <section
      ref={$ref}
      id={refName}
      className="flex flex-col items-center min-h-screen gap-5 pt-10 bg-background sm:pt-10 md:justify-center md:snap-start"
    >
      <div className="flex flex-col items-center md:grid md:grid-cols-[1fr_1fr] md:w-full">
        <img
          className="w-[85px] h-[80px] z-10 animate-roundedEnter justify-self-center md:w-[200px] md:h-[200px]"
          src={catTraining}
          alt="Foto de perfil"
        />
        <div className="flex flex-col text-center gap-6 md:w-[50vw] md:gap-10 md:text-left">
          <h1 className="text-3xl break-all text-primary tall:text-4xl md:break-normal md:!text-6xl">
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
    </section>
  );
}
