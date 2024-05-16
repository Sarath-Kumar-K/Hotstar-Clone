import React from 'react'

import disney from '../assets/images/disney.png'
import natgeo from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
import marvel from '../assets/images/marvel.png'

import disneyv from '../assets/videos/disney.mp4'
import natgeov from '../assets/videos/national-geographic.mp4'
import pixarv from '../assets/videos/pixar.mp4'
import starwarv from '../assets/videos/star-wars.mp4'
import marvelv from '../assets/videos/marvel.mp4'
// import { keyboard } from '@testing-library/user-event/dist/keyboard'


const ProductionHouse = () => {

    const prod =  [
        {
            name:"Disney",
            image:disney,
            video:disneyv
        },
        {
            name:"Pixar",
            image:pixar,
            video:pixarv
        },
        {
            name:"StarWar",
            image:starwar,
            video:starwarv
        },
        {
            name:"Marvel",
            image:marvel,
            video:marvelv
        },
        {
            name:"NatGeo",
            image:natgeo,
            video:natgeov
        },
    ]

  return (
    <div className='flex gap-5 md:gap-20 px-5 md:px-16 overflow-x-auto no-scrollbar scroll-smooth my-5'>
        {
            prod.map(item=>{
                return <div key={item.image} className='relative min-w-[200px] my-5 cursor-pointer rounded-md hover:scale-110 transition-all duration-500 ease-out hover:border-2 hover:border-blue-300 shadow-lg shadow-gray-500'>
                        <video src={item.video} className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-[50%]' autoPlay loop playsInline muted/>
                        <img src={item.image} className='z-[100]' alt=""/>
                    </div>
            })
        }
    </div>
  )
}

export default ProductionHouse