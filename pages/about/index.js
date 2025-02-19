"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const images = [
    "https://images.pexels.com/photos/28861960/pexels-photo-28861960/free-photo-of-silhouette-of-cyclist-lifting-bike-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30117400/pexels-photo-30117400/free-photo-of-silhouette-of-surfer-at-sunset-in-taghazout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30432517/pexels-photo-30432517/free-photo-of-people-walking-on-historic-railway-platform.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function About() {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      let loadedImages = 0;
  
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          setProgress((loadedImages / images.length) * 100);
          if (loadedImages === images.length) {
            setTimeout(() => {
              gsap.to("#loader", { y: "-100%", duration: 1,delay:5, ease: "none", onComplete: () => setIsLoaded(true) });
            }, 500);
          }
        };
      });
    }, []);
  
    useEffect(() => {
      gsap.to("#counter-text", {
        textContent: progress.toFixed(0) + "%",
        snap: { textContent: 1 },
        duration: 4,
        delay:1,
        ease: "none",
      });
    }, [progress]);
  
    useEffect(() => {
      if (isLoaded) {
        gsap.fromTo(
          "#content",
          { opacity: 0  },
          { opacity: 1,  duration: 1, ease: "none" }
        );
      }
    }, [isLoaded]);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
        {!isLoaded && (
          <div
            id="loader"
            className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-4xl"
          >
            <span id="counter-text">0%</span>
          </div>
        )}
  
        {isLoaded && (
          <div id="content" className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold">Welcome to the Site!</h1>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {images.map((src, index) => (
                <Image key={index} src={src} width={300} height={200} alt={`image-${index}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
