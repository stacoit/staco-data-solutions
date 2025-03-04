'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import Faq from '@/assets/home/faq.png';
import FAQAccordion from '../FAQAccordion/FAQAccordion';

export default function FAQ() {
    useGSAPAnimation(`.${styles.faq}`, "fadeInUp")

    return (
        <>
            <div className={styles.faq}>
                <div className={styles.ourContainer}>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>{homeContent.faq.title}</h1>
                        <p className={styles.description}>{homeContent.faq.description}</p>
                        <p className={styles.paragraph}>{homeContent.faq.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={Faq} alt={homeContent.faq.title} />
                    </div>
                </div>
                <FAQAccordion />
            </div>
        </>
    )
}