import Image from "next/image";
import styles from "./button.module.css";
import { motion, useInView } from "framer-motion";

import downloadIcon from "../../../public/images/icons/download-icon.svg";
import { useRef, useState } from "react";

export default function DownloadButton() {
    const [isHovered, setIsHovered] = useState(false);

    const bgAnimation = {
        hovered: {
            borderRadius: "0%",
            scale: 5,
        },
    }
    return (
        <div
            className={styles.button}>
            <motion.div 
                className={styles.button_block} 
                animate={isHovered ? "hovered" : ""} 
                variants={bgAnimation}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    {/* circle */}
            </motion.div>
            <Image 
                alt=""
                className={styles.download_icon} 
                src={downloadIcon} 
                width={20} 
                height={20} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}/>
            <div className={styles.text_block}>
                <div className={styles.text}>catalog</div>
                <div className={styles.text}>download</div>
            </div>
        </div>
    );
}