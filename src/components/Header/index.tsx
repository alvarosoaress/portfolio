import React, { useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const $header = useRef<HTMLDivElement | null>(null);
  const $name = useRef<HTMLHeadingElement | null>(null);
  const $nav = useRef<HTMLButtonElement | null>(null);
  const $menuIcon = useRef<HTMLButtonElement | null>(null);

  const handleScroll = useMemo(() => {
    return () => {
      if ($header.current && $nav.current && $menuIcon.current) {
        const isScrolled = window.scrollY > window.innerHeight * 0.2;
        $menuIcon.current.classList.toggle('bg-background', isScrolled);
        $menuIcon.current.classList.toggle('shadow-md', isScrolled);
        $menuIcon.current.classList.toggle('md:!scale-100', isScrolled);
        $menuIcon.current.classList.toggle('md:!opacity-100', isScrolled);
        $menuIcon.current.classList.toggle('md:!right-56', isScrolled);
        // $nav.current.classList.toggle('md:hidden', isScrolled);
        $nav.current.classList.toggle('!translate-y-[-150vw]', isScrolled);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      ref={$header}
      className="fixed h-12 top-0 z-50 w-full rounded-md !snap-none left-0 md:px-48 md:h-auto md:text-2xl md:p-5 md:shadow-none md:bg-transparent"
    >
      <button
        ref={$menuIcon}
        className="fixed top-3 right-12 text-2xl z-10 text-primary p-0.5 px-1 rounded-lg md:opacity-0 md:scale-0 md:right-[-50px] md:top-6"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* <div className="flex md:hidden list-none fixed right-0 w-screen justify-end bg-slate-950/70">
        <aside className="text-center text-3xl p-5 pt-16 text-background bg-secondary h-screen w-[50vw]">
          <nav className="flex flex-col gap-10">
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
            <li>LN</li>
            <a>X</a>
          </nav>
        </aside>
      </div> */}

      <nav
        ref={$nav}
        className="hidden list-none flex-row justify-end !snap-none md:flex"
      >
        <ul className="flex gap-7">
          <li className="nav-item">Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contato</li>
          <li>LN</li>
        </ul>
      </nav>
    </header>
  );
}
