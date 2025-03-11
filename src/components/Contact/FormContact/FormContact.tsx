"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
            email: !/\b\S+@\S+\.\S+$/.test(formData.email),
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

        try {
            const response = await fetch("https://stacodatasolutions.com/api/v1/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                })
                toast.success("Form submitted successfully!")
            } else if (response.status === 400) {
                toast.error("Invalid inputs. Please check your information.")
            } else {
                toast.error("Something went wrong. Please try again.")
            }
        } catch (error) {
            toast.error("Network error. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    useGSAPAnimation(`.${styles.formGroup}`, "slideUp")
    useGSAPAnimation(`.${styles.form}`, "fadeIn")

    return (
        <main className={styles.container}>
            <ToastContainer />
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