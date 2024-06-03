"use client";

import Image from "next/image";
import styles from "./video.module.scss";

import houseIcon from "../../../public/images/icons/house-light-icon.svg";
import keyIcon from "../../../public/images/icons/key-icon.svg";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function VideoSection() {
    const ref = useRef(null);
    const videoRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        //     const tl = gsap.timeline();
        // tl.from(ref.current, {
        //     scrollTrigger: {
        //         trigger: ref.current,
        //         start: "0 0",
        //         scrub: true,
        //         markers: true,
        //         // pin: true,
        //         // pinSpacing: false,
        //     }
        // })
        // .from(videoRef.current, {
        //     scrollTrigger: {
        //         trigger: ref.current,
        //         start: "0 0",
        //         scrub: true,
        //     },
        //     width: "791px",
        //     height: "506px",
        //     borderRadius: "30px",
        //     left: "calc((100% - 791px) / 2)",
        //     top: "calc((100% - 506px) / 2)",
        // })
        // })
        // let ctx = gsap.context(() => {
        //     // const tl = gsap.timeline({defaults: {
        //     //     // ease: "power2.inOut"
        //     // }}).to(videoRef.current, {
        //     //     // width: "100%",
        //     //     // height: "100%",
        //     //     // transform: "translate(calc(-(100% - 719px) / 2), calc(-(100% - 504px) / 2))",
        //     //     scale: 2,
        //     //     borderRadius: 0,
        //     // })

        //     const animation = gsap.to(videoRef.current, {
        //         scale: 2, borderRadius: 0,
        //     })
    
        //     ScrollTrigger.create({
        //         trigger: ref.current,
        //         start: "top top",
        //         end: `top+=100% top`,
        //         pin: true,
        //         pinSpacing: true,
        //         scrub: true,
        //         markers: true,
        //         animation: animation,
        //     })
        // })

        // return () => ctx.revert();

        const ctx = gsap.context(() => {
            const animation = gsap.to(videoRef.current, {
                scale: 2, borderRadius: 0,
            })
    
            ScrollTrigger.create({
                trigger: ref.current,
                start: "top top",
                // end: `top+=100% top`,
                pin: true,
                // pinSpacing: true,
                scrub: true,
                markers: true,
                animation: animation,
            })
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className={styles.main} ref={ref}>
            <div className={styles.button_block}>
                <div className={styles.button} style={{paddingTop: "11px"}}>
                    <Image alt="" src={houseIcon}/>
                </div>
                <div className={styles.button} style={{paddingTop: "13px"}}>
                    <Image alt="" src={keyIcon}/>
                </div>
            </div>
            <div className={styles.video_block} ref={videoRef}>
                <video
                        id="video"
                        className={styles.video}
                        loop
                        muted
                        autoPlay
                    >
                        <source src="/video/main-viedo.mp4" />
                </video>
            </div>
        </div>
    );
}