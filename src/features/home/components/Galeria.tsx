'use client';
import React, { useRef } from 'react';
import { GaleriaItem } from '../../../../contans';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleComponent from '@/share/TitleComponent';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface GaleriaProps {
    images: GaleriaItem[];
}

const Galeria = ({ images }: GaleriaProps) => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const anims = useRef<gsap.core.Tween[]>([]);

    useGSAP(() => {
        const elements = gsap.utils.toArray('.gallery-item') as HTMLElement[];

        anims.current = elements.map((el, index) =>
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.8, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    },
                    delay: index * 0.1,
                }
            )
        );

        return () => {
            anims.current.forEach((anim) => anim.kill());
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="sm:h-[150vh]  bg-black text-white">
            <TitleComponent>Galeri</TitleComponent>
            <div className="px-6 md:px-12 lg:px-32">
                <div
                    ref={galleryRef}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="gallery-item relative w-full h-60 rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={img.href}
                                alt={`galeria-${idx}`}
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat bg-opacity-80 mix-blend-overlay pointer-events-none z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Galeria;
