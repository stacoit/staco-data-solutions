'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import MissionImg from '@/assets/about/mission.png';

export default function Mission() {
    useGSAPAnimation(`.${styles.mission}`, "scale")

    return (
        <>
            <div className={styles.mission}>
                <div className={`${styles.columnContainer}`}>
                    <div className={`${styles.contentContainer} ${styles.columnContentContainer}`}>
                        <h1 className={styles.title} style={{ textAlign: 'center' }}>{aboutContent.mission.title}</h1>
                        <p className={styles.description} style={{ textAlign: 'center' }}>{aboutContent.mission.description}</p>
                        <p className={styles.paragraph} style={{ textAlign: 'center' }}>{aboutContent.mission.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={MissionImg} alt={aboutContent.mission.title} />
                    </div>
                </div>
            </div>
        </>
    )
}