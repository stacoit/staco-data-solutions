'use client'

import styles from "./MapContainer.module.css"
import { useGSAPAnimation } from "@/hooks/useGSAP"

export default function MapContainer() {

    useGSAPAnimation(`.${styles.contactInfo}`, "slideUp")
    useGSAPAnimation(`.${styles.mapContainer}`, "scaleRotateCarousel")

    return (
        <div className={styles.container}>
            <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <h2 className={styles.findUsHeading}>Find Us Here</h2>
                    <h1 className={styles.mainHeading}>Visit us at our office or connect with us online.</h1>
                    <div className={styles.contactDetails}>
                        <p className={styles.addressLine}>
                            <span className={styles.contactLabel}>Address:</span> 350 Holger Way, San Jose, CA 95134, USA
                        </p>
                        <p className={styles.contactLine}>
                            <span className={styles.contactLabel}>Email:</span> info@stacodatasolutions.com
                        </p>
                        {/* <p className={styles.contactLine}>
                            <span className={styles.contactLabel}>Phone:</span> +1 (555) 123-4567
                        </p> */}
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.789603293235!2d-121.94495800000001!3d37.4184476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9002ee66775%3A0xbed47a3a3dd4693!2s350%20Holger%20Way%2C%20San%20Jose%2C%20CA%2095134%2C%20USA!5e0!3m2!1sen!2sin!4v1741284165421!5m2!1sen!2sin"
                        className={styles.mapFrame}
                        title="Current Place on a Map"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

