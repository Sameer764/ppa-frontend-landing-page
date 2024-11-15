import React from 'react'
import Image from 'next/image'
import UpArrow from '../../public/resources/images/up-arrow-white-icon.png'

function CertificationCard({id,courseImg,courseAlt,courseHead,courseEnrolled,courseRating,courseType}) {
  return (
    <div className='lg:w-[421px] w-full lg:p-[12px] p-[0px] lg:border lg:border-[#E2E8F0] lg:bg-[#ffffff] rounded-[20px]'>
      <div>
        <Image src={courseImg} alt={courseAlt}/>
      </div>
      <h3 className='lg:mt-[20px] mt-[12px] text-[#000000] lg:text-[24px] lg:leading-[32px] text-[20px] leading-[28px] tracking-wide'>{courseHead}</h3>
      <div className='lg:mt-[20px] mt-[12px] flex items-center gap-[20px]'>
        <div className='w-[58px]'>
            <Image src={courseEnrolled} alt={courseAlt}/>
        </div>
        <div className='w-[44px]'>
            <Image src={courseRating} alt={courseAlt}/>
        </div>
        <div className='w-[120px]'>
            <Image src={courseType} alt={courseAlt}/>
        </div>
      </div>
      <button className='flex items-center justify-center gap-[4px] lg:mt-[20px] mt-[12px] w-full py-[12px] text-center bg-[#3940A0] rounded-[6px]'>
        <span className='inline-block text-[#ffffff] text-[16px]  leading-[24px] tracking-wide'>Known more</span>
        <span className='inline-block'>
            <Image src={UpArrow} alt='up-arrow' width={24}/>
        </span>
      </button>
    </div>
  )
}

export default CertificationCard
