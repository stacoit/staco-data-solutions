"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import styles from "./CustomerRatingCards.module.css"
import "./CustomerRatingCards.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { homeContent } from "@/config/site"
import QuoteIcon from "@/assets/home/quote_icon.svg"
import Image from "next/image"

export default function CustomerRatingCards() {
    const ourCommunity = homeContent.ourCommunity
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className={styles.star}>
                        ★
                    </span>,
                )
            } else if (hasHalfStar && i === fullStars) {
                stars.push(
                    <span key={i} className={styles.starHalf}>
                        ★
                    </span>,
                )
            } else {
                stars.push(
                    <span key={i} className={styles.starEmpty}>
                        ★
                    </span>,
                )
            }
        }
        return stars
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.sliderContainer}>
                    <div className={styles.decorativeCircle}></div>
                    <div className={styles.decorativeCircle2}></div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className={styles.swiper}
                    >
                        {ourCommunity.cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className={styles.testimonialCard}>
                                    <Image className={styles.quoteIcon} src={QuoteIcon} alt="Quote Icon" />
                                    <div className={styles.review}>{card.review}</div>
                                    <div className={styles.name}>{card.name}</div>
                                    <div className={styles.rating}>{renderStars(card.rating)}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </main>
    )
}

