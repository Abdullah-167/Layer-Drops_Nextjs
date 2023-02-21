import Image from 'next/image'
import React from 'react'

import HomeIcon from '../../public/images/home.png'
import CarIcon from '../../public/images/car.png'
import HeartIcon from '../../public/images/heart.png'
import GlobalIcon from '../../public/images/global.png'

const Getquote = () => {

    return (
        <div className='container mx-5'>
            <div className='xl:flex gap-5 justify-center my-16'>
                <div>
                    <div className='flex  gap-4 items-center'>
                        <h1 className='text-dark text-base pt-6'>FREE QUOTE</h1>
                    </div>
                    <h1 className='text-dark text-2xl sm:text-[45px] max-w-[490px] pt-5'>Get an insurance quote <span className='pl-[]'> to get started! </span></h1>
                    <button className='flex  bg-secondary text-off-white text-center  px-8 rounded-lg py-3 mt-5 sm:mt-12 mb-10'>
                        Learm More
                    </button>
                </div>
                <div className='flex gap-5'>
                    <div className=''>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='mb-2 border-[1px] border-[#DFE3E7] rounded-md cursor-pointer h-[75px]'>
                                    <button className='flex items-center text-[#16243D] gap-3 pl-7 pr-[60px] pt-4  '>
                                        <Image src={item.icon} />
                                        <span className='text-sm w-8'>{item.title} </span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <input placeholder='Full Name' className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded-xl' />
                        <input placeholder='Full Name' className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded-xl' />
                        <select className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded-xl cursor-pointer'  >
                            <option className=' cursor-pointer'>Volvo XC90</option>
                            <option className=' cursor-pointer'>Saab 95</option>
                            <option className=' cursor-pointer'>Mercedes SLK</option>
                            <option className=' cursor-pointer'>Audi TT</option>
                        </select>
                        <div>
                            <p className='text-dark text-base'>Limits Of Balance:</p>
                            <input type="range" className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded-xl w-full    ' />
                        </div>
                        <div className=' bg-secondary text-white w-[211px] rounded-xl cursor-pointer'>
                            <button className=' py-3 px-10'>
                                Get A Quote Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getquote


const data = [
    {
        title: "Home Insurance",
        icon: HomeIcon
    },
    {
        title: "Vehical Insurance",
        icon: CarIcon
    },
    {
        title: "Life Insurance",
        icon: HeartIcon
    },
    {
        title: "Business Insurance",
        icon: GlobalIcon
    },
]



