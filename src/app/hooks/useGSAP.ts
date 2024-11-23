'use client';

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GSAPTarget = string | Element | Element[] | NodeList | null;
type GSAPVars = gsap.TweenVars;

gsap.registerPlugin(ScrollTrigger);

const defaultScrollTriggerConfig = {
  start: 'top bottom-=50',
  end: 'bottom top',
  toggleActions: 'play none none none', // Only play once when entering viewport
  once: true, // Animation plays only once
  markers: false,
};

export const useGSAPAnimation = () => {
  useEffect(() => {
    // Basic fade in for all scroll-animate elements
    gsap.utils.toArray('.scroll-animate').forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Gentle scale animation
    gsap.utils.toArray('.scale-animate').forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Simple text reveal
    gsap.utils.toArray('.text-reveal').forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Subtle slide animations
    gsap.utils.toArray('.slide-right').forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    gsap.utils.toArray('.slide-left').forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Stagger container animations
    gsap.utils.toArray('.stagger-container').forEach((container: GSAPTarget) => {
      const items = container.children;
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
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
export const useParallaxAnimation = (selector: string, speed: number = 0.3) => {
  useEffect(() => {
    gsap.utils.toArray(selector).forEach((element: GSAPTarget) => {
      gsap.fromTo(
        element,
        {
          y: 0,
        },
        {
          y: () => -50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, speed]);
};
