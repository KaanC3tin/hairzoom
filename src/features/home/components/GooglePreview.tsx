
import Script from 'next/script'
import React from 'react'
import TitleComponent from '../../../share/TitleComponent';
import AnimationComponent from '@/share/AnimationComponent';

const GooglePreview = () => {
    return (
        <main className='min-h-screen'>
            <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 pb-20' id='googlePreview'>
                <TitleComponent>
                    bir yorum bırakın...
                </TitleComponent>
                <AnimationComponent>
                    <Script
                        src="https://static.elfsight.com/platform/platform.js"
                        data-use-service-core
                        defer
                    />
                    <div className="elfsight-app-59c31834-763f-445c-aeee-c12628026032 w-full max-w-7xl"></div>
                </AnimationComponent>
            </div>
        </main>
    )
}

export default GooglePreview
