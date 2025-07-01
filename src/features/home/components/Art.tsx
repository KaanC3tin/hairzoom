'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import TitleComponent from '@/share/TitleComponent';

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const sectionRef = useRef(null);

    useGSAP(() => {
        // Başlangıçta resmi tamamen gizle - asansör efekti için hazır konumda
        gsap.set('.image-container', {
            width: 300,
            height: 300,
            borderRadius: '50%',
            clipPath: 'circle(150px at center)',
            opacity: 0  // Tamamen gizli başlasın
        });

        gsap.set('.main-image', {
            scale: 1,
            borderRadius: '50%',
            opacity: 0  // Resim de gizli başlasın
        });

        gsap.set('.left-balloon', {
            y: 200,
            opacity: 0,
            scale: 0.8
        });

        gsap.set('.right-balloon', {
            y: 200,
            opacity: 0,
            scale: 0.8
        });

        gsap.set('.color-layer-left', {
            height: '0%',
            opacity: 0
        });

        gsap.set('.color-layer-right', {
            height: '0%',
            opacity: 0
        });

        gsap.set('.left-image', {
            height: '0%',
            opacity: 0
        });

        gsap.set('.right-image', {
            height: '0%',
            opacity: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 1.2,
                pin: true,
            }
        });

        // 1. Asansör açılma efekti - resim görünmeye başlar ve yuvarlaktan dikdörtgene dönüşür
        tl.to('.image-container', {
            opacity: 1,  // Görünür yap
            width: '100vw',
            height: '100vh',
            borderRadius: '0%',
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 2,
            ease: 'power2.inOut'
        })
            .to('.main-image', {
                opacity: 1,  // Resmi görünür yap
                scale: 2.5,
                borderRadius: '0%',
                duration: 2,
                ease: 'power2.inOut'
            }, '<')

            // 2. Renk katmanları yükselme efekti
            .to('.color-layer-left', {
                height: '100%',
                opacity: 0.8,
                duration: 1.5,
                ease: 'power2.out'
            }, '-=0.5')
            .to('.color-layer-right', {
                height: '100%',
                opacity: 0.8,
                duration: 1.5,
                ease: 'power2.out'
            }, '-=1.2')

            // 3. Sol ve sağ resimler yukarı çıkma efekti
            .to('.left-image', {
                height: '100%',
                opacity: 0.9,
                duration: 1.5,
                ease: 'power2.out'
            }, '-=1.3')
            .to('.right-image', {
                height: '100%',
                opacity: 0.9,
                duration: 1.5,
                ease: 'power2.out'
            }, '-=1.4')

            // 4. Balonlar yükselme efekti
            .to('.left-balloon', {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.8,
                ease: 'back.out(1.7)'
            }, '-=1')
            .to('.right-balloon', {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.8,
                ease: 'back.out(1.7)'
            }, '-=1.5');

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative h-[100vh] bg-black overflow-hidden">
            <div className='text-center mx-auto'>
                <TitleComponent>
                    Biz Kimiz?
                </TitleComponent>
            </div>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                {/* Ana resim container - absolute pozisyonlu olacak */}
                <div className="image-container absolute overflow-hidden">
                    <Image
                        src="/images/burak-kayabasi.jpg"
                        alt="Berber Sanatçısı"
                        fill
                        className="main-image object-contain object-center"
                    />
                </div>

                <div className="color-layer-left absolute left-0 bottom-0 w-1/2 bg-gradient-to-t from-amber-900/90 via-amber-700/80 to-amber-500/70"></div>
                <div className="color-layer-right absolute right-0 bottom-0 w-1/2 bg-gradient-to-t from-rose-900/90 via-rose-700/80 to-rose-500/70"></div>

                <div className="left-image absolute left-0 bottom-0 w-1/2 overflow-hidden">
                    <Image
                        className='h-full w-full object-cover'
                        fill
                        alt='Sol Resim'
                        src='/images/left-photo.jpg'
                    />
                </div>

                <div className="right-image absolute right-0 bottom-0 w-1/2 overflow-hidden">
                    <Image
                        className='h-full w-full object-cover'
                        fill
                        alt='Sağ Resim'
                        src='/images/right-photo.jpg'
                    />
                </div>

                <div className="left-balloon absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 z-30 max-w-sm">
                    <div className="bg-gradient-to-br from-amber-100/20 to-amber-200/10 backdrop-blur-md rounded-3xl p-8 border-2 border-amber-300/30 shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-2 -left-2 w-6 h-20 bg-gradient-to-b from-red-500 via-white to-blue-500 rounded-full opacity-80 rotate-12"></div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-amber-400 rounded-full mr-3 flex items-center justify-center">
                                ✂️
                            </div>
                            <h2 className="text-white text-2xl md:text-4xl font-bold text-shadow-lg">
                                Ustalık
                            </h2>
                        </div>

                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded mb-4"></div>
                        <p className="text-white/95 text-sm md:text-base leading-relaxed">
                            Geleneksel berberlik sanatının en ince detayları. Her hareket, yılların deneyimi.
                        </p>

                        <div className="absolute bottom-2 right-2 text-amber-300/50 text-xs font-mono">
                            EST. 1950
                        </div>
                    </div>
                </div>

                <div className="right-balloon absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 z-30 max-w-sm">
                    <div className="bg-gradient-to-br from-rose-100/20 to-pink-200/10 backdrop-blur-md rounded-3xl p-8 border-2 border-rose-300/30 shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-br from-silver-300 to-gray-400 rounded-full opacity-70 border-2 border-white/50"></div>

                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-rose-400 rounded-full mr-3 flex items-center justify-center">
                                💇‍♀️
                            </div>
                            <h3 className="text-white text-xl md:text-3xl font-bold">
                                Modern Sanat
                            </h3>
                        </div>

                        <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded mb-4"></div>
                        <p className="text-white/95 text-sm md:text-base leading-relaxed">
                            Çağdaş kuaförlük teknikleri ile kişiye özel stil yaratma sanatı. Her kesim bir başyapıt.
                        </p>

                        <div className="absolute bottom-2 right-2 text-rose-300/50 text-xs font-mono">
                            MODERN STYLE
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Art;
