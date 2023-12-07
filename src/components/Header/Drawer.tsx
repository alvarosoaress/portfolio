import React, { MutableRefObject } from 'react';
import { IoIosClose } from 'react-icons/io';
import BrFlag from '../../assets/br-flag.svg';
import UsFlag from '../../assets/us-flag.svg';
import { useLanguage } from '../Text/LanguageProvider';

export type DrawerTypes = {
  $ref?: React.MutableRefObject<HTMLDivElement | null>;
  drawerOpen: boolean;
  setDrawerOpen: (value: React.SetStateAction<boolean>) => void;
  $drawerItems: Record<string, MutableRefObject<HTMLLIElement | null>>;
};

export default function Drawer({
  $ref,
  drawerOpen,
  setDrawerOpen,
  $drawerItems,
}: DrawerTypes) {
  const { lang, toggleLang, translated } = useLanguage();
  const sectionsNames = translated.sections;

  const navLinkStyle = `nav-item drawer-item w-fit relative transition-all duration-300 ease-in-out before:content-[''] before:bg-background before:absolute before:block before:h-1 before:-bottom-1 before:rounded`;

  return (
    <div
      ref={$ref}
      className={`${
        drawerOpen ? 'flex' : 'hidden'
      } right-0 animate-fadeIn list-none fixed w-screen justify-end bg-slate-950/70 z-20`}
      onClick={() => setDrawerOpen(!drawerOpen)}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="animate-enterLeft text-center text-3xl p-5 pt-16 bg-secondary h-screen w-[50vw] md:w-[20vw] md:text-4xl"
      >
        <nav className="flex flex-col items-center gap-10 md:gap-16">
          {Object.keys($drawerItems).map((section, index) => (
            <li
              key={section}
              ref={$drawerItems[section]}
              className={navLinkStyle}
              onClick={() => {
                setDrawerOpen(false);
                document.dispatchEvent(new Event(section));
              }}
            >
              <a
                aria-label="Section title"
                className="capitalize"
                href={`#${sectionsNames[index]}`}
              >
                {translated.headerItems[index]}
              </a>
            </li>
          ))}

          <li className="nav-item header-item" onClick={() => toggleLang()}>
            <img
              alt="Country Flag"
              src={lang === 'BR' ? BrFlag : UsFlag}
              width={35}
              height={35}
            />
          </li>

          <a
            aria-label="Open drawer"
            className="cursor-pointer text-background"
            onClick={() => setDrawerOpen(false)}
          >
            <IoIosClose />
          </a>
        </nav>
      </aside>
    </div>
  );
}
