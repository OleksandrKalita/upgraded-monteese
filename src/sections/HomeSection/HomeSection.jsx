"use client";

import styles from "./section.module.scss";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";

import image1 from "../../../public/images/backgrounds/switched-image-1.png";
import image2 from "../../../public/images/backgrounds/switched-image-2.png";
import image3 from "../../../public/images/backgrounds/switched-image-3.png";

import heartIcon from "../../../public/images/icons/heart-icon.svg";
import houseIcon from "../../../public/images/icons/house-dark-icon.svg";
import logoIcon from "../../../public/images/logos/private/full-small-logo.svg";
import mapIcon from "../../../public/images/icons/map-icon.svg";
import menuIcon from "../../../public/images/icons/menu-icon.svg";

import { useEffect, useRef, useState } from "react";
import DownloadButton from "@/components/DownloadButton/DownloadButton";
import ContactButton from "@/components/ContactButton/ContactButton";

export default function HomeSection() {
    const imageRef = useRef(null);
    const imageInView = useInView(imageRef, {amount: 0.5, once: true})

    const downloadRef = useRef(null);
    const isInView = useInView(downloadRef, {amount: 0.5, once: true});

    let currentImageNumber = 1;
    const [currentImage, setCurrentImage] = useState(image1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentImageNumber == 1) {
                setCurrentImage(image2);
                currentImageNumber = 2;
            } else if (currentImageNumber == 2) {
                setCurrentImage(image3);
                currentImageNumber = 3;
            } else if (currentImageNumber == 3) {
                setCurrentImage(image1);
                currentImageNumber = 1;
            } else {
                setCurrentImage(image1);
                currentImageNumber = 1;
            }
        }, 5000)

        return () => clearInterval(intervalId);
    }, [currentImageNumber])

    const imageAnimation = {
        hidden: {
            opacity: 0.1,
            scale: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {duration: 0.9}
        }
    }
    const buttonAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.3,
        }, 
        visible: {
            opacity: 1,
            scale: 1,
            transition: {delay: 1, duration: 0.8},
        }
    }
    const textAnimation = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {delay: 1.8, duration: 0.5},
        }
    }
    const contactButtonAnimation = {
        hidden: {
            opacity: 0,
            x: 150,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 2.3, duration: 0.5},
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left_box}>
                    <div className={styles.left_box__container}>
                        <div className={styles.box__internal_container}>
                            <motion.div 
                                className={styles.logo_block}
                                initial="hidden"
                                animate={"visible"}
                                variants={contactButtonAnimation}>
                                <Image alt="" src={logoIcon}/>
                            </motion.div>
                            <div className={styles.button_block}>
                                <motion.div 
                                    className={styles.button} 
                                    style={{backgroundColor: "#F6F6F6"}}
                                    initial="hidden"
                                    animate="visible"
                                    variants={buttonAnimation}>
                                    <Image alt="" src={mapIcon}/>
                                </motion.div>
                                <motion.div 
                                    className={styles.button} 
                                    style={{backgroundColor: "#F6F6F6", paddingTop: "15px"}}
                                    initial="hidden"
                                    animate="visible"
                                    variants={buttonAnimation}>
                                    <Image alt="" src={menuIcon}/>
                                </motion.div>
                            </div>
                            <motion.div 
                                className={styles.contact_button_block}
                                initial="hidden"
                                animate={"visible"}
                                variants={contactButtonAnimation}>
                                <ContactButton/>
                            </motion.div>
                            <div className={styles.headline_block}>
                                <div className={styles.headline}>
                                    {["Real Estate in Dubai:", "Ideal for Living and", "Investing"].map((line, key) => (
                                        <motion.div 
                                            key={key} 
                                            className={styles.line}
                                            initial="hidden" 
                                            animate="visible" 
                                            variants={textAnimation} >
                                            {line}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right_box}>
                    <motion.div ref={imageRef} initial="hidden" animate={imageInView ? "visible" : "hidden"} variants={imageAnimation}>
                        <Image className={styles.image} alt="" src={currentImage} sizes="100wv"/>
                    </motion.div>
                    <div className={styles.box__container}>
                        <div className={styles.box__internal_container}>
                            <div className={styles.text_block}>
                                <div className="">
                                    {["More than 1500 real", "estate properties"].map((line, key) => (
                                        <motion.div 
                                            key={key} 
                                            initial="hidden" 
                                            animate="visible" 
                                            variants={textAnimation} 
                                            className={styles.text}>
                                            {line}
                                        </motion.div>
                                    ))}
                                </div>
                                <div className={styles.text_2}>
                                    {["From $145,000 with a", "yield of 10% per annum"].map((line, key) => (
                                        <motion.div 
                                            key={key} 
                                            initial="hidden" 
                                            animate="visible" 
                                            variants={textAnimation} 
                                            className={styles.text}>
                                            {line}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.button_block}>
                                <motion.div 
                                    className={styles.button} 
                                    style={{border: "1px solid #fff"}}
                                    initial="hidden"
                                    animate="visible"
                                    variants={buttonAnimation}>
                                    <Image alt="" src={heartIcon}/>
                                </motion.div>
                                <motion.div 
                                    className={styles.button} 
                                    style={{backgroundColor: "#fff"}}
                                    initial="hidden"
                                    animate="visible"
                                    variants={buttonAnimation}>
                                    <Image alt="" src={houseIcon}/>
                                </motion.div>
                            </div>
                            <motion.div
                                ref={downloadRef}
                                className={styles.special_button_block}
                                initial="hidden" 
                                animate={isInView ? "visible" : "hidden"} 
                                variants={buttonAnimation}>
                                <DownloadButton/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}