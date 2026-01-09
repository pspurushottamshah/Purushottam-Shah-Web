'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    separator?: string;
    decimals?: number;
}

export default function CountUp({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    separator = ',',
    decimals = 0
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
                        const currentCount = easeOutQuad(progress) * (end - startValue) + startValue;

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
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const formatNumber = (num: number) => {
        // Handle decimals
        const fixed = num.toFixed(decimals);
        const [integerPart, decimalPart] = fixed.split('.');

        // Add separator to integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

        return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    };

    return (
        <span ref={countRef} className="tabular-nums">
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}
