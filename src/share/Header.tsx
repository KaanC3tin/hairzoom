// "use client";
// import React, { useRef } from 'react'
// import { NavLinkItem } from '../../contans/index';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/all';
// import Image from 'next/image';
// import Link from 'next/link';



// interface NavlinkProps {
//     links: NavLinkItem[]
// }
// gsap.registerPlugin(ScrollTrigger);

// const Header = ({ links }: NavlinkProps) => {
//     const ref = useRef<HTMLDivElement>(null)
//     useGSAP(() => {
//         gsap.fromTo(
//             ref.current,
//             {
//                 backgroundColor: 'transparent',
//                 // backdropFilter: 'blur(0px)',
//             },
//             {
//                 backgroundColor: '#333446',
//                 backdropFilter: 'blur(10px)',
//                 scrollTrigger: {
//                     trigger: ref.current,
//                     start: 'top top+=50',
//                     toggleActions: 'play none none reverse',
//                     scrub: true,
//                 },
//                 duration: 1,
//                 ease: 'power1.inOut',
//             }
//         );
//     });

//     return (
//         <nav ref={ref}>
//             <div className='flex flex-col items-center justify-center'>
//                 <Link href='#home' className='flex items-center  gap-4'>
//                     <Image src='/images/logo.png' alt='logo' width={90} height={90} />
//                     <h1 className='text-3xl'>
//                         HairZoom
//                     </h1>
//                 </Link>
//                 <ul className='flex items-center justify-center flex-row gap-5'>
//                     {links.map((link) => (
//                         <li key={link.id}>
//                             <a href={`#${link.id}`}
//                             >
//                                 {link.title}

//                             </a>

//                         </li>
//                     ))}

//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Header

'use client';
import React, { useRef } from 'react';
import { NavLinkItem } from '../../contans/index';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';

interface NavlinkProps {
    links: NavLinkItem[];
}

gsap.registerPlugin(ScrollTrigger);

const Header = ({ links }: NavlinkProps) => {
    const navRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!navRef.current) return;

        gsap.fromTo(
            navRef.current,
            {
                backgroundColor: 'transparent',
                css: { backdropFilter: 'blur(10px)' },
            },
            {
                backgroundColor: '#333446',
                css: { backdropFilter: 'blur(40px)' },
                scrollTrigger: {
                    trigger: navRef.current,
                    start: 'top top+=50',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                },
                duration: 1,
                ease: 'power1.inOut',
            }
        );
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0  w-full transition-colors duration-300 bg-black z-20 backdrop-blur-sm px-6 md:px-16 lg:px-32"
        >
            <div className="flex flex-row lg:flex-row lg:justify-between xl:justify-between sm:flex-col md:flex-col items-center justify-center py-4">
                <Link href="#home" className="flex items-center gap-4">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60} />
                    <h1 className="text-3xl font-bold text-white">HairZoom</h1>
                </Link>

                <ul className="flex items-center justify-center gap-6 mt-4">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="text-white hover:text-gray-300 transition-colors duration-200"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
