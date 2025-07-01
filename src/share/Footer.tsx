// 'use client'
// import React, { useRef } from 'react'
// import SocialLinks from './SocialLinks'
// import { ContactInformationItem, OpeningHourItem, ServicesItem } from '../../contans/index'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Link from 'next/link'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollTrigger)

// interface ContactInformationProps {
//     informations: ContactInformationItem[];
//     openingHours: OpeningHourItem[];
//     services: ServicesItem[];
// }


// const Footer = ({ informations, openingHours, services }: ContactInformationProps) => {
//     const manServices = services.find(s => s.category === 'erkek');
//     const womanServices = services.find(s => s.category === 'kadın');

//     const mapRef = useRef<HTMLIFrameElement>(null)
//     const infoRef = useRef<HTMLDivElement>(null)

//     useGSAP(() => {
//         if (mapRef.current && infoRef.current) {
//             gsap.to(mapRef.current, {
//                 y: -50,
//                 ease: 'power1.out',
//                 scrollTrigger: {
//                     trigger: mapRef.current,
//                     start: 'top bottom',
//                     scrub: true,
//                 },
//             })

//             gsap.from(infoRef.current, {
//                 y: 50,
//                 opacity: 1,
//                 ease: 'power2.out',
//                 scrollTrigger: {
//                     trigger: infoRef.current,
//                     start: 'top 80%',
//                     scrub: true,
//                 },
//             })
//         }
//     }, [])

//     return (
//         <footer className="bg-black text-white border-t border-gray-700" id='contact'>
//             <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-10 space-y-8">
//                 <div className="overflow-hidden rounded-xl shadow-lg border border-gray-600">
//                     <iframe
//                         ref={mapRef}
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50477.628382261835!2d29.051948096123912!3d37.74662149963325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f024770560b%3A0x1a6f2575744c1918!2sHAIR%20ZOOM%20WOMAN%20%26%20MAN%20CO%C4%B0FFEUR!5e0!3m2!1str!2str!4v1750886270230!5m2!1str!2str"
//                         className="w-full h-[300px]"
//                         style={{ border: '0' }}
//                         allowFullScreen
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     />
//                 </div>

//                 <div className="lg:grid lg:grid-cols-4 md:flex md:flex-col sm:flex sm:flex-col  gap-6 text-sm md:text-base">
//                     {/* Sol Kolon: İletişim */}
//                     <div className="space-y-4">
//                         <h3 className="text-lg font-semibold text-blue-400">İletişim</h3>
//                         {informations.map((info, idx) => (
//                             <div key={idx} className="space-y-2">
//                                 <p><span className="font-semibold text-white">Telefon:</span> {info.phone}</p>
//                                 <p><span className="font-semibold">Email:</span> {info.email}</p>
//                                 <p><span className="font-semibold">Adres:</span> {info.address}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Sağ Kolon: Çalışma Saatleri */}
//                     <div className="space-y-4">
//                         <h3 className="text-lg font-semibold text-blue-400">Çalışma Saatleri</h3>
//                         {openingHours.map((open, idx) => (
//                             <div key={idx} className="flex flex-col space-y-1">
//                                 <p><span className="font-semibold"></span> {open.day}</p>
//                                 <p><span className="font-semibold"></span> {open.hour}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="space-y-4">
//                         <h1 className='text-xl text-blue-400 font-semibold'>
//                             {manServices?.categoryTitle}
//                         </h1>
//                         {manServices?.items.map((man, idx) => (
//                             <div key={idx}>
//                                 <Link
//                                     href={man?.href}
//                                 >
//                                     {man?.title}
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-4">
//                         <h1 className='text-xl text-blue-400 font-semibold'>
//                             {womanServices?.categoryTitle}
//                         </h1>
//                         {womanServices?.items.map((man, idx) => (
//                             <div key={idx}>
//                                 <Link
//                                     href={man?.href}
//                                 >
//                                     {man?.title}
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>


//                 <div className="pt-6 border-t border-gray-700">
//                     <SocialLinks />
//                 </div>

//                 <p className="text-center text-sm text-gray-400">
//                     © {new Date().getFullYear()} HAIRZOOM Woman & Man Coiffeur. Tüm hakları saklıdır.
//                 </p>
//             </div>
//         </footer>
//     )
// }

// export default Footer

'use client'
import React, { useRef } from 'react'
import SocialLinks from './SocialLinks'
import { ContactInformationItem, OpeningHourItem, ServicesItem } from '../../contans/index'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface ContactInformationProps {
    informations: ContactInformationItem[];
    openingHours: OpeningHourItem[];
    services: ServicesItem[];
}

const Footer = ({ informations, openingHours, services }: ContactInformationProps) => {
    const manServices = services.find(s => s.category === 'erkek');
    const womanServices = services.find(s => s.category === 'kadın');

    const mapRef = useRef<HTMLIFrameElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (mapRef.current && infoRef.current) {
            gsap.to(mapRef.current, {
                y: -50,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: 'top bottom',
                    scrub: true,
                },
            })

            gsap.from(infoRef.current, {
                y: 50,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: 'top 80%',
                    scrub: true,
                },
            })
        }
    }, [])

    return (
        <footer className="bg-black text-white border-t border-gray-700" id="contact">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-10 space-y-10">
                <div className="overflow-hidden rounded-xl shadow-lg border border-gray-600">
                    <iframe
                        ref={mapRef}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50477.628382261835!2d29.051948096123912!3d37.74662149963325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f024770560b%3A0x1a6f2575744c1918!2sHAIR%20ZOOM%20WOMAN%20%26%20MAN%20CO%C4%B0FFEUR!5e0!3m2!1str!2str!4v1750886270230!5m2!1str!2str"
                        className="w-full h-[300px] md:h-[400px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div
                    ref={infoRef}
                    className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 text-sm md:text-base"
                >
                    {/* İletişim */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">İletişim</h3>
                        {informations.map((info, idx) => (
                            <div key={idx} className="space-y-2">
                                <p><span className="font-semibold text-white">Telefon:</span> {info.phone}</p>
                                <p><span className="font-semibold">Email:</span> {info.email}</p>
                                <p><span className="font-semibold">Adres:</span> {info.address}</p>
                            </div>
                        ))}
                    </div>

                    {/* Çalışma Saatleri */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Çalışma Saatleri</h3>
                        {openingHours.map((open, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gray-700 py-1 last:border-0">
                                <span>{open.day}</span>
                                <span>{open.hour}</span>
                            </div>
                        ))}
                    </div>

                    {/* Erkek Hizmetleri */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">{manServices?.categoryTitle}</h3>
                        {manServices?.items.map((man, idx) => (
                            <Link
                                key={idx}
                                href={man?.href ?? '#'}
                                className="block hover:text-amber-500 transition-colors"
                            >
                                {man?.title}
                            </Link>
                        ))}
                    </div>

                    {/* Kadın Hizmetleri */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">{womanServices?.categoryTitle}</h3>
                        {womanServices?.items.map((woman, idx) => (
                            <Link
                                key={idx}
                                href={woman?.href ?? '#'}
                                className="block hover:text-amber-400 transition-colors"
                            >
                                {woman?.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                    <SocialLinks />
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                    © {new Date().getFullYear()} HAIRZOOM Woman & Man Coiffeur. Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    )
}

export default Footer
