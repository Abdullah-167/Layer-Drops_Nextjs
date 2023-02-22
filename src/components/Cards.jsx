import React from 'react'
import { AiOutlineCar } from 'react-icons/ai';
import { RiUserHeartFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { GoFlame } from 'react-icons/go';
import { GiDiamondRing } from 'react-icons/gi';
import { GiCommercialAirplane } from 'react-icons/gi';

const Cards = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-28 px-5'>
                {cards.map((item, index) => {
                    return (
                        <div key={index} className='insurance-card bg-[#1c2a44] rounded-md  transition-all duration-500 hover:-translate-y-3 border-b-transparent border-b-2 hover:border-b-off-white hover:rounded-none'>
                            <div className='flex justify-center mt-10 mb-7 bg-primary rounded-[100%] w-[70px] h-[70px] p-5 mx-auto'>
                                <span className='text-white text-4xl '>  {item.cardIcon} </span>
                            </div>
                            <div>
                                <h2 className='text-center text-off-white text-xl cursor-pointer'>{item.title}</h2>
                                <p className='text-center  text-light-gray text-base px-4 pt-2 py-4 '>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards

const cards = [{
    cardIcon: <AiOutlineCar />,
    title: "Car insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
},
{
    cardIcon: <RiUserHeartFill />,
    title: "Life insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
},
{
    cardIcon: <GoHome />,
    title: "Health Care insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
}, {
    cardIcon: <FaHeartbeat />,
    title: "Business insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
}, {
    cardIcon: <MdOutlineBusinessCenter />,
    title: "Car insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
},
{
    cardIcon: <GoFlame />,
    title: "Life insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
}, {
    cardIcon: <GiDiamondRing />,
    title: "Home insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
},
{
    cardIcon: <GiCommercialAirplane />,
    title: "Home insurance",
    description: "Lorem ipsum dolor sit amet, sed consectetur adipiscing rutrum metus et elit."
},

]