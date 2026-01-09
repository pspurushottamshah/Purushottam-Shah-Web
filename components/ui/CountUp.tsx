'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    separator?: string;
}

export default function CountUp({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    separator = ','
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTime: number | null = null;
                    const startValue = 0;

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        // Easing function for smooth animation
                        const easeOutQuad = (t: number) => t * (2 - t);
                        const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue);

                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 } // Reduced threshold to ensure it triggers
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };

    return (
        <span ref={countRef} className="tabular-nums">
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}
