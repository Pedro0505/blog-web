import React, { useEffect, useRef } from 'react';

interface useIntersectionObserverParams {
  render: () => Promise<void> | void;
  options?: IntersectionObserverInit;
}

function useIntersectionObserver({ render, options }: useIntersectionObserverParams) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const request = async () => {
    await render();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        request();
      }
    }, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return <div ref={observerRef} className="observer" />;
}

export default useIntersectionObserver;
