'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Strategy from '@/assets/home/strategy.png';
import Type1 from '@/assets/home/type_1.png';
import Type2 from '@/assets/home/type_2.png';
import Type3 from '@/assets/home/type_3.png';
import Lead from '@/assets/home/lead.png';

export default function OurStrategy() {
    useGSAPAnimation(`.${styles.ourStrategy}`, "slideRight")
    useGSAPAnimation(`.${styles.strategyCard}`, "slideUp")
    useGSAPAnimation(`.${styles.image}`, "scaleRotateCarousel")

    return (
        <>
            <div className={styles.ourStrategy}>
                <div className={styles.ourContainer}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{homeContent.ourStrategy.title}</h1>
                        <p className={styles.description}>{homeContent.ourStrategy.description}</p>
                        <p className={styles.paragraph}>{homeContent.ourStrategy.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={Strategy} alt={homeContent.ourStrategy.title} />
                    </div>
                </div>
                <div className={styles.strategyCards}>
                    <div className={styles.strategyCard}>
                        <Image src={Type1} alt="Strategy Card 1" />
                        <div className={styles.strategyCardSpace} />
                    </div>
                    <div className={styles.strategyCard}>
                        <div className={styles.strategyCardSpace} />
                        <Image src={Type2} alt="Strategy Card 2" />
                    </div>
                    <div className={styles.strategyCard}>
                        <Image src={Type3} alt="Strategy Card 3" />
                        <div className={styles.strategyCardSpace} />
                    </div>
                </div>
                <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                    <div className={styles.lead}>
                        <div className={`${styles.contentContainer} ${styles.leadContainer}`}>
                            <h1 className={styles.title}>{homeContent.leadGeneration.title}</h1>
                            <p className={styles.description}>{homeContent.leadGeneration.description}</p>
                            <p className={styles.paragraph}>{homeContent.leadGeneration.paragraph}</p>
                        </div>
                        <div className={styles.leadPoints}>
                            {homeContent.leadGeneration.cards.map((card) => (
                                <div className={styles.leadPoint} key={card.id}>
                                    <input type="radio" className={styles.radioButton} checked />
                                    <div className={styles.leadPointContent}>
                                        <h6 className={styles.leadPointTitle}>{card.name}</h6>
                                        <p className={styles.leadPointDescription}>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image src={Lead} alt={homeContent.leadGeneration.title} />
                    </div>
                </div>
            </div>
        </>
    )
}