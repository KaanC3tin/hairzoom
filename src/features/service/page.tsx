import React from 'react';
import { ServicesItem } from '../../../contans';
import TitleComponent from '../../share/TitleComponent';
import AnimationComponent from '@/share/AnimationComponent';

interface ServicesProps {
    service: ServicesItem[];
}

const Services = ({ service }: ServicesProps) => {
    const erkekServices = service.find(s => s.category === 'erkek');
    const kadinServices = service.find(s => s.category === 'kadın');

    return (

        <section className="bg-black text-white min-h-screen pt-40 pb-20" id='service'>
            <div className="px-6 md:px-16 lg:px-32 flex flex-col">
                <TitleComponent>
                    Hizmetlerimiz
                </TitleComponent>
                <AnimationComponent>
                    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 border border-gray-500/35 rounded-none  p-6">
                        {/* Erkek Hizmetleri */}
                        <div className='bg-[#111] p-5'>
                            <h3 className="text-2xl font-semibold mb-6 pb-2  underline-offset-2 hover:underline no-underline">
                                {erkekServices?.categoryTitle}
                            </h3>
                            <div className="space-y-6">
                                {erkekServices?.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" p-5 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <div className='flex justify-between'>
                                            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                            {/* ------------------------------------------------ */}
                                            <figure>{item.price}</figure>
                                        </div>
                                        <p className="text-gray-300 text-sm">[{item.description}]</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kadın Hizmetleri */}
                        <div className='bg-[#111] rounded-none p-5'>
                            <h3 className="text-2xl font-semibold mb-6 pb-2  underline-offset-2 hover:underline no-underline">
                                {kadinServices?.categoryTitle}
                            </h3>
                            <div className="space-y-6">
                                {kadinServices?.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-5 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <div className='flex justify-between'>
                                            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                            {/* ...................................................... */}
                                            <figure>{item.price}</figure>
                                        </div>
                                        <p className="text-gray-300 text-sm">[{item.description}]</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimationComponent>
            </div>
        </section>
    );
};

export default Services;
