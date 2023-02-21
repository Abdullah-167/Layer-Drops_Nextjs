import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    return (
        <div className='mt-6 mb-14 mx-5'>
            <div className='container'>
                <div className='lg:flex hidden justify-between items-center'>
                    <div className=''>
                        <Image src={Logo} width={100} />
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='text-primary text-base'>
                            <a className='mx-5 cursor-pointer'>Home</a>
                            <a className='mx-5 cursor-pointer'>About</a>
                            <a className='mx-5 cursor-pointer'>Insurance</a>
                            <a className='mx-5 cursor-pointer'>Testimonial</a>
                            <a className='mx-5 cursor-pointer'>News</a>
                        </div>
                        <div className=' bg-secondary text-white text-center rounded-xl cursor-pointer'>
                            <button className=' py-3 px-8'>
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Navbar */}

            <div className='container'>
                <div className='lg:hidden flex justify-between items-center'>
                    <div className=''>
                        <Image src={Logo} width={100} />
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='text-primary text-4xl'>
                            <GiHamburgerMenu />
                        </div>
                        <div className=' bg-secondary text-white text-center rounded-xl cursor-pointer sm:flex hidden'>
                            <button className=' py-3 px-8'>
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar