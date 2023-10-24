import { RefObject, useEffect, useMemo, useState } from 'react';

export function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: 0.8 },
      ),
    [],
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return isIntersecting;
}
