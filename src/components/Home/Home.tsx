'use client'

import React from 'react';
import styles from './Home.module.css';
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Hero from '@/assets/home/hero.png';
import EllipseFog from '@/assets/home/ellipse_fog.png';
import { useRouter } from 'next/navigation';
import { useGSAPAnimation } from '@/hooks/useGSAP';

const Home = () => {
    const heroContent = homeContent.hero
    const router = useRouter()

    useGSAPAnimation(`.${styles.heroImage}`, "fadeIn")

    return (
        <div className={styles.hero}>
            <div className={styles.ellipseFog}>
                <Image src={EllipseFog} alt="Ellipse Fog" />
            </div>

            {/* Hero Section */}
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{heroContent.title}</h1>
                    <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>
                    <button className={styles.heroButton} onClick={() => router.push('/contact')} >{heroContent.button}</button>
                </div>
                <div className={styles.heroImage}>
                    <Image src={Hero} alt={heroContent.title} />
                </div>
            </div>
        </div>
    )
}
export default Home;
