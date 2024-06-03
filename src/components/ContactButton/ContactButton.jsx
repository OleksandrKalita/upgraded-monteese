"use client";

import Image from "next/image";
import styles from "./button.module.css";
import { motion } from "framer-motion"; 

import phoneIcon from "../../../public/images/icons/phone-icon.svg";
import { useState } from "react";

export default function ContactButton() {
    const [isHovered, setHovered] = useState(false);

    const buttonAnimation = {
        hovered: {
            width: "calc(100% - 4px)",
            height: "41px",
            paddingTop: "10px",
            top: "2px",
            left: "2px",
            transition: {delay: 0.1, duration: 0.3}
        }
    }
    return (
        <motion.div className={styles.contact_button}>
                <motion.div 
                    className={styles.internal_button}
                    animate={isHovered ? "hovered" : ""}
                    variants={buttonAnimation}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <Image alt="" src={phoneIcon}/>
                </motion.div> 
            <div className={styles.button_text}>Contact Us Now</div>
        </motion.div>
    );
}