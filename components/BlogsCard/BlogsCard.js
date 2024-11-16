import React from 'react'
import Image from 'next/image'

function BlogsCard({id,blogImg,blogHead,blogPara,blogProfile,blogAuthor,blogTimeline}) {
  return (
    <div className='relative top-0 lg:w-[421px] w-full lg:p-[12px] lg:border lg:border-[#e2e8f0] rounded-[20px]'>
      <div className='lg:max-w-[397px] max-w-[335px] lg:h-[228px]'>
        <Image src={blogImg} alt='blog-img'/>
      </div>
      <h3 className='lg:mt-[12px] mt-[20px] lg:text-[24px] lg:leading-[32px] text-[20px] leading-[28px] tracking-wide'>{blogHead}</h3>
      <p className='font-gilroyregular mt-[8px] text-[16px] leading-[24px] tracking-wide text-[#4b5768]'>{blogPara}</p>
      <div className='flex items-center gap-[12px] lg:mt-[20px] mt-[12px]'>
        <div className='w-[40px]'>
            <Image src={blogProfile} alt='blog-profile'/>
        </div>
        <div>
            <h4 className='text-[14px] leading-[20px] tracking-wide'>{blogAuthor}</h4>
            <p className='text-[#4b5768] text-[14px] leading-[20px] tracking-wide'>{blogTimeline}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogsCard
