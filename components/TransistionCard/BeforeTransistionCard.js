import React from 'react'
import Image from 'next/image'
import BeforeCross from '../../public/resources/images/before-cross-icon.png'

function BeforeTransistionCard({id,BeforeImg,BeforeTxt}) {
  return (
    <div key={id} className='w-[310px] bg-[#ffffff] p-[20px] rounded-[20px]'>
      <div className='relative'>
        <div className='absolute w-[40px]'>
            <Image src={BeforeCross} alt='before-cross'/>
        </div>
        <div className='w-[251px] h-[180px]'>
            <Image src={BeforeImg} alt='before-img' layout="fill"  objectFit="contain"/>
        </div>
      </div>
      <h3 className='m  t-[20px] text-[#020617] text-[20px] leading-[28px] tracking-wide text-center'>{BeforeTxt}</h3>
    </div>
  )
}

export default BeforeTransistionCard
