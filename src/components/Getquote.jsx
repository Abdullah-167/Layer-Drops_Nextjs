import Image from 'next/image'
import React from 'react'
import Family from '../../public/images/family.png';
import HomeIcon from '../../public/images/home.png'
import CarIcon from '../../public/images/car.png'
import HeartIcon from '../../public/images/heart.png'
import GlobalIcon from '../../public/images/global.png'

const Getquote = () => {

    return (
        <div className=' max-w-7xl mx-auto'>
            <div className='xl:flex justify-end gap-64 my-16 items-center'>
                <div className='xl:absolute flex justify-center left-0 xl-mb-0 mb-9 mx-5'>
                    <Image width={500} src={Family} />
                </div>
                <div className='xl:grid xl:grid-cols-3 '>
                    <div className='xl:block flex justify-center gap-2 md:gap-5 mx-5 overflow-auto sm:overflow-hidden'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='mb-2 border-[1px] border-[#DFE3E7] rounded-md cursor-pointer mx-auto w-[200px] h-[75px]'>
                                    <button className='flex items-center text-[#16243D] gap-3 pl-7 pr-[60px] pt-4  '>
                                        <Image src={item.icon} />
                                        <span className='text-sm w-8'>{item.title} </span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-4 w-full sm:w-[450px] px-5 col-span-2 mx-auto mt-10 xl:mt-0'>
                        <input placeholder='Full Name' className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded' />
                        <input placeholder='Full Name' className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded' />
                        <select className='bg-off-white text-dark-gray outline-none  pl-4 py-4 rounded cursor-pointer'  >
                            <option className=' cursor-pointer'>Volvo XC90</option>
                            <option className=' cursor-pointer'>Saab 95</option>
                            <option className=' cursor-pointer'>Mercedes SLK</option>
                            <option className=' cursor-pointer'>Audi TT</option>
                        </select>

                        <div className=' bg-secondary text-white w-full sm:w-[211px] rounded cursor-pointer text-center'>
                            <button className=' py-4 px-10'>
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
        icon: HomeIcon,
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



