// 'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import React, { useRef } from 'react'


// interface TitleItemProps {
//     children: React.ReactNode;
// }

// export const TitleComponent = ({ children }: TitleItemProps) => {
//     const titleRef = useRef(null);
//     useGSAP(() => {

//         gsap.to(titleRef.current, { x: 100, duration: 1, ease: 'elastic.inOut' })
//     })
//     return (
//         <>
//             <h2 className="text-4xl font-bold  mb-16 bg-[#f4f4f4] p-5 text-black  flex items-center justify-center"
//                 ref={titleRef}>
//                 {children}
//             </h2>

//         </>
//     )
// }

// export default TitleComponent
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
                transform: 'translateX(-100px)',    // Soldan gelsin
                opacity: 0,
            },
            {
                transform: 'translateX(0px)',    // Soldan gelsin
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none', // sadece bir kere oyna
                },
            }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full flex items-center justify-center bg-gray-100 mx-auto text-center"
        >
            <h1 className="text-5xl md:text-8xl font-extrabold text-center text-gray-800">
                {children}
            </h1>
        </section>
    );
};

export default TitleComponent;
