'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';

export default function DataInsights() {
    useGSAPAnimation(`.${styles.dataInsights}`, "fadeInUp")
    useGSAPAnimation(`.${styles.dataInsightsCard}`, "slideUp")

    return (
        <>
            <div className={styles.dataInsights}>
                <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{homeContent.dataInsights.title}</h1>
                        <p className={styles.description}>{homeContent.dataInsights.description}</p>
                        <p className={styles.paragraph}>{homeContent.dataInsights.paragraph}</p>
                    </div>
                    <div className={styles.dataInsightsCards}>
                        {homeContent.dataInsights.cards.map((card) => (
                            <div className={styles.dataInsightsCard} key={card.id}>
                                <div className={styles.dataInsightsHeader}>
                                    <h6 className={styles.dataInsightsTitle}>{card.name}</h6>
                                    <Image src={card.icon} alt={card.name} />
                                </div>
                                <p className={styles.dataInsightsDescription}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}