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
            className="fixed top-0 w-full transition-colors duration-300 bg-black/80 z-30 backdrop-blur-sm px-6 md:px-16 lg:px-32"
        >
            <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
                {/* Logo */}
                <Link href="#home" className="flex items-center gap-4">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60} />
                    <h1 className="text-3xl font-bold text-white">HairZoom</h1>
                </Link>

                {/* Nav Links */}
                <ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
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
