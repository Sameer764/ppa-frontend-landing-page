import React from 'react'
import Image from 'next/image'
import StudentRatingImg from '../../resources/images/stories-rating-img.png'
import StudentReviewImg from '../../resources/images/stories-review-img.png'
import { StoriesStudents } from '@/Constants/MainPageConstants/StoriesConstants'
import StoryCard from '../StoryCard/StoryCard'

function StoriesSection() {
  return (
    <div className='bg-[#F1F5F9] py-[60px]'>
      <div className='flex justify-between max-w-[1312px] mx-auto'>
        <div>
            <h1 className='text-[#000000] text-[48px] leading-[64px] tracking-wide'>They did it so can you</h1>
            <div className='flex gap-[12px] items-center mt-[20px]'>
                <div className='w-[168px]'>
                    <Image src={StudentReviewImg} alt='student-review-img'/>
                </div>
                <div className='w-[189px]'>
                    <Image src={StudentRatingImg} alt='rating-img'/>
                </div>
            </div>
        </div>
        <div>
            <button className='w-[228px] bg-[#020617] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide rounded-[12px]'>Read More Stories</button>
        </div>
      </div>
      <div className='mt-[40px] flex flex-wrap justify-center gap-[24px]'>
            {
                StoriesStudents.map((student)=>(
                    <StoryCard {...student}/>
                ))
            }
       </div>
    </div>
  )
}

export default StoriesSection
