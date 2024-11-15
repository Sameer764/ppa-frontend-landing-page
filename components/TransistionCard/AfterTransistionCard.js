import React from 'react'
import Image from 'next/image'
import AfterTick from '../../public/resources/images/after-tick-img.png'

function AfterTransistionCard({id,AfterImg,AfterTxt}) {
    return (
      <div key={id} className='lg:w-[310px] w-[162px] bg-[#ffffff] lg:p-[20px] rounded-[20px]'>
        <div className='relative'>
          <div className='absolute lg:w-[40px] w-[17px] z-10'>
              <Image src={AfterTick} alt='after-tick'/>
          </div>
          <div className='lg:w-[251px] lg:h-[180px] w-[162px] h-[130px]'>
              <Image src={AfterImg} alt='after-img' fill style={{ objectFit: 'cover' }}/>
          </div>
        </div>
        <h3 className='font-gilroysemibold lg:mt-[20px] mt-[8px] text-[#020617] lg:text-[20px] lg:leading-[28px] text-[12px] leading-[14px] tracking-wide text-center'>{AfterTxt}</h3>
      </div>
    )
  }

export default AfterTransistionCard
