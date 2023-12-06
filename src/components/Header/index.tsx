import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Drawer from './Drawer';
import { useLanguage } from '../Text/LanguageProvider';
import BrFlag from '../../assets/br-flag.svg';
import UsFlag from '../../assets/us-flag.svg';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const { translated, lang, toggleLang } = useLanguage();
  const navItems = translated.headerItems;
  const sections = translated.sections;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const $header = useRef<HTMLDivElement | null>(null);
  const $nav = useRef<HTMLButtonElement | null>(null);
  const $menuIcon = useRef<HTMLButtonElement | null>(null);
  const $drawer = useRef<HTMLDivElement | null>(null);

  const $drawerItems: Record<string, MutableRefObject<HTMLLIElement | null>> = {
    home: useRef<HTMLLIElement | null>(null),
    about: useRef<HTMLLIElement | null>(null),
    projects: useRef<HTMLLIElement | null>(null),
    contact: useRef<HTMLLIElement | null>(null),
  };

  // Animations when user scrolls
  const handleScroll = useCallback(() => {
    const { current: header } = $header;
    const { current: menuIcon } = $menuIcon;
    const { current: nav } = $nav;
    const { current: drawer } = $drawer;

    // Verifying drawer visibility to stop header showing while drawer is open
    if (header && menuIcon && nav && drawer?.classList[0] !== 'flex') {
      const isScrolled = window.scrollY > window.innerHeight * 0.2;
      menuIcon.classList.toggle('bg-background', isScrolled);
      menuIcon.classList.toggle('shadow-md', isScrolled);
      menuIcon.classList.toggle('md:!scale-100', isScrolled);
      menuIcon.classList.toggle('md:!opacity-100', isScrolled);
      menuIcon.classList.toggle('md:!right-56', isScrolled);
      nav.classList.toggle('!translate-y-[-150vw]', isScrolled);
    }
  }, []);

  // Disappear underline in name of no visible section
  const handleVisible = useCallback(() => {
    Object.values($drawerItems).forEach((navItem) => {
      navItem.current?.classList.remove('text-background');
      navItem.current?.classList.remove('before:w-full');
      navItem.current?.classList.remove('!bg-[0]');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Appear underline in drawer section name depending where user is on page
  const handleLocation = useCallback(
    (section: string) => () => {
      handleVisible();
      $drawerItems[section].current?.classList.add('text-background');
      $drawerItems[section].current?.classList.add('before:w-full');
      $drawerItems[section].current?.classList.add('!bg-[0]');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleVisible],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('home', handleLocation('home'));
    document.addEventListener('about', handleLocation('about'));
    document.addEventListener('projects', handleLocation('projects'));
  }, [handleScroll, handleLocation]);

  return (
    <header
      ref={$header}
      className={`fixed h-12 top-0 z-50 w-full rounded-md !snap-none left-0 md:px-48 md:h-auto md:text-2xl md:shadow-none md:bg-transparent ${
        drawerOpen ? `md:pt-0` : `md:p-5`
      }`}
    >
      <button
        ref={$menuIcon}
        className="fixed top-3 right-8 text-2xl z-10 text-primary p-0.5 px-1 rounded-lg outline-none md:opacity-0 md:scale-0 md:right-[-50px] md:top-6 hover:drop-shadow-lg hover:scale-110 cursor-pointer"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <FaBars />
      </button>

      <Drawer
        $drawerItems={$drawerItems}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        $ref={$drawer}
      />

      <nav
        ref={$nav}
        className="hidden list-none flex-row justify-end !snap-none md:flex"
      >
        <ul className="flex items-center gap-7">
          {navItems.map((item, i) => (
            <li className="nav-item header-item" key={item}>
              <a href={`#${sections[i]}`}>{item}</a>
            </li>
          ))}

          <li className="nav-flag" onClick={() => toggleLang()}>
            <img src={lang === 'BR' ? BrFlag : UsFlag} width={25} height={25} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
