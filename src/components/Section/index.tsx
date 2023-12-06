import React, { useEffect, useMemo, useRef } from 'react';
import { useIsVisible } from '../../utils';

type SectionTypes = React.HtmlHTMLAttributes<HTMLDivElement> & {
  refName: string;
  children?: React.ReactNode;
};

export default function Section({ children, refName, ...rest }: SectionTypes) {
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
      {...rest}
      className={`flex flex-col items-center min-h-screen gap-5 pt-10 bg-background tall:justify-center md:justify-center md:snap-start ${
        rest.className ?? ''
      }`}
      id={refName}
      ref={$ref}
    >
      {children}
    </section>
  );
}
