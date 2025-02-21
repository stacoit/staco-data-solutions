'use client'

import React from 'react';
import styles from './Home.module.css';
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Hero from '@/assets/home/hero.png';
import Solution from '@/assets/home/solution.png';
import EllipseFog from '@/assets/home/ellipse_fog.png';
import { useRouter } from 'next/navigation';

const Home = () => {
    const heroContent = homeContent.hero
    const ourSolutionContent = homeContent.ourSolution
    const router = useRouter()
    return (
        <div>
            <div className={styles.container}>
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
                
                {/* Our Solution Section */}
                <div className={styles.ourSolution}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{ourSolutionContent.title}</h1>
                        <p className={styles.description}>{ourSolutionContent.description}</p>
                        <p className={styles.paragraph}>{ourSolutionContent.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={Solution} alt={ourSolutionContent.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
