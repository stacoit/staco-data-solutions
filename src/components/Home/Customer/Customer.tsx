'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../Home.module.css"
import { homeContent } from '@/config/site';
import Image from 'next/image';
import DotElements from '@/assets/dot_elements.png'
import CustomerRatingCards from '../CustomerRatingCards/CustomerRatingCards';

export default function CustomerRating() {
    useGSAPAnimation(`.${styles.customerRating}`, "fadeInUp")

    return (
        <>
            <div className={styles.customerRating}>
                <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                    <div className={`${styles.contentContainer} ${styles.ourCommunityContainer}`}>
                        <div className={styles.dotElementsOurCommunity}>
                            <Image src={DotElements} alt="Dot" />
                        </div>
                        <h1 className={styles.title}>{homeContent.ourCommunity.title}</h1>
                        <p className={`${styles.description} ${styles.ourCommunityParagraph}`}>{homeContent.ourCommunity.description}</p>
                        <p className={`${styles.paragraph} ${styles.ourCommunityParagraph}`}>{homeContent.ourCommunity.paragraph}</p>
                    </div>
                </div>
                <CustomerRatingCards />
            </div>
        </>
    )
}