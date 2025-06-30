// // 'use client';
// // import AnimationComponent from '@/share/AnimationComponent';
// // import TitleComponent from '@/share/TitleComponent';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Image from 'next/image';
// // import React, { useRef } from 'react';
// // import { useMediaQuery } from 'react-responsive';

// // // ScrollTrigger'ı register et
// // gsap.registerPlugin(ScrollTrigger);

// // const Art = () => {
// //     const isMobile = useMediaQuery({ maxWidth: 767 });
// //     const titleRef = useRef(null);

// //     useGSAP(() => {
// //         // const start = isMobile ? 'top 20%' : 'top top';

// //         // Timeline oluştur
// //         const maskTimeline = gsap.timeline({
// //             scrollTrigger: {
// //                 trigger: titleRef.current,
// //                 start: 'bottom bottom',
// //                 end: 'bottom center',
// //                 scrub: 1.5,
// //                 pin: '#art',
// //             }
// //         });

// //         gsap.set('#left-title', { opacity: 0, x: -100 });
// //         gsap.set('#right-content', { opacity: 0, x: 100 });



// //         // Animasyon sırası
// //         maskTimeline
// //             .to('#will-fade', {
// //                 opacity: 0,
// //                 duration: 0.5,
// //                 ease: 'power1.inOut'
// //             })

// //             .to('.masked-img', {
// //                 scale: 1.2, // 1.3 yerine 1.2 daha kontrollü
// //                 maskSize: '300%', // 400% çok büyük, 100% daha uygun
// //                 duration: 1.5,
// //                 ease: 'power2.inOut'
// //             }, 0.3) // Hafif gecikme ile başlat

// //             .to('.content', {
// //                 y: 0,
// //                 duration: .5
// //             })
// //             .to('#left-title', {
// //                 opacity: 1,
// //                 x: 0,
// //                 duration: .8,
// //                 ease: 'power2.out',
// //             })
// //             .to('#right-content', {
// //                 opacity: 1,
// //                 x: 0,
// //                 duration: .8,
// //                 ease: 'power2.out',
// //             })
// //             .to('#masked-content', {
// //                 opacity: 1,
// //                 y: 0, // Yukarıdan gelme efekti
// //                 duration: .8,
// //                 ease: 'power1.inOut'
// //             }, 2.3);
// //     });

// //     return (
// //         <div className='relative'>
// //             <div className="container mx-auto h-full pt-8" id='art'>
// //                 {/* <div className="mx-auto text-center text-5xl max-w-xs  text-[#5f5e5e]">Biz Kimiz?</div> */}
// //                 <TitleComponent>
// //                     Hakkımızda
// //                 </TitleComponent>
// //                 <AnimationComponent>
// //                     <div className='flex flex-col items-center justify-center h-[100vh]'>
// //                         <h2
// //                             className='absolute left-0 top-1/2 transform -translate-y-1/2 z-30 max-w-xs  text-[#5f5e5e] text-4xl md:text-7xl font-bold'
// //                             id='left-title'
// //                         >
// //                             Biz Kimiz?
// //                         </h2>

// //                         {/* Ana görsel container */}
// //                         <div className='cocktail-img'>
// //                             <Image
// //                                 src="/images/barber-artist.jpg"
// //                                 alt="Berber Sanatçısı"
// //                                 className="masked-img  object-cover"
// //                                 fill

// //                             />

// //                             {/* İçerik overlay */}
// //                             <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 max-w-xs px-10">
// //                                 <div className="space-y-2"
// //                                     id='right-content'>
// //                                     <h3 className='text-xl md:text-2xl font-bold text-[#5f5fe5fe]'>
// //                                         Sanat ve Ustalık
// //                                     </h3>
// //                                     <div>
// //                                         <p className="text-sm md:text-base text-[#efefef] leading-relaxed">
// //                                             Geleneksel ustalık ile modern teknikleri harmanlayarak,
// //                                             her müşterimize özel bir deneyim sunuyoruz.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </AnimationComponent>

// //             </div>
// //         </div>
// //     );
// // };

// // export default Art;
// 'use client';
// import AnimationComponent from '@/share/AnimationComponent';
// import TitleComponent from '@/share/TitleComponent';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import React, { useRef } from 'react';
// import { useMediaQuery } from 'react-responsive';

// gsap.registerPlugin(ScrollTrigger);

// const Art = () => {
//     const isMobile = useMediaQuery({ maxWidth: 767 });
//     const titleRef = useRef(null);

//     useGSAP(() => {
//         const maskTimeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: titleRef.current,
//                 start: isMobile ? 'top 80%' : 'bottom bottom',
//                 end: isMobile ? 'top 40%' : 'bottom center',
//                 scrub: 1.5,
//                 pin: '#art',
//             }
//         });

//         gsap.set('#left-title', { opacity: 0, x: isMobile ? -50 : -100 });
//         gsap.set('#right-content', { opacity: 0, x: isMobile ? 50 : 100 });

//         maskTimeline
//             .to('#will-fade', {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: 'power1.inOut'
//             })
//             .to('.masked-img', {
//                 scale: isMobile ? 1.05 : 1.2,
//                 maskSize: isMobile ? '150%' : '300%',
//                 duration: 1.5,
//                 ease: 'power2.inOut'
//             }, 0.3)
//             .to('.content', {
//                 y: 0,
//                 duration: .5
//             })
//             .to('#left-title', {
//                 opacity: 1,
//                 x: 0,
//                 duration: .8,
//                 ease: 'power2.out',
//             })
//             .to('#right-content', {
//                 opacity: 1,
//                 x: 0,
//                 duration: .8,
//                 ease: 'power2.out',
//             })
//             .to('#masked-content', {
//                 opacity: 1,
//                 y: 0,
//                 duration: .8,
//                 ease: 'power1.inOut'
//             }, 2.3);
//     });

//     return (
//         <div className="relative">
//             <div className="container mx-auto h-full pt-8" id="art">
//                 <TitleComponent ref={titleRef}>Hakkımızda</TitleComponent>

//                 <AnimationComponent>
//                     <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
//                         {/* Başlık - Sol */}
//                         <h2
//                             id="left-title"
//                             className={`absolute z-30 text-[#5f5e5e] font-bold max-w-[90%]
//                             ${isMobile
//                                     ? 'left-4 top-10 text-3xl text-left'
//                                     : 'left-10 top-1/2 -translate-y-1/2 text-6xl'}`}
//                         >
//                             Biz Kimiz?
//                         </h2>

//                         {/* Ana görsel container */}
//                         <div className={`cocktail-img relative w-full ${isMobile ? 'h-[50vh]' : 'h-[80vh]'} flex items-center justify-center`}>
//                             <img
//                                 src="/images/barber-artist.jpg"
//                                 alt="Berber Sanatçısı"
//                                 className="masked-img object-cover w-full h-full"
//                             />

//                             {/* İçerik - Sağ */}
//                             <div className={`absolute ${isMobile ? 'bottom-5 left-1/2 -translate-x-1/2 text-center' : 'right-16 top-1/2 -translate-y-1/2'} z-30 max-w-xs sm:max-w-sm md:max-w-md`}>
//                                 <div className="space-y-2" id="right-content">
//                                     <h3 className={`absolute z-30 text-[#010101] font-bold max-w-[90%]
//                             ${isMobile
//                                             ? '-right-8 top-10 text-3xl text-left'
//                                             : '-right-48 top-1/2 -translate-y-1/2 text-2xl'}`}>
//                                         Sanat ve Ustalık
//                                     </h3>
//                                     <p
//                                         className={`absolute z-30 text-[#efefef] font-bold max-w-[90%]
//                             ${isMobile
//                                                 ? '-right-8 top-10 text-3xl text-left'
//                                                 : '-right-48 top-1/2 -translate-y-1/2 text-xl'}`}>
//                                         Geleneksel ustalık ile modern teknikleri harmanlayarak,
//                                         her müşterimize özel bir deneyim sunuyoruz.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </AnimationComponent>
//             </div>
//         </div>
//     );
// };

// export default Art;

'use client';
import AnimationComponent from '@/share/AnimationComponent';
import TitleComponent from '@/share/TitleComponent';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: isMobile ? 'top 80%' : 'bottom bottom',
                end: isMobile ? 'top 40%' : 'bottom center',
                scrub: 1.5,
                pin: '#art',
            }
        });

        gsap.set('#left-title', { opacity: 0, x: isMobile ? -50 : -100 });
        gsap.set('#right-content', { opacity: 0, x: isMobile ? 50 : 100 });

        maskTimeline
            .to('#will-fade', {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: isMobile ? 1.05 : 1.2,
                maskSize: isMobile ? '150%' : '300%',
                duration: 1.5,
                ease: 'power2.inOut'
            }, 0.3)
            .to('.content', {
                y: 0,
                duration: .5
            })
            .to('#left-title', {
                opacity: 1,
                x: 0,
                duration: .8,
                ease: 'power2.out',
            })
            .to('#right-content', {
                opacity: 1,
                x: 0,
                duration: .8,
                ease: 'power2.out',
            })
            .to('#masked-content', {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: 'power1.inOut'
            }, 2.3);
    });

    return (
        <div className="relative">
            <div className="container mx-auto h-full pt-8" id="art">
                <div ref={titleRef}>
                    <TitleComponent>Hakkımızda</TitleComponent>
                </div>

                <AnimationComponent>
                    <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
                        {/* Başlık - Sol */}
                        <h2
                            id="left-title"
                            className={`absolute z-30 text-[#5f5e5e] font-bold max-w-[90%] 
                            ${isMobile
                                    ? 'left-4 top-10 text-3xl text-left'
                                    : 'left-10 top-1/2 -translate-y-1/2 text-6xl'}`}
                        >
                            Biz Kimiz?
                        </h2>

                        {/* Ana görsel container */}
                        <div className={`cocktail-img relative w-full ${isMobile ? 'h-[50vh]' : 'h-[80vh]'} flex items-center justify-center`}>
                            <Image
                                src="/images/barber-artist.jpg"
                                alt="Berber Sanatçısı"
                                className="masked-img object-cover w-full h-full"
                                fill
                            />

                            {/* İçerik - Sağ */}
                            <div className={`absolute ${isMobile ? 'top-36 left-4 text-left' : 'top-1/2 -translate-y-1/2 right-10'} z-30 max-w-[300px]`}>
                                <div className="space-y-3" id="right-content">
                                    <h3 className="text-lg md:text-2xl font-bold text-[#5f5fe5fe]">
                                        Sanat ve Ustalık
                                    </h3>
                                    <p className="text-sm md:text-base text-[#efefef] leading-relaxed">
                                        Geleneksel ustalık ile modern teknikleri harmanlayarak,
                                        her müşterimize özel bir deneyim sunuyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationComponent>
            </div>
        </div>
    );
};

export default Art;
