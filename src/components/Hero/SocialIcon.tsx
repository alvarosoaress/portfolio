import React, { useRef } from 'react';
import { IconType } from 'react-icons';
import { useLanguage } from '../Text/LanguageProvider';

type SocialIconTypes = {
  Icon: IconType;
  link: string;
  openNewTab?: boolean;
  size?: number;
};

export default function SocialIcon({
  Icon,
  link,
  openNewTab,
  size,
}: SocialIconTypes) {
  const { translated } = useLanguage();

  const $clipboardPopup = useRef<HTMLDivElement>(null);

  return (
    <div className="relative hover:scale-125">
      <div
        ref={$clipboardPopup}
        className="absolute w-max p-2 text-lg rounded-lg rounded-bl-none pointer-events-none 
      top-[-30px] left-10 bg-opacity-80 text-background bg-text invisible opacity-0"
      >
        <p>{translated.clipboard}</p>
      </div>

      {openNewTab ? (
        <a
          aria-label="Social link"
          className="text-4xl cursor-pointer"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Icon size={size ? `${size}px` : '40px'} />
        </a>
      ) : (
        <button
          title="Social button"
          aria-label="Social button"
          className="text-4xl cursor-pointer"
          onClick={() => {
            $clipboardPopup.current?.classList.add('animate-popup');
            navigator.clipboard.writeText(link);
            setTimeout(() => {
              $clipboardPopup.current?.classList.remove('animate-popup');
            }, 4000);
          }}
        >
          <Icon size={'40px'} />
        </button>
      )}
    </div>
  );
}
