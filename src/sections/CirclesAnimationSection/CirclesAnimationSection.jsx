"use client";

import { useEffect, useRef } from "react";
import styles from "./circle.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CirclesAnimationSection() {
    const ref1 = useRef(null);
    const circleRef1 = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref1.current,
                    start: "top top",
                    end: `bottom top`,
                    // end: `top+=100% top`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    markers: true,
                }
            })

            tl.to(circleRef1.current, {x: "120px", y: "-10px", opacity: 1}, 0)
                .to(circleRef3.current, {x: "-120px", y: "-10px", opacity: 1}, 0)
                .to(circleRef2.current, {y: "-90px", opacity: 1}, 0)
            
            tl.to(circleRef1.current, {x: "120px", y: "-10px"}, ">")
                .to(circleRef2.current, {y: "10px"}, ">")
            // tl.to(circleRef1.current, {x: "120px", y: "-10px"}, ">")
            //     .to(circleRef3.current, {x: "-120px", y: "-10px"}, ">")
            //     .to(circleRef2.current, {y: "10px"}, ">")

            
        }, ref1)

        return () => ctx.revert();
    }, [])

    return (
        <div className={styles.main} ref={ref1}>
            <div className={styles.main__container}>
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
            </div>
        </div>
    );
}