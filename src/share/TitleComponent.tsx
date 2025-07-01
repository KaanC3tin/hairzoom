'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TitleComponentProps {
    children: React.ReactNode;
}

const TitleComponent = ({ children }: TitleComponentProps) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            containerRef.current,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="inset-0 z-20 flex items-center justify-center py-16 sm:px-10 md:px-12 lg:px-32 px-6"
        >
            <div className="relative text-center">
                {/* Arka yazı (arka plan efekt) */}
                <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black text-white/10 select-none tracking-[0.25em]">
                    {children}
                </h1>

                {/* Önde görünen yazı */}
                <h1 className="absolute inset-0 flex items-center justify-center text-[clamp(1.75rem,6vw,4rem)] font-bold text-white tracking-wide">
                    {children}
                </h1>

                {/* Alt Çizgi */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full blur-[1px]" />
            </div>
        </div>
    );
};

export default TitleComponent;
