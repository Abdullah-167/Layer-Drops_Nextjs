import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };


    return (
        <div className='mt-6 mb-20 sm:mb-32 mx-5'>
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
                        {menuOpen ? (
                            <div className='text-primary text-4xl cursor-pointer' onClick={toggleMenu}>
                                <AiOutlineClose />
                            </div>
                        ) : (
                            <div className='text-primary text-4xl cursor-pointer' onClick={toggleMenu}>
                                <GiHamburgerMenu />
                            </div>
                        )}
                    </div>
                </div>
                <div className={`menu ${menuOpen ? 'open' : ''} fixed inset-0 z-20  bg-dark text-white text-center rounded-xl cursor-pointer mt-[100px]`}>
                    <a className='block py-2 px-8 cursor-pointer text-2xl'>Home</a>
                    <a className='block py-2 px-8 cursor-pointer text-2xl'>About</a>
                    <a className='block py-2 px-8 cursor-pointer text-2xl'>Insurance</a>
                    <a className='block py-2 px-8 cursor-pointer text-2xl'>Testimonial</a>
                    <a className='block py-2 px-8 cursor-pointer text-2xl'>News</a>
                    <div className=' bg-secondary text-white text-center rounded-xl cursor-pointer mx-auto w-[200px] mt-10'>
                        <button className=' py-3 px-8'>
                            Get A Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;