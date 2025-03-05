'use client'

import { useGSAPAnimation } from "@/hooks/useGSAP"
import styles from "../About.module.css"
import { aboutContent } from '@/config/site';
import Image from 'next/image';
import MeetTheTeamImg from '@/assets/about/meet_the_team.png';

export default function MeetTheTeam() {
    useGSAPAnimation(`.${styles.meetTheTeam}`, "fadeInUp")

    return (
        <>
            <div className={`${styles.mission} ${styles.meetTheTeam}`}>
                <div className={`${styles.columnContainer}`}>
                    <div className={`${styles.contentContainer} ${styles.columnContentContainer}`}>
                        <h1 className={styles.title} style={{ textAlign: 'center' }}>{aboutContent.meetTheTeam.title}</h1>
                        <p className={styles.description} style={{ textAlign: 'center' }}>{aboutContent.meetTheTeam.description}</p>
                        <p className={styles.paragraph} style={{ textAlign: 'center' }}>{aboutContent.meetTheTeam.paragraph}</p>
                    </div>
                    <div className={`${styles.image} ${styles.imageCenter}`} style={{ textAlign: 'center' }}>
                        <Image src={MeetTheTeamImg} alt={aboutContent.meetTheTeam.title} />
                    </div>
                </div>
            </div>
        </>
    )
}