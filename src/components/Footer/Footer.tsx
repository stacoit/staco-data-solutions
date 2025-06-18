'use client'

import React from "react"
import styles from "./Footer.module.css"
import Link from "next/link"
import { footerContent } from "@/config/site"

export default function Footer() {
    const footer = footerContent;

    return (
        <main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.companyInfo}>
                        <h2>{footer.title}</h2>
                        <h3>{footer.description}</h3>
                        <p>{footer.paragraph}</p>
                    </div>

                    <div className={styles.quickLinks}>
                        <h4>{footer.links.title}</h4>
                        <ul>
                            {footer.links.links.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.services}>
                        <h4>{footer.services.title}</h4>
                        <ul>
                            {footer.services.service.map((service) => (
                                <li key={service.id}>
                                    <Link href={service.href}>{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h4>{footer.contactUs.title}</h4>
                        <p>Email: {footer.contactUs.email}</p>
                        {/* <p>Phone: {footer.contactUs.phone}</p> */}
                        <p>Address: {footer.contactUs.address}</p>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>{footer.copyright}</p>
                </div>
            </footer>
        </main>
    )
}

