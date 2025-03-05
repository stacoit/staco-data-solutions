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
                            <span className={styles.contactLabel}>Address:</span> 2712 County Line Road, St. Petersburg, FL 33701, USA
                        </p>
                        <p className={styles.contactLine}>
                            <span className={styles.contactLabel}>Email:</span> contact@stacodata.com
                        </p>
                        <p className={styles.contactLine}>
                            <span className={styles.contactLabel}>Phone:</span> +1 (555) 123-4567
                        </p>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112910.59274003663!2d-82.77985863716421!3d27.826510407383992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba9c0be39%3A0x8ae47e3adb68d30a!2sSt.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sin!4v1741203424765!5m2!1sen!2sin"
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

