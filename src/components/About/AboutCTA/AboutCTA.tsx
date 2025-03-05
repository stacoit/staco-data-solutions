'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutCTA() {
    useGSAPAnimation(`.${styles.mission}`, "scale")

    return (
        <>
            <div className={styles.mission}>
                <div className={`${styles.aboutCTAContainer}`}>
                    <p className={styles.description} style={{ textAlign: 'center' }}>{aboutContent.CTA.title}</p>
                    <p className={styles.paragraph} style={{ textAlign: 'center' }}>{aboutContent.CTA.description}</p>
                    <div className={styles.buttonsSideDrawer}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href="/contact" className={styles.contactButton}>
                                <span>Contact Us</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}