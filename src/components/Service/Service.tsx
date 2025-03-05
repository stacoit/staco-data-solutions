'use client'

import React from 'react';
import styles from './Service.module.css';
import ServiceCards from './ServiceCards/ServiceCards';
import ServiceCTA from './ServiceCTA/ServiceCTA';
import { serviceContent } from '@/config/site';
import ServiceEllipseTopImg from '@/assets/service/service_ellipse_top.png';
import ServiceEllipseDownImg from '@/assets/service/service_ellipse_down.png';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAP';

const Service = () => {
    const hero = serviceContent.hero
    useGSAPAnimation(`.${styles.columnContentContainer}`, "slideUp")
    return (
        <div className={styles.container}>
            <Image src={ServiceEllipseTopImg} alt={hero.title} className={styles.ellipseTop}/>
            <Image src={ServiceEllipseDownImg} alt={hero.title} className={styles.ellipseDown}/>
            <div className={styles.columnContentContainer}>
                <h1 className={styles.title}>{hero.title}</h1>
                <p className={styles.description}>{hero.description}</p>
                <p className={styles.paragraph}>{hero.paragraph}</p>
            </div>
            <ServiceCards />
            <ServiceCTA />
        </div>
    )
}
export default Service;
