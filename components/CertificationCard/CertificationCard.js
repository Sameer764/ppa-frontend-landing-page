import React from 'react'
import Image from 'next/image'

function CertificationCard({id,courseImg,courseAlt,courseHead,courseEnrolled,courseRating,courseType}) {
  return (
    <div key={id} className='w-[421px] p-[12px] border border-[#E2E8F0] bg-[#ffffff] rounded-[20px]'>
      <div>
        <Image src={courseImg} alt={courseAlt}/>
      </div>
      <h3 className='mt-[20px] text-[#000000] text-[24px] leading-[32px] tracking-wide'>{courseHead}</h3>
      <div className='mt-[20px] flex gap-[20px]'>
        <div className='w-[58px]'>
            <Image src={courseEnrolled} alt={courseAlt}/>
        </div>
        <div className='w-[44px]'>
            <Image src={courseRating} alt={courseAlt}/>
        </div>
        <div className='w-[84px]'>
            <Image src={courseType} alt={courseAlt}/>
        </div>
      </div>
      <button className='mt-[20px] w-full py-[12px] text-center bg-[#3940A0] text-[#ffffff] rounded-[6px]'>Known more</button>
    </div>
  )
}

export default CertificationCard
