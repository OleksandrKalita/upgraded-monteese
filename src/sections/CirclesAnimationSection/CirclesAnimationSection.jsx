"use client";

import { useEffect, useRef } from "react";
import styles from "./circle.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CirclesAnimationSection() {
    const circlesBoxRef = useRef(null);
    const circleRef1 = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: circlesBoxRef.current,
                    start: "top top",
                    // end: `top+=100% top`,
                    pin: true,
                    pinSpacing: true,
                    scrub: true,
                    markers: false,
                }
            })

            tl.to(circleRef1.current, {x: "50px", y: "-40px"})
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className={styles.main}>
            <div ref={circlesBoxRef} className={styles.main__container}>
                <h1 className={styles.headline}>Path to Smart Ownership</h1>
                <div className={styles.circle_container}>
                    <div ref={circleRef1} className={`${styles.circle} ${styles.circle_1}`}>
                        <div className={styles.circle__text}>10% Initial Payment</div>
                    </div>
                    <div ref={circleRef2} className={`${styles.circle} ${styles.circle_2}`}>
                        <div className={styles.circle__text}>5 years installment, 0% overpayment</div>
                    </div>
                    <div ref={circleRef3} className={`${styles.circle} ${styles.circle_3}`}>
                        <div className={styles.circle__text}>Rental income ~ 15%</div>
                    </div>
                </div>
            <div className={styles.download_button}></div>
        </div>
        </div>
    );
}