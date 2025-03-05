'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import MapContainer from './MapContainer/MapContainer';
import { contactContent } from '@/config/site';
import ContactImg from '@/assets/contact/contact_hero.png';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAP';

const Contact = () => {
    const contactInfo = contactContent.hero

    useGSAPAnimation(`.${styles.rowContainer}`, "slideUp")
    useGSAPAnimation(`.${styles.image}`, "scaleRotateCarousel")

    return (
        <div className={styles.container}>
            <div className={styles.contactHeader}>
                <div className={`${styles.rowContainer}`}>
                    <div className={`${styles.contentContainer}`}>
                        <h1 className={styles.title} >{contactInfo.title}</h1>
                        <p className={styles.description} >{contactInfo.description}</p>
                        <p className={styles.paragraph} >{contactInfo.paragraph}</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={ContactImg} alt={contactInfo.title} />
                    </div>
                </div>
            </div>
            <MapContainer />
        </div>
    )
}
export default Contact;
