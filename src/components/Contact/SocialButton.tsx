import React, { useRef } from 'react';
import { IconType } from 'react-icons';
import { useLanguage } from '../Text/LanguageProvider';

type SocialButtonTypes = {
  Icon: IconType;
  link: string;
  text: string;
  openNewTab?: boolean;
  size?: number;
};

export default function SocialButton({
  Icon,
  link,
  openNewTab,
  size,
  text,
}: SocialButtonTypes) {
  const { translated } = useLanguage();

  const $clipboardPopup = useRef<HTMLDivElement>(null);

  return (
    <div className="relative hover:scale-110">
      {openNewTab ? (
        <a
          aria-label="Social link"
          className="flex w-[110px] md:w-[120px] flex-col items-center p-6 rounded-lg bg-primary text-background cursor-pointer md:gap-2"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-2xl">{text}</h2>
          <Icon size={size ? `${size}px` : '40px'} />
        </a>
      ) : (
        <>
          <button
            title="Social button"
            aria-label="Social button"
            className="flex w-[110px] md:w-[120px] flex-col items-center p-6 rounded-lg bg-primary text-background cursor-pointer md:gap-2"
            onClick={() => {
              $clipboardPopup.current?.classList.add('animate-popup');
              navigator.clipboard.writeText(link);
              setTimeout(() => {
                $clipboardPopup.current?.classList.remove('animate-popup');
              }, 4000);
            }}
          >
            <h2 className="text-2xl">{text}</h2>
            <Icon size={'40px'} />
          </button>
          <div
            ref={$clipboardPopup}
            className="absolute w-max p-2 rounded-lg pointer-events-none text-background bg-text invisible opacity-0 bottom-[-50px]
            left-1/2 transform -translate-x-1/2"
          >
            <svg
              className="absolute left-0 z-10 w-full h-2 text-text bottom-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,255 127.5,127.5 255,255"
              />
            </svg>
            <p>{translated.clipboard}</p>
          </div>
        </>
      )}
    </div>
  );
}
