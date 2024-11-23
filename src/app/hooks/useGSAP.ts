'use client';

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GSAPTarget = string | Element | Element[] | NodeList | null;

gsap.registerPlugin(ScrollTrigger);

const defaultScrollTriggerConfig = {
  start: 'top bottom-=50',
  end: 'bottom top+=50',
  toggleActions: 'play none none reverse',
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
          duration: 0.8,
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
          duration: 0.8,
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
          duration: 0.8,
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
          duration: 0.8,
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
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            ...defaultScrollTriggerConfig,
          },
        }
      );
    });

    // Stagger container animations
    gsap.utils.toArray('.stagger-container').forEach((container: GSAPTarget) => {
      if (container instanceof Element) {
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
      }
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
          y: -50 * speed,
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
  }, [selector, speed]);
};
