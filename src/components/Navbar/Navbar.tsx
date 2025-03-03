"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { usePathname } from "next/navigation"
import styles from "./Navbar.module.css"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const sideDrawerRef = useRef<HTMLDivElement>(null)
    const [navLinks, setNavLinks] = useState(siteConfig.navigation.map(link => ({
        ...link,
        active: pathname === link.href,
    })))

    useEffect(() => {
        const correctPathName = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
        if (correctPathName) {
            const updatedLinks = siteConfig.navigation.map(link => ({
                ...link,
                active: correctPathName === link.href,
            }));
            setNavLinks(updatedLinks);

            if (pathname === "/") {
                router.push("/home");
            }
        }
    }, [pathname]);

    const handleNavLinkClick = (href: string) => {
        router.push(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (sideDrawerRef.current && !sideDrawerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const closeSideDrawer = () => {
        setIsOpen(false)
    };

    return (
        <motion.nav
            className={styles.navbar}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <Link href="/" className={styles.brand}>
                    <Image
                        src="/images/sds_logo.png"
                        alt="Staco Data Solutions Logo"
                        width={32}
                        height={32}
                        priority
                        className={styles.logo}
                    />
                    <span className={styles.brandText}>Staco Data Solutions</span>
                </Link>
            </div>

            <ul className={styles.menuItems}>
                {navLinks.map((item, index) => (
                    <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href={item.href} className={item.active ? styles.menuItemActive : styles.menuItem} onClick={() => handleNavLinkClick(item.href)}>
                            <span>{item.name}</span>
                        </Link>
                    </motion.li>
                ))}
            </ul>

            <div className={styles.buttons}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link href="/contact" className={styles.contactButton}>
                        <span>Get Start</span>
                    </Link>
                </motion.div>
            </div>

            <motion.button
                className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className={styles.mobileMenuIcon} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className={styles.overlay}
                            onClick={closeSideDrawer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            ref={sideDrawerRef}
                            className={`${styles.sideDrawer} ${styles.sideDrawerOpen}`}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.button
                                className={styles.closeIcon}
                                onClick={closeSideDrawer}
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ✕
                            </motion.button>
                            {navLinks.map((item, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href={item.href} className={item.active ? styles.sideDrawerItemActive : styles.sideDrawerItem} onClick={closeSideDrawer}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className={styles.buttonsSideDrawer}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <Link href="/contact" className={styles.contactButton}>
                                        <span>Get Start</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar

