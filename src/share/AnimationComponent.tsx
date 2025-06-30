'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimationComponentProps {
    children: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

const AnimationComponent = ({ children }: AnimationComponentProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Yöntem 1: transform: translateY kullanarak - EN İYİ ÇÖZÜM
        gsap.fromTo(
            containerRef.current,
            {
                transform: 'translateY(80px)', // y: 80 yerine transform kullan
                opacity: 0,
                filter: 'blur(2px)',
                scale: 0.95,
            },
            {
                transform: 'translateY(0px)', // Normal pozisyona getir
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.6,
                delay: 0,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Yöntem 2: Alternatif - scale ve opacity kombinasyonu
        /*
        gsap.fromTo(
            containerRef.current,
            {
                scale: 0.9,
                opacity: 0,
                filter: 'blur(3px)',
            },
            {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 2,
                delay: 0.2,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            }
        );
        */

        // Yöntem 3: Clip-path ile giriş efekti
        /*
        gsap.fromTo(
            containerRef.current,
            {
                clipPath: 'inset(100% 0 0 0)',
                opacity: 0,
                filter: 'blur(3px)',
            },
            {
                clipPath: 'inset(0% 0 0 0)',
                opacity: 1,
                filter: 'blur(0px)',
                duration: 2,
                delay: 0.2,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            }
        );
        */
    });

    return (
        <div
            className='transition-all ease-in-out will-change-transform !overflow-x-hidden max-w-full'
            ref={containerRef}>
            {children}
        </div>
    );
};

export default AnimationComponent;