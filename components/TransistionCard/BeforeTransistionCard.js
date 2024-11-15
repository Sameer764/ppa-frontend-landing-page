import React from 'react'
import Image from 'next/image'
import BeforeCross from '../../public/resources/images/before-cross-icon.png'

function BeforeTransistionCard({id,BeforeImg,BeforeTxt}) {
  return (
    <div className='lg:w-[310px] w-[162px] bg-[#ffffff] lg:p-[20px] rounded-[20px]'>
      <div className='relative'>
        <div className='absolute lg:w-[40px] w-[17px] z-10'>
            <Image src={BeforeCross} alt='before-cross'/>
        </div>
        <div className='lg:w-[251px] lg:h-[180px] w-[162px] h-[130px]'>
            <Image src={BeforeImg} alt='before-img' fill style={{ objectFit: 'cover' }}/>
        </div>
      </div>
      <h3 className='font-gilroysemibold lg:mt-[20px] mt-[8px] text-[#020617] lg:text-[20px] lg:leading-[28px] text-[12px] leading-[14px] tracking-wide text-center'>{BeforeTxt}</h3>
    </div>
  )
}

export default BeforeTransistionCard
