import React from 'react'
import { FaPhone } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='container'>
            <div className='border-gradient border-[20px]  rounded-[39px] mb-24 mx-6'>
                <div className='border-4 border-light-blue rounded-[19.9px]'>
                    <div className='lg:flex block bg-primary justify-center lg:justify-between gap-3 items-center lg:px-8 xl:px-16 py-10 rounded-2xl'>
                        <div className='mx-5'>
                            <h1 className=' text-3xl md:text-4xl text-off-white text-center'>Find a local insurance agent</h1>
                        </div>
                        <div className='flex justify-center items-center gap-6 xl:gap-10 mt-3'>
                            <div className='flex  justify-center items-center gap-5'>
                                <div className='border-2 border-light-blue rounded-[100%] w-[50px] h-[50px] p-3 mx-auto lg:mx-0'>
                                    <span className='text-light-blue text-xl text-center'><FaPhone /></span>
                                </div>
                                <div className='text-off-white text-center pt-4 sm:pt-0'>
                                    <span className='text-base text-center'>
                                        000 (003) 68-090
                                    </span>
                                    <p className='text-light-gray text-sm text-center'>Call to Our Experts</p>
                                </div>
                            </div>
                            <div className=' bg-secondary text-white w-[170px] rounded-xl cursor-pointer  text-center mx-auto sm:mt-0 mt-5'>
                                <button className=' py-4 text-base'>
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner