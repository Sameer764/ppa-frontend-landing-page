import React from 'react'
import Image from 'next/image'
import StudentRatingImg from '../../public/resources/images/stories-rating-img.png'
import StudentReviewImg from '../../public/resources/images/stories-review-img.png'
import { StoriesStudents } from '@/Constants/MainPageConstants/StoriesConstants'
import StoryCard from '../StoryCard/StoryCard'
import UpArrow from '../../public/resources/images/up-arrow-white-icon.png'

function StoriesSection() {
  const MobileStoriesStudentsData = StoriesStudents.slice(0, 4);

  const columns = [[], [], []];

  StoriesStudents.forEach((student, index) => {
    columns[index % 3].push(student);
  });

  return (
    <div className='bg-[#F1F5F9] lg:py-[60px] lg:px-0 py-[40px]'>
      <div className='lg:flex lg:justify-between max-w-[1312px] mx-auto'>
        <div>
            <h1 className='text-center lg:text-start text-[#000000] lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide'>They did it so can you</h1>
            <div className='flex lg:gap-[12px] lg:justify-start justify-evenly items-center mt-[20px]'>
                <div className='lg:w-[168px] w-[120px]'>
                    <Image src={StudentReviewImg} alt='student-review-img'/>
                </div>
                <div className='w-[189px]'>
                    <Image src={StudentRatingImg} alt='rating-img'/>
                </div>
            </div>
        </div>
        <div>
            <button className='lg:flex hidden justify-center gap-[4px] items-center w-[228px] bg-[#020617] py-[12px] rounded-[12px]'>
              <span className='inline-block text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>
                Read More Stories
              </span>
              <span className='inline-block'>
                  <Image src={UpArrow} alt='up-arrow' width={24}/>
              </span>
            </button>
        </div>
      </div>
      <div className="mt-[40px] lg:flex hidden justify-center gap-[24px] max-w-[1312px] mx-auto">
        <div className="flex flex-col gap-[24px]">
          {columns[0].map((student) => (
            <StoryCard key={student.id} {...student} />
          ))}
        </div>

        <div className="flex flex-col gap-[24px]">
          {columns[1].map((student) => (
            <StoryCard key={student.id} {...student} />
          ))}
        </div>

        <div className="flex flex-col gap-[24px]">
          {columns[2].map((student) => (
            <StoryCard key={student.id} {...student} />
          ))}
        </div>
      </div>
      <div className='mt-[20px] lg:hidden flex flex-col items-center gap-[12px]'>
        {
          MobileStoriesStudentsData.map((student)=>(
            <StoryCard key={student.id} {...student} />
          ))
        }
      </div>
      <div className='lg:hidden px-[20px]'>
        <button className='mt-[20px] flex justify-center gap-[4px] items-center w-full bg-[#020617] py-[12px] rounded-[12px]'>
            <span className='inline-block text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>
              Read More Stories
            </span>
            <span className='inline-block'>
                <Image src={UpArrow} alt='up-arrow' width={24}/>
            </span>
        </button>
      </div>
    </div>
  )
}

export default StoriesSection
