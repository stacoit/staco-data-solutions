'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import WhyStacoImg from '@/assets/about/why_staco.png';

export default function WhyStaco() {
    useGSAPAnimation(`.${styles.mission}`, "scale")

    return (
        <>
            <div className={styles.mission}>
                <div className={`${styles.rowContainer}`}>
                    <div className={`${styles.contentContainer}`}>
                        <h1 className={styles.title} >{aboutContent.whyStaco.title}</h1>
                        <p className={styles.description} >{aboutContent.whyStaco.description}</p>
                        <p className={styles.paragraph} >{aboutContent.whyStaco.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={WhyStacoImg} alt={aboutContent.whyStaco.title} />
                    </div>
                </div>
            </div>
        </>
    )
}