'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Client from '@/assets/home/client.png';
export default function ClientResults() {
    useGSAPAnimation(`.${styles.clientResults}`, "fadeInUp")
    useGSAPAnimation(`.${styles.clientResultsCard}`, "slideUp")

    return (
        <>
            <div className={styles.clientResults}>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.clientResults.title}</h1>
                            <p className={styles.description}>{homeContent.clientResults.description}</p>
                            <p className={styles.paragraph}>{homeContent.clientResults.paragraph}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Client} alt={homeContent.clientResults.title} />
                        </div>
                    </div>
                    <div className={styles.clientResultsCards}>
                        {homeContent.clientResults.cards.map((card) => (
                            <div className={styles.clientResultsCard} key={card.id}>
                                <h1 className={styles.clientResultsNumber}>{card.id}</h1>
                                <h6 className={styles.clientResultsTitle}>{card.name}</h6>
                                <p className={styles.clientResultsDescription}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    )
}