import React from 'react'
import Image from 'next/image'

function BlogsCard({id,blogImg,blogHead,blogPara,blogProfile,blogAuthor,blogTimeline}) {
  return (
    <div className='w-[421px] p-[12px] border border-[#e2e8f0] rounded-[20px]'>
      <div className='w-[397px] h-[228px]'>
        <Image src={blogImg} alt='blog-img'/>
      </div>
      <h3 className='mt-[12px] text-[24px] leading-[32px] tracking-wide'>{blogHead}</h3>
      <p className='mt-[8px] text-[16px] leading-[24px] tracking-wide text-[#4b5768]'>{blogPara}</p>
      <div className='flex items-center gap-[12px] mt-[20px]'>
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
