import "@/styles/globals.css";
import Lenis from "lenis";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      smoothTouch: false, // Disable smooth scrolling for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <Component {...pageProps} />;
}
