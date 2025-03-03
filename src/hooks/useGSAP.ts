'use client';

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultScrollTriggerConfig = {
  start: 'top bottom-=50',
  end: 'bottom top+=50',
  toggleActions: 'play reverse play reverse',
};

export const useGSAPAnimation = (selector: string, animationType: string) => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(selector);

    scrollElements.forEach((element) => {
      switch (animationType) {
        case 'fullExperience':
          // Initial reveal
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.8,
              rotationY: 30,
              rotationX: 10,
              transformOrigin: "center center"
            },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                ...defaultScrollTriggerConfig,
              },
            }
          );

          // Glow and pulse
          gsap.fromTo(
            element,
            {
              filter: "brightness(1) drop-shadow(0 0 0px rgba(0, 0, 0, 0.8))"
            },
            {
              filter: "brightness(1.2) drop-shadow(0 0 20px rgba(0, 0, 0, 1))",
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            }
          );

          break;


        case 'scaleRotateCarousel':
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.8,
              rotation: 10
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                ...defaultScrollTriggerConfig,
              },
            }
          );
          break;

        case 'flip3D':
          // 3D Flip Animation
          gsap.fromTo(
            element,
            {
              opacity: 0,
              rotationY: 180,
              transformOrigin: "50% 50%"
            },
            {
              opacity: 1,
              rotationY: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                ...defaultScrollTriggerConfig,
              },
            }
          );
          break;

        case 'fadeIn':
          gsap.fromTo(
            element,
            { opacity: 0, y: 15 },
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
          break;

        case 'scale':
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.95 },
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
          break;

        case 'textReveal':
          gsap.fromTo(
            element,
            { opacity: 0, y: 10 },
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
          break;

        case 'slideRight':
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
          break;

        case 'slideLeft':
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
          break;

        case 'slideUp':
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
          break;

        case 'slideDown':
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: -15,
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
          break;

        case 'fadeInUp':
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
          break;

        default:
          break;
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animationType]);
};

// Smoother parallax effect
export const useParallaxAnimation = (selector: string, speed: number = 0.3) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, speed]);
};
