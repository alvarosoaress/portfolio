import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const $header = useRef<HTMLDivElement | null>(null);
  const $nav = useRef<HTMLButtonElement | null>(null);
  const $menuIcon = useRef<HTMLButtonElement | null>(null);
  const $drawer = useRef<HTMLDivElement | null>(null);

  const $navItems: Record<string, MutableRefObject<HTMLLIElement | null>> = {
    home: useRef<HTMLLIElement | null>(null),
    about: useRef<HTMLLIElement | null>(null),
    projects: useRef<HTMLLIElement | null>(null),
    contact: useRef<HTMLLIElement | null>(null),
  };

  const navLinkStyle = `w-fit relative transition-all duration-300 ease-in-out before:content-[''] before:bg-background before:absolute before:block before:h-1 before:-bottom-1 before:rounded`;

  // Animations when user scrolls
  const handleScroll = useCallback(() => {
    const { current: header } = $header;
    const { current: menuIcon } = $menuIcon;
    const { current: nav } = $nav;

    if (header && menuIcon && nav) {
      const isScrolled = window.scrollY > window.innerHeight * 0.2;
      menuIcon.classList.toggle('bg-background', isScrolled);
      menuIcon.classList.toggle('shadow-md', isScrolled);
      menuIcon.classList.toggle('md:!scale-100', isScrolled);
      menuIcon.classList.toggle('md:!opacity-100', isScrolled);
      menuIcon.classList.toggle('md:!right-56', isScrolled);
      nav.classList.toggle('!translate-y-[-150vw]', isScrolled);
    }
  }, []);

  // Appear underline in drawer depending where user is on page
  const handleVisible = useCallback(() => {
    Object.values($navItems).forEach((navItem) => {
      navItem.current?.classList.remove('before:w-full');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Verify where user is
  const handleLocation = useCallback(
    (section: string) => () => {
      handleVisible();
      $navItems[section].current?.classList.add('before:w-full');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleVisible],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('home', handleLocation('home'));
    document.addEventListener('about', handleLocation('about'));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('home', handleLocation('home'));
      document.removeEventListener('about', handleLocation('about'));
    };
  }, [handleScroll, handleLocation]);

  return (
    <header
      ref={$header}
      className="fixed h-12 top-0 z-50 w-full rounded-md !snap-none left-0 md:px-48 md:h-auto md:text-2xl md:p-5 md:shadow-none md:bg-transparent"
    >
      <button
        ref={$menuIcon}
        className="fixed top-3 right-8 text-2xl z-10 text-primary p-0.5 px-1 rounded-lg outline-none md:opacity-0 md:scale-0 md:right-[-50px] md:top-6 hover:drop-shadow-lg hover:scale-110"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        ref={$drawer}
        className={`${
          drawerOpen ? 'flex' : 'hidden'
        } right-0 animate-fadeIn list-none fixed w-screen justify-end bg-slate-950/70 z-20`}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <aside className="animate-enterLeft text-center text-3xl p-5 pt-16 text-background bg-secondary h-screen w-[50vw]">
          <nav className="flex flex-col items-center gap-10">
            {Object.keys($navItems).map((section) => (
              <li
                key={section}
                ref={$navItems[section]}
                className={navLinkStyle}
                onClick={() => {
                  setDrawerOpen(false);
                  document.dispatchEvent(new Event(section));
                }}
              >
                <a className="capitalize" href={`#${section}`}>
                  {section}
                </a>
              </li>
            ))}
            <a onClick={() => setDrawerOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </a>
          </nav>
        </aside>
      </div>

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
