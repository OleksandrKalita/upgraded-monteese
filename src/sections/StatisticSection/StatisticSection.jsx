"use client";

import styles from "./statistic.module.scss";

import { delay, motion, useInView } from "framer-motion";
import Image from "next/image";

import avatarIcon1 from "../../../public/images/icons/avatar-1_icon.svg";
import avatarIcon2 from "../../../public/images/icons/avatar-2_icon.svg";
import avatarIcon3 from "../../../public/images/icons/avatar-3_icon.svg";
import avatarIcon4 from "../../../public/images/icons/avatar-4_icon.svg";
import bgImage from "../../../public/images/backgrounds/statistic_bg.jpg";
import questionMarkIcon from "../../../public/images/icons/question_mark_icon.svg";


import StatisticBox from "@/components/StatisticBox/StatisticBox";
import ContactButton from "@/components/ContactButton/ContactButton";
import { useRef } from "react";

export default function StatisticSection() {
    const textRef = useRef(null);
    const isTextInView = useInView(textRef, {amount: 0.5, once: true});
    
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, {amount: 0.5, once: true});

    const conactButtonRef = useRef(null);
    const isContactButtonInView = useInView(conactButtonRef, {amount: 0.5, once: true});

    const imageHeadlineRef = useRef(null);
    const isImageHedlineInView = useInView(imageHeadlineRef, {amount: 1, once: true});

    const textAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.7,
            y: "10px",
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: "0px",
            transition: {duration: 0.8}
        }
    }
    const imageAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.8}
        }
    }
    const contactButtonAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            x: "-200px"
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: "0px",
            transition: {duration: 0.5, delay: 0.8}
        }
    }
    const imageHeadlineAnimation = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.2, delay: 0.1}
        }
    }
    const notBoxAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
            x: "100px",
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: "0px",
            transition: {duration: 0.8, delay: 0.8}
        }
    }
    const questionMarkAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6, delay: 0.8}
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.text_block}>
                    <div className={styles.text_block__content}>
                        <motion.div
                            ref={textRef}
                            className={styles.text}
                            initial="hidden"
                            animate={isTextInView ? "visible" : "hidden"}
                            variants={textAnimation}>
                            At Golden Gate Properties, we offer more than just real estate services; we provide an unparalleled experience tailored to meet your needs and exceed your expectations.
                            </motion.div>
                        <div className={styles.team_banner}>
                            <ul className={styles.banner__list}>
                                <li className={`${styles.list_item} ${styles.avatar_1}`}>
                                    <Image alt="" src={avatarIcon1} className={styles.avatar_icon}/>
                                </li>
                                <li className={`${styles.list_item} ${styles.avatar_2}`}>
                                    <Image alt="" src={avatarIcon2} className={styles.avatar_icon}/>
                                </li>
                                <li className={`${styles.list_item} ${styles.avatar_3}`}>
                                    <Image alt="" src={avatarIcon3} className={styles.avatar_icon}/>
                                </li>
                                <li className={`${styles.list_item} ${styles.avatar_4}`}>
                                    <Image alt="" src={avatarIcon4} className={styles.avatar_icon}/>
                                </li>
                            </ul>
                            <div className={styles.banner__headline}>Meet Our<br/>Professional Team</div>
                        </div>
                    </div>
                </div>
                <div className={styles.statistic_block}>
                    <StatisticBox/>
                </div>
                <div className={styles.image_block}>
                    <motion.div 
                        ref={imageRef}
                        className={styles.image_block__container}
                        initial="hidden"
                        animate={isImageInView ? "visible" : "hidden"}
                        variants={imageAnimation}>    
                        <Image alt="" src={bgImage} className={styles.bg_image}/>
                        <motion.div 
                            ref={conactButtonRef}
                            className={styles.contact_button_block}
                            initial="hidden"
                            animate={isContactButtonInView? "visible" : "hidden"}
                            variants={contactButtonAnimation}>
                            <ContactButton theme={"light"}/>
                        </motion.div>
                        <motion.div 
                            ref={imageHeadlineRef}
                            className={styles.image_headline}
                            initial="hidden"
                            animate={isImageHedlineInView ? "visible" : "hidden"}
                            variants={imageHeadlineAnimation}>Building Your Dreams</motion.div>
                        <div className={styles.offer_block}>
                            <motion.div 
                            ref={imageRef}
                                className={styles.help_button}
                                initial="hidden"
                                animate={isImageInView ? "visible" : "hidden"}
                                variants={questionMarkAnimation}>
                                <Image alt src={questionMarkIcon} className={styles.help_icon}/>
                            </motion.div>
                            <motion.div 
                                ref={imageRef}
                                className={styles.notification_box}
                                initial="hidden"
                                animate={isImageInView ? "visible" : "hidden"}
                                variants={notBoxAnimation}>
                                <div className={styles.avatar_box}>
                                    <Image alt="" src={avatarIcon1} className={styles.avatar_icon}/>
                                    <div className={styles.avatar_marker}></div>
                                </div>
                                <div className={styles.box__content}>
                                    <div className={styles.box__title}>Special Offer</div>
                                    <div className={styles.box_text}>Get The Consultation With Our Expert</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}