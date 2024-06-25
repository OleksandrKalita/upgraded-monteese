"use client";

import { useEffect, useRef, useState } from "react";

export default function ValueAnimation({symbol, startValue = 0, endValue = 100, duration = 1000}) {
    const [currentValue, setCurrentValue] = useState(startValue);

    const valueRef = useRef(null);

    useEffect(() => {
        const valueObserver = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                console.log(entry.target);
                animation();

                valueObserver.unobserve(entry.target);
                // valueObserver.disconnect();
            }
        },
        {
            rootMargin: "50px",
            // threshold: 0.3,
        });

        if (valueRef.current) {
            valueObserver.observe(valueRef.current);
        }

    },[valueRef])
    
    const animation = () => {
        let currentDuration = duration;

        const interval = setInterval(() => {
            setCurrentValue((prevValue) => {
                if (prevValue < endValue) {
                    return prevValue + 1;
                } else {
                    return prevValue;
                }
            })
        }, currentDuration)

        return () => clearInterval(interval);
    }

    return (
        <div ref={valueRef}>
            {currentValue + symbol}
        </div>
    ); 
}