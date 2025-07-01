import React from 'react'
import { FaqItem } from '../../../../contans'
import AnimationComponent from '@/share/AnimationComponent'
import TitleComponent from '@/share/TitleComponent'

interface FaqProps {
    faq: FaqItem[]
}

const FAQ = ({ faq }: FaqProps) => {
    return (
        <div className='bg-black text-white h-screen' id='faq'>
            <div className='px-6 md:px-16 lg:px-32'>
                <div className="flex flex-col items-center">
                    <TitleComponent>
                        Sıkça Sorulan Sorular
                    </TitleComponent>
                    <AnimationComponent>
                        <ul className="w-[60em] mx-auto mt-20 divide-y  shadow-gray-50    shadow-sm">
                            {faq.map((item, index) => (
                                <li key={index}>
                                    <details className="group">
                                        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                            <svg
                                                className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                            <span>{item.title}</span>
                                        </summary>

                                        <article className="px-4 pb-4">
                                            <p>{item.description}</p>
                                        </article>
                                    </details>
                                </li>
                            ))}
                        </ul>
                    </AnimationComponent>
                </div>

            </div>
        </div>
    )
}

export default FAQ