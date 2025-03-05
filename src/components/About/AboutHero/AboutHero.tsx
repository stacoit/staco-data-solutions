'use client'

import React from 'react';
import styles from '../About.module.css';
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import Hero from '@/assets/about/about_hero.png';
import { useGSAPAnimation } from '@/hooks/useGSAP';

const AboutHero = () => {
    const heroContent = aboutContent.hero;

    useGSAPAnimation(`.${styles.hero}`, "slideUp")
    useGSAPAnimation(`.${styles.image}`, "scaleRotateCarousel")

    return (
        <div className={styles.hero}>
            {/* Hero Section */}
            <div className={styles.rowContainer}>
                <div className={styles.contentContainer}>
                    <h1 className={styles.heroTitle}>{heroContent.title}</h1>
                    <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>
                    <p className={styles.heroDescription}>{heroContent.description}</p>
                </div>
                <div className={styles.image}>
                    <Image src={Hero} alt={heroContent.title} />
                </div>
            </div>
        </div>
    )
}
export default AboutHero;
