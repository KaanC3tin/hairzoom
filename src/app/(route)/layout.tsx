import React from 'react'
import Footer from '@/share/Footer'
import Header from '@/share/Header'
import { contactInformation, navLinks } from '../../../contans/index';

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='min-h-screen'>
                <Header links={navLinks} />
                {children}
            </div>
            <Footer informations={contactInformation} />
        </>
    )
}
export default SubLayout