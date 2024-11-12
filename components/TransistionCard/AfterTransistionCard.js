import React from 'react'
import Image from 'next/image'
import AfterTick from '../../public/resources/images/after-tick-img.png'

function AfterTransistionCard({id,AfterImg,AfterTxt}) {
    return (
      <div key={id} className='w-[310px] bg-[#ffffff] p-[20px] rounded-[20px]'>
        <div className='relative'>
          <div className='absolute w-[40px]'>
              <Image src={AfterTick} alt='after-tick'/>
          </div>
          <div className='w-[251px] h-[180px]'>
              <Image src={AfterImg} alt='after-img' layout="fill"  objectFit="contain"/>
          </div>
        </div>
        <h3 className='mt-[20px] text-[#020617] text-[20px] leading-[28px] tracking-wide text-center'>{AfterTxt}</h3>
      </div>
    )
  }

export default AfterTransistionCard
