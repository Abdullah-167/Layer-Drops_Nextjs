import React from 'react'
import Image from 'next/image';
import FooterLogo from '../../public/images/logo.png';
import { GrTwitter } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='container pt-14 pb-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-16 lg:gap-28'>
                    <div>
                        <Image src={FooterLogo} width={200} />
                        <p className=' text-base text-light-gray  w-[310px] pt-8'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt.</p>
                        <div className='flex gap-3 pt-9'>
                            <div className='flex justify-center border-secondary border-2 rounded-full w-[45px] h-[45px] p-3  cursor-pointer transition-[0.5s] hover:bg-off-white text-off-white hover:text-secondary hover:border-none    '>
                                <a href='#' className='text-lg'> <GrTwitter /> </a>
                            </div>
                            <div className='flex justify-center border-secondary border-2 rounded-full w-[45px] h-[45px] p-3  cursor-pointer transition-[0.5s] hover:bg-off-white text-off-white hover:text-secondary hover:border-none    '>
                                <a href='#' className='text-lg'> <BsFacebook /> </a>
                            </div>  <div className='flex justify-center border-secondary border-2 rounded-full w-[45px] h-[45px] p-3  cursor-pointer transition-[0.5s] hover:bg-off-white text-off-white hover:text-red-500 hover:border-none    '>
                                <a href='#' className='text-lg '> <FaPinterestP /> </a>
                            </div>  <div className='flex justify-center border-secondary border-2 rounded-full w-[45px] h-[45px] p-3  cursor-pointer transition-[0.5s] hover:bg-off-white text-off-white hover:text-red-500 hover:border-none    '>
                                <a href='#' className='text-lg '> <AiOutlineInstagram /> </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-off-white text-xl'>Contact</h3>
                            <div className=' pt-7'>
                                <span className='flex gap-4 items-center text-base'><FaEnvelope className='text-secondary' /><a className='text-light-gray'>needhelp@company.com</a></span>
                            </div>
                            <div className=' pt-7 w-64'>
                                <span className='flex gap-4 items-center text-base'><MdLocationPin className='text-secondary text-2xl' /><p className='text-light-gray'>30 Commercial Road Fratton, Australia</p></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-off-white text-xl'>
                            Open Hours
                        </h3>
                        <p className='text-light-gray text-base w-56 pt-5'>Mon – Sat: 8:00 am to 6:00 pm Sunday: Closed</p>
                        {/* <div className="relative flex items-center text-off-white pt-7">
                            <input className="border bg-[#111D32] border-none text-off-white rounded-lg outline-none py-4 pl-6 pr-20 " type="text" placeholder="Search" />
                            <div className="absolute left-[230px] pl-3 cursor-pointer text-white">
                                <FiSend />
                            </div>
                        </div> */}
                        <div className='flex items-center gap-5 pt-6'>
                            <span className='text-light-blue text-3xl'><BsFillTelephoneFill /></span>
                            <div className='text-off-white'>
                                <span className='text-base'>
                                    000 (003) 68-090
                                </span>
                                <p className='text-light-gray text-sm'>Call to Our Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer