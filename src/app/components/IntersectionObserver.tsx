import 'intersection-observer';
import React, { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children?: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children = <div>Default content</div> }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.classList.add('animate-fadeIn');
          }
          observer.unobserve(ref.current!);
        }
      },
      {
        root: null, // Use the root option instead of threshold
        rootMargin: '0px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className='opacity-0 motion-safe:opacity-100'>
      {children}
    </div>
  );
};

export default FadeInSection;
