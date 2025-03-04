'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Why from '@/assets/home/why.png';
import DotElements from '@/assets/dot_elements.png'

export default function WhyChooseStaco() {
    useGSAPAnimation(`.${styles.whyChooseStaco}`, "scale")
    useGSAPAnimation(`.${styles.whyChooseStacoCard}`, "slideUp")

    return (
        <>
            <div className={styles.whyChooseStaco}>
                <div className={styles.whyChooseStacoContainer}>
                    <div className={styles.dotElements}>
                        <Image src={DotElements} alt="Dot Elements" />
                    </div>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{homeContent.whyChooseStaco.title}</h1>
                        <p className={styles.description}>{homeContent.whyChooseStaco.description}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={Why} alt={homeContent.whyChooseStaco.title} />
                    </div>
                </div>
                <div className={styles.whyChooseStacoCardsContainer}>
                    <div className={styles.whyChooseStacoCards}>
                        {homeContent.whyChooseStaco.cards.map((card) => (
                            <div className={styles.whyChooseStacoCard} key={card.id}>
                                <div className={styles.whyChooseStacoCircle} />
                                <h6 className={styles.whyChooseStacoTitle}>{card.name}</h6>
                                <p className={styles.whyChooseStacoDescription}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.whyChooseStacoPara}>
                        <p className={styles.paragraph}>{homeContent.whyChooseStaco.paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}