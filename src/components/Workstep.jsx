import React from 'react'
import RightArrows from '../../public/images/rightarrows.png'
import LeftArrows from '../../public/images/leftarrows.png'
import Image from 'next/image'
import { AiOutlineRead } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa';


const Workstep = () => {
    return (
        <div className='bg-[#E4E7EA] mb-20'>
            <div className='container'>
                <div className='flex justify-center gap-4 items-center pt-16 sm:pt-32 pb-6'>
                    <span> <Image src={RightArrows} /> </span>
                    <h1 className='text-dark text-base'>DEFAULT SUB TEXT</h1>
                    <span> <Image src={LeftArrows} /> </span>
                </div>
                <div className='max-w-[600px] mx-auto mb-5 sm:mb-10'>
                    <h1 className='text-primary text-3xl sm:text-5xl text-center '>Our easy work process in 4 steps
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 pb-14'>
                    <div>
                        <div className='flex justify-center relative mt-10 mb-7 text-secondary hover:text-off-white  bg-off-white  rounded-[100%] w-[150px] h-[150px] p-10 mx-auto'>
                            <span className='  text-7xl '> <AiOutlineRead /> </span>
                            <span className='w-10 h-10 p-1 text-off-white bg-secondary absolute top-0 left-0 rounded-full flex justify-center items-center'>01</span>
                        </div>
                        <div className='mx-auto w-52 '>
                            <h3 className='text-xl text-primary text-center pb-3'>Scedual Meeting</h3>
                            <p className='text-base text-light-gray text-center'>Lorem Ipsum is simply free dumy text of the printing and amet piscing</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center relative mt-10 mb-7 text-secondary hover:text-off-white  bg-off-white hover:bg-primary rounded-[100%] w-[150px] h-[150px] p-10 mx-auto'>
                            <span className='  text-7xl '> <IoIosPeople /> </span>
                            <span className='w-10 h-10 p-1 text-off-white bg-secondary absolute top-[115px] left-24 rounded-full flex justify-center items-center'>02</span>
                        </div>
                        <div className='mx-auto w-52 '>
                            <h3 className='text-xl text-primary text-center pb-3'>Select insurance</h3>
                            <p className='text-base text-light-gray text-center'>Lorem Ipsum is simply free dumy text of the printing and amet piscing</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center relative mt-10 mb-7 text-secondary hover:text-off-white  bg-off-white hover:bg-primary rounded-[100%] w-[150px] h-[150px] p-10 mx-auto'>
                            <span className='  text-7xl '> <FaHandshake /> </span>
                            <span className='w-10 h-10 p-1 text-off-white bg-secondary absolute top-0 left-0 rounded-full flex justify-center items-center'>03</span>
                        </div>
                        <div className='mx-auto w-52 '>
                            <h3 className='text-xl text-primary text-center pb-3'>Select insurance</h3>
                            <p className='text-base text-light-gray text-center'>Lorem Ipsum is simply free dumy text of the printing and amet piscing</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center relative mt-10 mb-7 text-secondary hover:text-off-white  bg-off-white hover:bg-primary rounded-[100%] w-[150px] h-[150px] p-10 mx-auto'>
                            <span className='  text-7xl '> <AiOutlineRead /> </span>
                            <span className='w-10 h-10 p-1 text-off-white bg-secondary absolute top-[115px] left-24 rounded-full flex justify-center items-center'>04</span>
                        </div>
                        <div className='mx-auto w-52 '>
                            <h3 className='text-xl text-primary text-center pb-3'>Select insurance</h3>
                            <p className='text-base text-light-gray text-center'>Lorem Ipsum is simply free dumy text of the printing and amet piscing</p>
                        </div>
                    </div>
                </div>
                <div className=' sm:flex justify-center pb-20'>
                    <input className='w-full sm:w-[430px] py-3 sm:py-3 pl-10 pr-3 outline-none bg-[#F2F5F9] text-light-gray rounded-sm sm:rounded-bl-lg ' placeholder="Don't Hesitate, Contact us for better future life" type="text" />
                    <div className=' bg-secondary text-white w-full sm:w-[170px] sm:mx-0 mx-auto mt-6 sm:mt-0   sm:rounded-tr-lg sm:rounded-br-lg cursor-pointer  text-center'>
                        <button className='py-3 px-4 text-base'>
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workstep