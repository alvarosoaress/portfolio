import React, { useRef } from 'react';
import { useIsVisible } from '../../utils';

type SectionTypes = React.HtmlHTMLAttributes<HTMLDivElement> & {
  sectionName: string;
  children?: React.ReactNode;
};

export default function Section({
  children,
  sectionName,
  ...rest
}: SectionTypes) {
  const $ref = useRef<HTMLDivElement | null>(null);

  useIsVisible($ref, sectionName);

  return (
    <section
      {...rest}
      className={`flex flex-col items-center min-h-screen gap-5 pt-10 bg-background tall:justify-center md:justify-center md:snap-start ${
        rest.className ?? ''
      }`}
      id={sectionName}
      ref={$ref}
    >
      {children}
    </section>
  );
}
