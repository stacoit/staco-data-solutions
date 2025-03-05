'use client'

import styles from "./WhatDriveUs.module.css"
import WhatDriveUsImg from "@/assets/about/drive_us.png"
import Image from "next/image"
import { useGSAPAnimation } from "@/hooks/useGSAP"

export default function WhatDriveUs() {

    useGSAPAnimation(`.${styles.container}`, "fadeInUp")
    useGSAPAnimation(`.${styles.valueBox}`, "slideUp")
    useGSAPAnimation(`.${styles.imageContainer}`, "scaleRotateCarousel")

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>What Drives Us</h1>

            <div className={styles.content}>
                <div className={styles.valueBox}>
                    <div className={styles.numberBox}>
                        <span className={styles.number}>1</span>
                    </div>
                    <h2 className={styles.valueTitle}>Innovation</h2>
                    <p className={styles.valueDescription}>Staying ahead with cutting-edge technology and solutions.</p>
                </div>

                <div className={styles.imageContainer}>
                    <Image src={WhatDriveUsImg} alt="Team collaboration" className={styles.centerImage} />
                </div>

                <div className={styles.valueBox}>
                    <div className={styles.numberBox}>
                        <span className={styles.number}>3</span>
                    </div>
                    <h2 className={styles.valueTitle}>Customer-Centricity</h2>
                    <p className={styles.valueDescription}>Putting your success at the heart of what we do.</p>
                </div>

                <div className={styles.valueBox}>
                    <div className={styles.numberBox}>
                        <span className={styles.number}>2</span>
                    </div>
                    <h2 className={styles.valueTitle}>Integrity</h2>
                    <p className={styles.valueDescription}>Building trust through transparency and ethical practices.</p>
                </div>

                <div className={styles.valueBox}>
                    <div className={styles.numberBox}>
                        <span className={styles.number}>4</span>
                    </div>
                    <h2 className={styles.valueTitle}>Excellence</h2>
                    <p className={styles.valueDescription}>Striving for the highest standards in all that we deliver.</p>
                </div>
            </div>
        </main>
    )
}

