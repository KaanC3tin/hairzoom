// import Script from 'next/script'
// import React from 'react'

// const GooglePreview = () => {
//     return (

//         <main className='flex flex-col items-center justify-center py-10 px-6 md:px-16 lg:px-32'>
//             <h2 className='text-4xl bg-white text-black p-5 w-full flex justify-center mb-10'>Yorumlarınız Bizim İçin Çok Değerli...</h2>
//             <Script
//                 src="https://static.elfsight.com/platform/platform.js"
//                 data-use-service-core
//                 defer
//             />
//             <div className="elfsight-app-59c31834-763f-445c-aeee-c12628026032 w-full max-w-7xl"></div>
//         </main>
//     )
// }

// export default GooglePreview
import AnimationComponent from '@/share/AnimationComponent'
import React from 'react'

export default function GooglePreview() {
    return (
        <AnimationComponent>
            <div>GooglePreview</div>
        </AnimationComponent>
    )
}
