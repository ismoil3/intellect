
"use client"

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Home, Search } from "lucide-react";

const PageNotFound = () => {
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const circlesRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      headlineRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.5 }
    );

    gsap.to(circlesRef.current, {
      scale: [1, 1.5, 1],
      opacity: [0.8, 0.4, 0.8],
      duration: 6,
      repeat: -1,
      stagger: 0.5,
    });

    gsap.fromTo(
      buttonsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, stagger: 0.3 }
    );
  }, []);

  const playSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/download/mixkit-cartoon-bubble-pop-616.mp3"
    ); // Replace with your custom sound URL
    audio.play();
  };

  return (
    <div className="not-found-container absolute h-screen top-[-90px]" onMouseMove={playSound}>
      {/* Animated Background */}
      <div className="background">
        <div
          className="circle"
          ref={(el) => (circlesRef.current[0] = el)}
        ></div>
        <div
          className="circle"
          ref={(el) => (circlesRef.current[1] = el)}
        ></div>
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="headline" ref={headlineRef}>
          Oops! Page Not Found
        </h1>
        <p className="subtext" ref={subtextRef}>
          Looks like this page got lost in the filters.
        </p>
        <div className="buttons">
          <button
            className="btn btn-home"
            ref={(el) => (buttonsRef.current[0] = el)}
          >
            <Home /> Go Home
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
