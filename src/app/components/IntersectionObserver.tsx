import 'intersection-observer';
import React, { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children?: React.ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.classList.add('animate-fadeIn');
          }
          if (node) {
            observer.unobserve(node);
          }
        }
      },
      {
        root: null, // Use the root option instead of threshold
        rootMargin: '0px',
      },
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div ref={ref} className='opacity-0 motion-safe:opacity-100'>
      {children ?? null}
    </div>
  );
}
