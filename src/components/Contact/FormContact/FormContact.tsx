"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import styles from "./FormContact.module.css"
import { useGSAPAnimation } from "@/hooks/useGSAP"

export default function FormContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: false,
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === "",
            email: !/^\S+@\S+\.\S+$/.test(formData.email),
            message: formData.message.trim() === "",
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some((error) => error)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        // Simulate form submission
        try {
            // Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                message: "",
            })

            alert("Form submitted successfully!")
        } catch (error) {
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        setIsSubmitting(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setFormData({
                name: "",
                email: "",
                message: "",
            })
            alert("Form submitted successfully!")
        } catch (error) {
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    useGSAPAnimation(`.${styles.formGroup}`, "slideUp")
    useGSAPAnimation(`.${styles.form}`, "fadeIn")

    return (
        <main className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.leftContent}>
                    <h1 className={styles.title}>Start the Conversation</h1>
                    <p className={styles.description}>
                        Ready to transform your business with data? We're here to listen, understand, and provide tailored solutions
                        for your marketing and sales growth. Share your details, and we'll get back to you shortly.
                    </p>
                </div>
            </div>

            <div className={styles.rightSection}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="eg : David"
                            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="eg : david123@gmail.com"
                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how can we help!"
                            className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </main>
    )
}

