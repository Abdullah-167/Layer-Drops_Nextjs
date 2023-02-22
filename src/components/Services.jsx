import React from 'react'
import Image from 'next/image'
import RightArrowIcon from '../../public/images/rightarrows.png'
import LeftArrowIcon from '../../public/images/leftarrows.png'
import Cards from './Cards'

const Services = () => {
    return (
        <div className='bg-primary'>
            <div className='container'>
                <div className=' max-w-[700px] mx-auto pt-[50px] sm:pt-[100px] pb-5 sm:pb-16'>
                    <div>
                        <div className='flex justify-center gap-3 items-center mb-5'>
                            <Image src={RightArrowIcon} />
                            <h3 className='text-light-gray text-base tracking-[1.6px]'>OUR SERVICES</h3>
                            <Image src={LeftArrowIcon} />
                        </div>
                        <div>
                            <h1 className='text-off-white text-center text-3xl sm:text-5xl mb-5'>We’re covering all the insurance fields</h1>
                        </div>
                        <div>
                            <h2 className='text-light-gray text-center text-base sm:text-lg pl-7'>Nullam eu nibh vitae est tempor molestie id sed ex.
                                Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.</h2>
                        </div>
                    </div>

                </div>
                <Cards />
            </div>
        </div>
    )
}

export default Services




