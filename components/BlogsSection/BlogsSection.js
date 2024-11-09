import React from 'react'
import {BlogsData} from '../../Constants/MainPageConstants/BlogsSectionConstants'
import BlogsCard from '../BlogsCard/BlogsCard'

function BlogsSection() {
  return (
    <div className='py-[60px]'>
      <div className='flex justify-between max-w-[1312px] mx-auto'>
        <h1 className='max-w-[711px] text-[48px] leading-[64px] tracking-wide'>Your Go-To Blog for Tech, Career Growth, and Learning</h1>
        <button className='w-[193px] h-[48px] bg-[#020617] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide rounded-[12px]'>Read More Blogs</button>
      </div>
      <div className='mt-[40px] flex flex-wrap justify-center gap-[24px]'>
        {
            BlogsData.map((blogdata)=>(
                <BlogsCard {...blogdata}/>
            ))
        }
      </div>
    </div>
  )
}

export default BlogsSection
