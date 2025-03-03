'use client'

import React from 'react';
import styles from './Home.module.css';
import { homeContent } from '@/config/site';
import Image from 'next/image';
import DotElements from '@/assets/dot_elements.png'
import Hero from '@/assets/home/hero.png';

import Why from '@/assets/home/why.png';
import EllipseFog from '@/assets/home/ellipse_fog.png';
import Strategy from '@/assets/home/strategy.png';
import { useRouter } from 'next/navigation';
import Type1 from '@/assets/home/type_1.png';
import Type2 from '@/assets/home/type_2.png';
import Type3 from '@/assets/home/type_3.png';
import Lead from '@/assets/home/lead.png';
import Faq from '@/assets/home/faq.png';
import Client from '@/assets/home/client.png';
import Advantage from '@/assets/home/advantage.png';
import CustomerRatingCards from './CustomerRatingCards/CustomerRatingCards';
import FAQAccordion from './FAQAccordion/FAQAccordion';

import OurSolution from './OurSolution/OurSolution';

const Home = () => {
    const heroContent = homeContent.hero
    const router = useRouter()

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <div className={styles.ellipseFog}>
                        <Image src={EllipseFog} alt="Ellipse Fog" />
                    </div>

                    {/* Hero Section */}
                    <div className={styles.heroContainer}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>{heroContent.title}</h1>
                            <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>
                            <button className={styles.heroButton} onClick={() => router.push('/contact')} >{heroContent.button}</button>
                        </div>
                        <div className={styles.heroImage}>
                            <Image src={Hero} alt={heroContent.title} />
                        </div>
                    </div>
                </div>

                {/* Our Solution Section */}
                <OurSolution />

                {/* Why Choose Staco */}
                <div className={styles.whyChooseStaco}>
                    <div className={styles.whyChooseStacoContainer}>
                        <div className={styles.dotElements}>
                            <Image src={DotElements} alt="Dot Elements" />
                        </div>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.whyChooseStaco.title}</h1>
                            <p className={styles.description}>{homeContent.whyChooseStaco.description}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Why} alt={homeContent.whyChooseStaco.title} />
                        </div>
                    </div>
                    <div className={styles.whyChooseStacoCardsContainer}>
                        <div className={styles.whyChooseStacoCards}>
                            {homeContent.whyChooseStaco.cards.map((card) => (
                                <div className={styles.whyChooseStacoCard} key={card.id}>
                                    <div className={styles.whyChooseStacoCircle} />
                                    <h6 className={styles.whyChooseStacoTitle}>{card.name}</h6>
                                    <p className={styles.whyChooseStacoDescription}>{card.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.whyChooseStacoPara}>
                            <p className={styles.paragraph}>{homeContent.whyChooseStaco.paragraph}</p>
                        </div>
                    </div>
                </div>

                {/* Our Strategy Section */}
                <div className={styles.ourStrategy}>
                    <div className={styles.ourContainer}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.ourStrategy.title}</h1>
                            <p className={styles.description}>{homeContent.ourStrategy.description}</p>
                            <p className={styles.paragraph}>{homeContent.ourStrategy.paragraph}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Strategy} alt={homeContent.ourStrategy.title} />
                        </div>
                    </div>
                    <div className={styles.strategyCards}>
                        <div className={styles.strategyCard}>
                            <Image src={Type1} alt="Strategy Card 1" />
                            <div className={styles.strategyCardSpace} />
                        </div>
                        <div className={styles.strategyCard}>
                            <div className={styles.strategyCardSpace} />
                            <Image src={Type2} alt="Strategy Card 2" />
                        </div>
                        <div className={styles.strategyCard}>
                            <Image src={Type3} alt="Strategy Card 3" />
                            <div className={styles.strategyCardSpace} />
                        </div>
                    </div>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={styles.lead}>
                            <div className={`${styles.contentContainer} ${styles.leadContainer}`}>
                                <h1 className={styles.title}>{homeContent.leadGeneration.title}</h1>
                                <p className={styles.description}>{homeContent.leadGeneration.description}</p>
                                <p className={styles.paragraph}>{homeContent.leadGeneration.paragraph}</p>
                            </div>
                            <div className={styles.leadPoints}>
                                {homeContent.leadGeneration.cards.map((card) => (
                                    <div className={styles.leadPoint} key={card.id}>
                                        <input type="radio" className={styles.radioButton} checked />
                                        <div className={styles.leadPointContent}>
                                            <h6 className={styles.leadPointTitle}>{card.name}</h6>
                                            <p className={styles.leadPointDescription}>{card.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.image}>
                            <Image src={Lead} alt={homeContent.leadGeneration.title} />
                        </div>
                    </div>
                </div>

                {/* Client Results Section */}
                <div className={styles.clientResults}>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.clientResults.title}</h1>
                            <p className={styles.description}>{homeContent.clientResults.description}</p>
                            <p className={styles.paragraph}>{homeContent.clientResults.paragraph}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Client} alt={homeContent.clientResults.title} />
                        </div>
                    </div>
                    <div className={styles.clientResultsCards}>
                        {homeContent.clientResults.cards.map((card) => (
                            <div className={styles.clientResultsCard} key={card.id}>
                                <h1 className={styles.clientResultsNumber}>{card.id}</h1>
                                <h6 className={styles.clientResultsTitle}>{card.name}</h6>
                                <p className={styles.clientResultsDescription}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Customer Rating Section */}
                <div className={styles.customerRating}>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={`${styles.contentContainer} ${styles.ourCommunityContainer}`}>
                            <div className={styles.dotElementsOurCommunity}>
                                <Image src={DotElements} alt="Dot" />
                            </div>
                            <h1 className={styles.title}>{homeContent.ourCommunity.title}</h1>
                            <p className={`${styles.description} ${styles.ourCommunityParagraph}`}>{homeContent.ourCommunity.description}</p>
                            <p className={`${styles.paragraph} ${styles.ourCommunityParagraph}`}>{homeContent.ourCommunity.paragraph}</p>
                        </div>
                    </div>
                    <CustomerRatingCards />
                </div>

                {/* Data Insights Section */}
                <div className={styles.dataInsights}>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.dataInsights.title}</h1>
                            <p className={styles.description}>{homeContent.dataInsights.description}</p>
                            <p className={styles.paragraph}>{homeContent.dataInsights.paragraph}</p>
                        </div>
                        <div className={styles.dataInsightsCards}>
                            {homeContent.dataInsights.cards.map((card) => (
                                <div className={styles.dataInsightsCard} key={card.id}>
                                    <div className={styles.dataInsightsHeader}>
                                        <h6 className={styles.dataInsightsTitle}>{card.name}</h6>
                                        <Image src={card.icon} alt={card.name} />
                                    </div>
                                    <p className={styles.dataInsightsDescription}>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={styles.faq}>
                    <div className={styles.ourContainer}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.faq.title}</h1>
                            <p className={styles.description}>{homeContent.faq.description}</p>
                            <p className={styles.paragraph}>{homeContent.faq.paragraph}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Faq} alt={homeContent.faq.title} />
                        </div>
                    </div>
                    <FAQAccordion />
                </div>

                {/* Advantage Section*/}
                <div className={styles.advantage}>
                    <div className={`${styles.ourContainer} ${styles.leadGeneration}`}>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>{homeContent.advantage.title}</h1>
                            <p className={styles.description}>{homeContent.advantage.description}</p>
                            <p className={styles.paragraph}>{homeContent.advantage.paragraph}</p>
                        </div>
                        <div className={styles.image}>
                            <Image src={Advantage} alt={homeContent.advantage.title} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;
