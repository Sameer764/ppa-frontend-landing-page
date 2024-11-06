import React from 'react'
import {Courses} from '../../Constants/MainPageConstants/CourseConstants'
import CertificationCard from '../CertificationCard/CertificationCard'

function CourseSection() {
  return (
    <div className='flex flex-col items-center px-[64px] py-[60px] bg-[#F1F5F9]'>
        <h1 className='text-[#020617] text-[48px] leading-[64px] tracking-wide'>Certification Courses</h1>
        <p className='mt-[12px]'>Earn Industry-Recognized Certifications to Boost and Advance Your Career</p>
        <div className='mt-[40px] flex flex-wrap gap-[24px] justify-center'>
            {
                Courses.map((course)=>(
                    <CertificationCard {...course}/>
                ))
            }
        </div>
    </div>
  )
}

export default CourseSection
