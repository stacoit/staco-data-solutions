'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import VisionImg from '@/assets/about/vision.png';

export default function Vision() {
    useGSAPAnimation(`.${styles.mission}`, "scale")

    return (
        <>
            <div className={styles.mission}>
                <div className={`${styles.reverseContainer}`}>
                    <div className={`${styles.contentContainer}`}>
                        <h1 className={styles.title} >{aboutContent.vision.title}</h1>
                        <p className={styles.description} >{aboutContent.vision.description}</p>
                        <p className={styles.paragraph} >{aboutContent.vision.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={VisionImg} alt={aboutContent.vision.title} />
                    </div>
                </div>
            </div>
        </>
    )
}