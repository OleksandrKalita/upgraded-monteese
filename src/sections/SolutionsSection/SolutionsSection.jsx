"use client";

import Image from "next/image";
import styles from "./solutions.module.scss";

import prevIcon1 from "../../../public/images/icons/solution_preview-1.svg"; 
import prevIcon2 from "../../../public/images/icons/solution_preview-2.svg"; 
import prevIcon3 from "../../../public/images/icons/solution_preview-3.svg"; 
import prevIcon4 from "../../../public/images/icons/solution_preview-4.svg"; 

import arrowIcon from "../../../public/images/arrow.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function SolutionsSection() {
    const ref = useRef(null);
    const bannerRef1 = useRef(null);
    const bannerRef2 = useRef(null);
    const bannerRef3 = useRef(null);
    const bannerRef4 = useRef(null);

    const isInView = useInView(bannerRef1, {once: true, amount: 1});

    // const [isVisible, setIsVisible] = useState(false);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const ctx = gsap.context(() => {
            // const animation = gsap.to(bannerRef2.current, {
            //     opacity: 1, scale: 1,
            // })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top",
                    end: `top+=100% top`,
                    // end: "bottom bottom",
                    pin: true,
                    pinSpacing: true,
                    scrub: true,
                    markers: false,
                }
            })

            tl.to(bannerRef2.current, {transform: "translate(0px, 0px)", opacity: 1, scale: 1}, "+=0.5").to(bannerRef3.current, {transform: "translate(0px, 0px)", opacity: 1, scale: 1}, "+=0.5").to(bannerRef4.current, {transform: "translate(0px, 0px)", opacity: 1, scale: 1}, "+=0.5")
        })
        
        return () => ctx.revert();
    })

    const bannerAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
            transform: "translate(0px, 40px)"
        },
        visible: {
            opacity: 1,
            scale: 1,
            transform: "translate(0px, 0px)",
            transition: {duration: 0.8}
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.main__container} ref={ref}>
                <div className={styles.headline_block}>
                    <div className={styles.headline}>Tailored Solutions for Your Real Estate Needs</div>
                    <div className={styles.explore_link}>
                        <div className={styles.link__point}></div>
                        <div className={styles.link_text}>
                            <span>Expore More</span>
                        <div className={styles.link_arrow}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.menu_block}>
                    <motion.div 
                        ref={bannerRef1} 
                        className={`${styles.menu__item} ${styles.item_1}`}
                        initial="hidden"
                        animate={isInView ? "visible" : ""}
                        variants={bannerAnimation}>
                        <div className={styles.image_box}>
                            <Image alt="" src={prevIcon1}/>
                        </div>
                        <div className={styles.text_box}>
                            <div className={styles.text}>Property Sales</div>
                            <div className={styles.number_tag}>01</div>
                        </div>
                        <div className={styles.arrow_box}>
                            <Image alt="" src={arrowIcon}/>
                        </div>
                    </motion.div>

                    <div className={`${styles.menu__item} ${styles.item_2}`} ref={bannerRef2}>
                        <div className={styles.image_box}>
                            <Image alt="" src={prevIcon2}/>
                        </div>
                        <div className={styles.text_box}>
                            <div className={styles.text}>Property Management</div>
                            <div className={styles.number_tag}>02</div>
                        </div>
                        <div className={styles.arrow_box}>
                            <Image alt="" src={arrowIcon}/>
                        </div>
                    </div>

                    <div className={`${styles.menu__item} ${styles.item_3}`} ref={bannerRef3}>
                        <div className={styles.image_box}>
                            <Image alt="" src={prevIcon3}/>
                        </div>
                        <div className={styles.text_box}>
                            <div className={styles.text}>Investment Consultation</div>
                            <div className={styles.number_tag}>03</div>
                        </div>
                        <div className={styles.arrow_box}>
                            <Image alt="" src={arrowIcon}/>
                        </div>
                    </div>

                    <div className={`${styles.menu__item} ${styles.item_4}`} ref={bannerRef4}>
                        <div className={styles.image_box}>
                            <Image alt="" src={prevIcon4}/>
                        </div>
                        <div className={styles.text_box}>
                            <div className={styles.text}>Market Analysis</div>
                            <div className={styles.number_tag}>04</div>
                        </div>
                        <div className={styles.arrow_box}>
                            <Image alt="" src={arrowIcon}/>
                        </div>
                    </div>
                </div>
            </div>
           <Marquee speed={170}>
                <div className={styles.marquee_item}>Payment from Almaty</div>
                <div className={styles.marquee_item}>0% Commission</div>
                <div className={styles.marquee_item}>Remote Purchase</div>
           </Marquee>
        </div>
    );
}