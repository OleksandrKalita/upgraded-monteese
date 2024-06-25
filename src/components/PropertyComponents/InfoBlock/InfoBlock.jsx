"use client";

import { useRef, useState } from "react";
import styles from "./info.module.scss";
import { delay, motion, useInView } from "framer-motion";
import Image from "next/image";

import sofaIcon from "../../../../public/images/icons/sofa_icon.svg";
import valIcon from "../../../../public/images/icons/val_icon.svg";
import mapPointerIcon from "../../../../public/images/icons/map-pointer_icon.svg";

export default function InfoBlock({bgImage, mapIncluded}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once: true})
    const [isHovered, setHover] = useState(false);
    
    const blockAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.5}
        }
    }
    const tagsAnimation = {
        def: {
            opacity: 0,
        },
        hovered: {
            opacity: 1,
            transition: {duration: 0.5}
        }
    }
    return (
        <motion.div 
            ref={ref} 
            className={styles.block}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            variants={blockAnimation}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}>
            <Image src={bgImage} alt="" className={styles.bg_image}/>
            {!mapIncluded && <motion.div 
                className={styles.headline}
                >Azure Heights Luxury Residences
            </motion.div>}
            <div className={styles.arrow_button}>
                <div className={styles.arrow}></div>
            </div>
            {!mapIncluded && <motion.div className={styles.tags_block} 
                initial="def"
                animate={isHovered ? "hovered" : ""}
                variants={tagsAnimation} >
                <div className={styles.top_block}>
                    <div className={styles.top__tag}>
                        <Image src={mapPointerIcon} alt=""/>
                        <div className="content_text">Dubai Marina</div>
                    </div>
                </div>
                <div className={styles.bottom_block}>
                    <div className={styles.tag_list}>
                        <div className={styles.tag}>
                            <div className={styles.tag__title}>Price</div>
                            <div className={styles.tag__content}>
                                <div className={styles.content__text}>from $290k</div>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.tag__title}>Installment Plan</div>
                            <div className={styles.tag__content}>
                                <div className={styles.content__text}>for 10 years</div>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.tag__title}>Initial Payment</div>
                            <div className={styles.tag__content}>
                                <div className={styles.content__text}>$30,000</div>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.tag__title}>Upgraded Features</div>
                            <div className={styles.tag__content}>
                                <Image src={sofaIcon} alt=""/>
                                <Image src={valIcon} alt=""/>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.tag__title}>Completion Date</div>
                            <div className={styles.tag__content}>
                                <div className={styles.content__text}>09/2025</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>}
            {mapIncluded && <div className={styles.find_button}>Find On The Map</div>}
        </motion.div>
    );
}