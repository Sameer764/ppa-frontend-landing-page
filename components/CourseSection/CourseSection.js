import React from 'react'
import {Courses} from '../../Constants/MainPageConstants/CourseConstants'
import CertificationCard from '../CertificationCard/CertificationCard'

function CourseSection() {
  return (
    <div className='flex flex-col items-center lg:px-[64px] lg:py-[60px] px-[20px] py-[40px] bg-[#F1F5F9]'>
      <div className='max-w-[1440px] mx-auto'>
        <h1 className='text-[#020617] lg:text-[48px] lg:leading-[64px] text-center text-[24px] leading-[32px] tracking-wide'>Certification Courses</h1>
        <p className=' mt-[12px] lg:text-[20px] lg:leading-[28px] text-[14px] leading-[20px] text-center text-[#020617] tracking-wide font-gilroyregular'>Earn Industry-Recognized Certifications to Boost and Advance Your Career</p>
        <div className='lg:mt-[40px] mt-[20px] flex flex-wrap lg:gap-[24px] gap-[40px] justify-center'>
            {
                Courses.map((course)=>(
                    <CertificationCard key={course.id} {...course}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default CourseSection
