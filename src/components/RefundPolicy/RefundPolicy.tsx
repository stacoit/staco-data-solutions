"use client"

import {
    RotateCcw,
    CalendarX,
    PackageCheck,
    CreditCard,
    ShieldCheck,
    FileText,
    MapPin,
    ArrowUp,
    Clock,
    Shield,
    CheckCircle,
} from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import styles from "./RefundPolicy.module.css"

const sections = [
    {
        title: "REFUND POLICY",
        icon: "RotateCcw",
        badge: "Money Back",
        content: `We offer refunds on services only if the service has not been rendered or if there is a valid issue with delivery or quality. Refund requests must be made within 3 to 5 days of purchase or as scheduled.

Please contact us at info@stacodatasolutions.com with your service details and reason for the refund. Approved refunds will be credited to your original method of payment within 3 to 5 business days.`,
    },
    {
        title: "CANCELLATION POLICY",
        icon: "CalendarX",
        badge: "Flexible",
        content: `You may cancel a scheduled service up to 24 to 48 hours before the service start time.

Cancellations made after this period may incur a cancellation fee, be non-refundable, or depends on the specific payment as scheduled.

To cancel, please email us at info@stacodatasolutions.com with your order reference.`,
    },
    {
        title: "SERVICE DELIVERY POLICY",
        icon: "PackageCheck",
        badge: "Guaranteed",
        content: `We do not ship physical products. Our services are delivered either digitally or in person, depending on the nature of the service.

For digital services, the access of the deliverables will be provided via email, within 1 to 2 days of purchase or as scheduled.

For scheduled services (e.g., consultations), you will receive confirmation of your appointment via email. It is your responsibility to ensure your availability at the agreed time.

If you do not receive your service as expected, please contact us at info@stacodatasolutions.com so we can resolve the issue promptly.`,
    },
    {
        title: "PAYMENT FLOW",
        icon: "CreditCard",
        badge: "Secure",
        content: `All service payments are initiated via secure payment links provided by us. Upon confirmation of the service details, a payment link containing the service description, amount, and currency will be sent to you via email.

You will complete the payment by clicking the link and submitting card details through our secure payment gateway. By submitting payment, you agree to the terms of the service and authorizes the transaction.

Please ensure that the payment link is accessed only by you, as it contains sensitive payment information. The link will remain valid for 3 to 5 days unless otherwise specified. Services will only be confirmed or scheduled upon successful payment receipt or as scheduled.

If you experience issues during payment or suspect fraudulent activity, please contact us immediately at info@stacodatasolutions.com.`,
    },
    {
        title: "PRIVACY POLICY",
        icon: "ShieldCheck",
        badge: "Protected",
        content: `We are committed to protecting your privacy. We collect personal information such as name, email address, billing/shipping addresses, and payment details solely for the purpose of processing your orders and improving your experience.

Your information is never sold or shared with third parties except as required to fulfill your order or by law.

We use industry-standard security practices to protect your data. By using our website, you consent to our privacy practices.`,
    },
    {
        title: "TERMS OF USE",
        icon: "FileText",
        badge: "Legal",
        content: `By accessing or using our website, you agree to comply with and be bound by these terms.
You may not use our products or services for any unlawful purpose or violate any applicable laws.

We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of the updated terms.

All content on this site is owned by or licensed to us and may not be copied or reused without permission.`,
    },
    {
        title: "COMPANY INFO",
        icon: "MapPin",
        badge: "Contact",
        content: `
        Company Legal Name: Staco Data Solutions
        Address: 350 Holger Way, San Jose, CA 95134, USA
        For any inquiries, please contact us at info@stacodatasolutions.com`,
    },
]

const iconMap = {
    RotateCcw,
    CalendarX,
    PackageCheck,
    CreditCard,
    ShieldCheck,
    FileText,
    MapPin,
}

const stats = [
    { icon: Clock, label: "24/7 Support", value: "Always Available" },
    { icon: Shield, label: "Secure Processing", value: "Bank-Level Security" },
    { icon: CheckCircle, label: "Satisfaction Rate", value: "99.9%" },
]

export default function RefundPolicy() {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [activeSection, setActiveSection] = useState(0)
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const headerRef = useRef(null)
    const isHeaderInView = useInView(headerRef, { once: true })

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const headerVariants = {
        hidden: { opacity: 0, y: -40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const statsVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <div className={styles.pageWrapper}>
            {/* Animated Background */}
            <motion.div className={styles.backgroundGradient} style={{ y: backgroundY }} />

            {/* Floating Elements */}
            <div className={styles.floatingElements}>
                <motion.div
                    className={styles.floatingCircle1}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className={styles.floatingCircle2}
                    animate={{
                        y: [0, 30, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Progress Bar */}
            <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />

            <main className={styles.container}>
                <motion.header
                    ref={headerRef}
                    className={styles.header}
                    variants={headerVariants}
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className={styles.headerContent}
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <motion.div
                            className={styles.headerBadge}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                        >
                            <Shield className={styles.badgeIcon} />
                            <span>Trusted & Secure</span>
                        </motion.div>

                        <h1 className={styles.mainTitle}>
                            <motion.span
                                className={styles.titleGradient}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Refund & Policy
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Information
                            </motion.span>
                        </h1>

                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            Comprehensive policies designed for transparency and trust
                        </motion.p>

                        {/* Stats Section */}
                        <motion.div className={styles.statsContainer} variants={statsVariants} initial="hidden" animate="visible">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.statItem}
                                    variants={statsVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <stat.icon className={styles.statIcon} />
                                    <div className={styles.statContent}>
                                        <div className={styles.statValue}>{stat.value}</div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.header>

                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {sections.map((section, index) => {
                        const IconComponent = iconMap[section.icon as keyof typeof iconMap]

                        return (
                            <motion.section
                                key={index}
                                className={styles.section}
                                variants={sectionVariants}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                                }}
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                onViewportEnter={() => setActiveSection(index)}
                            >
                                <motion.div
                                    className={styles.sectionInner}
                                    whileHover={{ scale: 1.005 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                >
                                    <motion.div
                                        className={styles.sectionBadge}
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    >
                                        {section.badge}
                                    </motion.div>

                                    <div className={styles.sectionHeader}>
                                        <motion.div
                                            className={styles.iconWrapper}
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.15,
                                            }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                        >
                                            <IconComponent className={styles.icon} />
                                        </motion.div>
                                        <div className={styles.titleWrapper}>
                                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                                            <div className={styles.titleUnderline} />
                                        </div>
                                    </div>

                                    <motion.div
                                        className={styles.sectionContent}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        {section.content.split("\n\n").map((paragraph, pIndex) => (
                                            <motion.p
                                                key={pIndex}
                                                className={styles.paragraph}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: pIndex * 0.15,
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                {paragraph}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.section>
                        )
                    })}
                </motion.div>

                {/* Scroll to Top Button */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            className={styles.scrollTopButton}
                            onClick={scrollToTop}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0, rotate: 180 }}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <ArrowUp className={styles.scrollTopIcon} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}
