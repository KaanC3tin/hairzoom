import React from 'react'
import Footer from '@/share/Footer'
import Header from '@/share/Header'
import { contactInformation, navLinks, openingHours, services } from '../../../contants/index';

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='min-h-screen'>
                <Header links={navLinks} />
                {children}
            </div>
            <Footer
                informations={contactInformation}
                openingHours={openingHours}
                services={services}
            />
        </>
    )
}
export default SubLayout