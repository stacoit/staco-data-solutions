'use client';

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultScrollTriggerConfig = {
  start: 'top bottom-=50',
  end: 'bottom top+=50',
  toggleActions: 'play none none reverse',
};

export const useGSAPAnimation = () => {
  useEffect(() => {
    // Basic fade in for all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Gentle scale animation
    const scaleElements = document.querySelectorAll('.scale-animate');
    scaleElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Simple text reveal
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Subtle slide animations
    const slideRightElements = document.querySelectorAll('.slide-right');
    slideRightElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    const slideLeftElements = document.querySelectorAll('.slide-left');
    slideLeftElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Stagger container animations
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach((container) => {
      const items = container.children;
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

// Smoother parallax effect
export const useParallaxAnimation = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 0,
        },
        {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);
};
