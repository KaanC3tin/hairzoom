'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !imageContainerRef.current) return;

        gsap.fromTo(
            imageContainerRef.current,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            id='about'
            ref={sectionRef}
            className="relative text-white min-h-screen overflow-hidden flex flex-col md:flex-row bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800"
        >
            {/* Sol yarı: Hakkımızda metni */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-black bg-opacity-40 backdrop-blur-md">
                <h2 className="text-4xl font-bold mb-6 border-b-4 border-amber-400 inline-block pb-2">
                    Hakkımızda
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                    2017 yılında kurulan <strong>Hairzoom</strong>, sektöründe uzman kadrosuyla hem kadınlara hem de erkeklere yönelik kapsamlı kuaförlük hizmetleri sunmaktadır.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Müşteri memnuniyetini ve kaliteli hizmeti her zaman ön planda tutan Hairzoom, trendleri yakından takip ederek modern ve klasik saç kesimleri, renklendirme, bakım ve stil danışmanlığı gibi pek çok alanda profesyonel çözümler sağlar.
                </p>
                <p className="text-lg leading-relaxed">
                    Konforlu ortamı ve hijyen standAboutlarıyla Hairzoom, sizi kendinizi özel hissedeceğiniz bir deneyime davet ediyor.
                </p>
            </div>

            {/* Sağ yarı: işletme fotoğrafı */}
            <div
                ref={imageContainerRef}
                className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden border-l-4 border-amber-400 shadow-2xl"
                style={{ transformOrigin: 'center center' }}
            >
                <Image
                    src="/images/hairzoom.jpeg"
                    alt="Hairzoom Kuaför"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </section>
    );
};

export default About;
