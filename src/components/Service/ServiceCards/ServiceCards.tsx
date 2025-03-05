'use client'

import styles from "./ServiceCards.module.css"
import { serviceContent } from '@/config/site';
import Image from "next/image";
import { useGSAPAnimation } from "@/hooks/useGSAP";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
    const services = serviceContent.cards
    const router = useRouter();

    useGSAPAnimation(`.${styles.card}`, "scale")

    return (
        <div className={styles.container}>
            <div className={styles.servicesGrid}>
                {services.map((service) => (
                    <div className={styles.card} key={service.id}>
                        <Image src={service.icon} alt={service.name} className={styles.icon} />
                        <h2 className={styles.title}>{service.name}</h2>
                        <p className={styles.description}>{service.text}</p>
                        <ul className={styles.featuresList}>
                            {service.points.map((point) => (
                                <li key={point} className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.buttonContainer}>
                            <button className={styles.learnMoreButton} onClick={() => router.push("/contact")}>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

