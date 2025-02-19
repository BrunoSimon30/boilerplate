import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const handleWheel = (e) => {
      console.log(e.deltaY);
      
      if (e.deltaY > 0) {
        console.log(e.deltaY, "upar");
      } else {
        console.log(e.deltaY, "necha");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
  <>
     <section className="h-screen bg-slate-900 flex justify-center items-center">
        <h1 className="text-white text-4xl">Smooth Scrolling with Lenis</h1>
        <Link href="/about">About us</Link>
      </section>
      <section className="h-screen bg-gray-800 flex justify-center items-center">
        <h2 className="text-white text-3xl">Scroll Down</h2>
      </section>
      <section className="h-screen bg-gray-700 flex justify-center items-center">
        <h2 className="text-white text-3xl">More Content</h2>
      </section>
 
  </>
  );
}
