import { useEffect } from 'react';

interface useIntersectionObserverParams {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  render: () => Promise<void> | void;
  options?: IntersectionObserverInit;
}

function useIntersectionObserver({ ref, render, options }: useIntersectionObserverParams) {
  const request = async () => {
    await render();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        request();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
}

export default useIntersectionObserver;
