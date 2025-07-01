import React from 'react'
import WhatsappIcon from './WhatsappIcon'
import Link from 'next/link'

const SocialLinks = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-row'>
                {/* /*Twitter */}
                {/* /*FaceBook */}
                <Link href='https://www.facebook.com/hairzoomm/' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="50" viewBox="0 0 50 50" fill='white'>
                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                </Link>
                {/* /*Instagram */}
                <Link
                    href='https://www.instagram.com/hairzoom_/' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="50" viewBox="0 0 64 64" fill='white'>
                        <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg>
                    {/* Whatsapp */}
                </Link>
                <WhatsappIcon />
            </div>
        </div>
    )
}

export default SocialLinks



