'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import JourneyImg from '@/assets/about/journey.png';

export default function Journey() {
    useGSAPAnimation(`.${styles.mission}`, "scale")

    return (
        <>
            <div className={styles.mission}>
                <div className={`${styles.columnContainer}`}>
                    <div className={`${styles.contentContainer} ${styles.columnContentContainer}`}>
                        <h1 className={styles.title} style={{ textAlign: 'center' }}>{aboutContent.journey.title}</h1>
                        <p className={styles.description} style={{ textAlign: 'center' }}>{aboutContent.journey.description}</p>
                        <p className={styles.paragraph} style={{ textAlign: 'center' }}>{aboutContent.journey.paragraph}</p>
                    </div>
                    <div className={`${styles.image} ${styles.imageCenter}`} style={{ textAlign: 'center' }}>
                        <Image src={JourneyImg} alt={aboutContent.journey.title} />
                    </div>
                </div>
            </div>
        </>
    )
}