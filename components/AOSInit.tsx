'use client';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    const init = () => {
      AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 80 });
      AOS.refresh();
    };

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
      return () => window.removeEventListener('load', init);
    }
  }, []);
  return null;
}