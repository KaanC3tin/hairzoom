'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const textContainerRef = useRef(null); // Ref for text container to pin
    const sectionRef = useRef(null); // Ref for the entire section
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });
        //textler %50' de kaybolacak
        // gsap.to(textContainerRef.current, {
        //     opacity: 0,
        //     y: -50,
        //     duration: 0.8,
        //     ease: 'power2.out',
        //     scrollTrigger: {
        //         trigger: sectionRef.current,
        //         start: '50% top', // %50'de başlasın
        //         end: '50% top',   // %60'da bitsin
        //         scrub: 1,
        //         id: 'text-hide',
        //     }
        // });

        // ✅ VİDEO scroll ile ilerlesin
        const checkVideoReady = () => {
            if (videoRef.current && videoRef.current.readyState >= 1) {
                const duration = videoRef.current.duration;

                gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: `+=${isMobile ? 1000 : 1500}`,
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        id: 'video-scroll',
                    },
                }).to(videoRef.current, {
                    currentTime: duration,
                    ease: 'none',
                }).fromTo(videoRef.current, {
                    currenTime: 0,
                    scale: 1,
                    ease: 'elastic.out',
                }, {
                    currentTime: 0,
                    scale: isMobile ? 1.1 : 1.3,
                    opacity: .5,
                    ease: 'none',
                })
            } else {
                requestAnimationFrame(checkVideoReady);
            }
        };

        checkVideoReady();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);


    return (
        <main id="hero" ref={sectionRef} className="bg-black text-white relative min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 h-full w-full z-0" id='home'>
                <video
                    ref={videoRef}
                    src="/videos/hair-cut-output.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Text Container */}
            <div
                ref={textContainerRef}
                className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5"
            >
                <h1 className="title absolute top-24 md:mt-40 mt-28 text-6xl md:text-[5vw] leading-none text-center">
                    TARZINI BELİRLE
                </h1>

                <div className="container mx-auto mt-10 flex  lg:bottom-20 top-auto md:top-[30vh]">
                    <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
                        <div className="space-y-4 hidden md:block absolute left-11 bottom-5">
                            <p className="mx-auto subtitle">Stilini uzman dokunuşlarla yeniden tanımla.</p>
                            <p className="subtitle text-yellow-600 text-6xl text-yellow max-w-xl 2xl:text-start text-center">
                                Sana özel görünüm, sana özel deneyim
                            </p>
                        </div>

                        <div className="text-lg lg:max-w-2xs md:max-w-xs w-full hidden md:block absolute right-11 bottom-5">
                            <p className="subtitle text-left mb-4">
                                Alanında uzman ekibimizle, saç ve sakal bakımında modern çözümler sunarak tarzınızı zirveye taşıyor,
                                özgüveninizi yeniden şekillendiriyoruz.
                            </p>
                            <Link
                                href="#service"
                                className="subtitle font-semibold opacity-80 2xl:text-start text-center hover:text-yellow-600 duration-300 hover:underline-offset-2 hover:underline underline-none transition-all"
                            >
                                Hizmetlerimiz!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional Overlay */}
        </main>
    );
};

export default HeroSection;