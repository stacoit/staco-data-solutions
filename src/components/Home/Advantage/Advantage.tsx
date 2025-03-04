'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import AdvantageImg from '@/assets/home/advantage.png';

export default function Advantage() {
    useGSAPAnimation(`.${styles.advantage}`, "slideUp")

    return (
        <>
            <div className={styles.advantage}>
                <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{homeContent.advantage.title}</h1>
                        <p className={styles.description}>{homeContent.advantage.description}</p>
                        <p className={styles.paragraph}>{homeContent.advantage.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={AdvantageImg} alt={homeContent.advantage.title} />
                    </div>
                </div>
            </div>
        </>
    )
}