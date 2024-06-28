"use client";

import { useEffect, useRef } from "react";
import styles from "./circle.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CirclesAnimationSection() {
    const ref = useRef(null);
    const circleRef1 = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);

    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);

    const circlesTitleRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top",
                    // end: `bottom top`,
                    // end: `top+=100px top`,
                    pin: true,
                    pinSpacing: true,
                    scrub: false,
                    markers: true,
                }
            })

            const start = () => {
                const tLine = gsap.timeline();
                tLine.to(circleRef1.current, { opacity: 1, x: "+=110px", y: "-100px", ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef3.current, { opacity: 1, x: "-=110px", y: "-100px", ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef2.current, { opacity: 1, x: "+=500px", y: "-=110px", ease: "power2.out", duration: 2 }, 0)

                return tLine;
            }
            const textShow = () => {
                const tLine = gsap.timeline();
                tLine.to(text1.current, {opacity: 1}, 0)
                    .to(text2.current, {opacity: 1}, 0)
                    .to(text3.current, {opacity: 1}, 0)
                

                return tLine;
            }
            const middle = () => {
                const tLine = gsap.timeline();
                tLine.to(circleRef1.current, { x: "+=210px", y: "+=70px", ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef3.current, { x: "-=210px", y: "+=70px", ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef2.current, { y: "-=50px", ease: "power2.out", duration: 2 }, 0)
            
                return tLine;
            }
            const textHidden = () => {
                const tLine = gsap.timeline();
                tLine.to(text1.current, {opacity: 0}, 0)
                    .to(text2.current, {opacity: 0}, 0)
                    .to(text3.current, {opacity: 0}, 0)
                

                return tLine;
            }
            const showTitle = () => {
                const tLine = gsap.timeline();

                tLine.to(circlesTitleRef.current, {opacity: 0.7, scale: 0.7})

                return tLine
            }
            const lastMoves = () => {
                const tLine = gsap.timeline();

                tLine.to(circlesTitleRef.current, {opacity: 1, scale: 1}, 0)
                    .to(circleRef1.current, { x: "+=100px", y: "-=80px",  ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef3.current, { x: "-=100px", y: "-=80px",  ease: "power2.out", duration: 2 }, 0)
                    .to(circleRef2.current, { y: "+=80px",  ease: "power2.out", duration: 2 }, 0)

                return tLine;
            }
            tl.add(start(), "+=1")
                .add(textShow())
                .add(textHidden(), "+=2")
                .add(middle(), "+=2")
                .add(showTitle(), "+=0.5")
                .add(lastMoves(), "+=1")
            
        }, ref)

        const handleResize = () => {
            ScrollTrigger.refresh();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ctx.revert();
        }
    }, [])

    return (
        <div className={styles.main} ref={ref}>
            <div className={styles.main__container}>
                <h1 className={styles.headline}>Path to Smart Ownership</h1>
                <div className={styles.circles__container}>
                    <div ref={circleRef1} className={`${styles.circle} ${styles.circle_1}`}>
                        <span ref={text1} className={styles.circle_text}>10% Initial Payment</span>
                    </div>
                    <div ref={circleRef2} className={`${styles.circle} ${styles.circle_2}`}>
                        <span ref={text2} className={styles.circle_text}>5 years installment,<br/>0% overpayment</span>
                    </div>
                    <div ref={circleRef3} className={`${styles.circle} ${styles.circle_3}`}>
                        <span ref={text3} className={styles.circle_text}>Rental income ~ 15%</span>
                    </div>
                    <div className={styles.circles_title_box}>
                        <span ref={circlesTitleRef} className={styles.circles_title}>Studio d</span>
                    </div>
                </div>
            </div>
        </div>
    );
}