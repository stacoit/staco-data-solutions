'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Solution from '@/assets/home/solution.png';

export default function OurSolution() {
    const ourSolutionContent = homeContent.ourSolution
    useGSAPAnimation(`.${styles.ourSolution}`, "fadeIn")

    return (
        <>
            <div className={styles.ourSolution}>
                <div className={styles.ourContainer}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{ourSolutionContent.title}</h1>
                        <p className={styles.description}>{ourSolutionContent.description}</p>
                        <p className={styles.paragraph}>{ourSolutionContent.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={Solution} alt={ourSolutionContent.title} />
                    </div>
                </div>
                <div className={styles.solutionCards}>
                    {ourSolutionContent.cards.map((card) => (
                        <div className={styles.solutionCard} key={card.id}>
                            <h3 className={styles.solutionNumber}>{card.id}</h3>
                            <h6 className={styles.solutionTitle}>{card.name}</h6>
                            <p className={styles.solutionDescription}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}