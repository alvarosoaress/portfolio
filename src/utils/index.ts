import { RefObject, useEffect, useMemo, useState } from 'react';

export function useIsVisible(ref: RefObject<HTMLElement>, sectionName: string) {
  const [isIntersecting, setIntersecting] = useState(false);

  const sectionEvent = useMemo(() => new Event(sectionName), [sectionName]);

  useEffect(() => {
    const currentRef = ref.current!;
    let observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      },
    );

    observer.observe(currentRef);

    const resizeObserver = new ResizeObserver(() => {
      observer.unobserve(currentRef);

      observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          root: null,
          rootMargin: '0px',
          // This is necessary because if i would check for 0.8 of projects
          // it would be too big as the projects section height is dynamic
          threshold:
            currentRef.id === 'projects'
              ? (currentRef.clientHeight % 3) / 10
              : 0.8,
        },
      );

      observer.observe(currentRef);
    });

    resizeObserver.observe(currentRef);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [ref, ref.current?.clientHeight]);

  useEffect(() => {
    if (isIntersecting) {
      document.dispatchEvent(sectionEvent);
    }
  }, [isIntersecting, sectionEvent]);

  return isIntersecting;
}
