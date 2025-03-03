"use client"

import { useState } from "react"
import styles from "./FAQAccordion.module.css"
import { homeContent } from "@/config/site"

export default function FAQAccordion() {
    const accordionData = homeContent.faq.cards;
    const [activeId, setActiveId] = useState<number | null>(accordionData[0]?.id || null);

    const toggleAccordion = (id: number) => {
        setActiveId(activeId === id ? null : id)
    }


    return (
        <div className={styles.container}>
            <div className={styles.accordionContainer}>
                {accordionData.map((item) => (
                    <div key={item.id} className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ""}`}>
                        <button
                            className={styles.accordionHeader}
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={activeId === item.id}
                        >
                            <span className={styles.question}>{item.question}</span>
                            <span className={styles.arrow}>
                                <svg
                                    className={styles.icon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className={styles.accordionContent}>
                            <div className={styles.answer}>{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

