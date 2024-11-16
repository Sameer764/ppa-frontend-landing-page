'use client'
import React from 'react'
import {Programs} from '../../Constants/MainPageConstants/ProgramConstants'
import ProgramCard from '../ProgramCard/ProgramCard'

function ProgramSection({navigateToBanner}) {
  return (
    <div className='bg-[#F1F5F9] lg:py-[60px] py-[40px] lg:px-[0px] px-[20px]'>
      <h1 className='text-nowrap text-center lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide text-[#020617]'>Choose Your Path To Success</h1>
      <p className='mt-[4px] lg:block hidden text-center text-[20px] leading-[28px] tracking-wide text-[#020617]'>Choose the learning path that best suits your goals.</p>
      <div className='flex flex-wrap lg:flex-nowrap justify-center gap-[24px] lg:mt-[40px] mt-[20px]'>
        {
            Programs.map((program)=>(
                <ProgramCard key={program.id} {...program}/>
            ))
        }
      </div>
      <div className='text-center'>
        <h1 className='mt-[40px] lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide text-[#020617]'>Not Sure Which Course To Choose?</h1>
        <button onClick={navigateToBanner} className="mt-[20px]  lg:w-[305px] w-full bg-[#3940A0] py-[12px] rounded-[10px] border-none text-[#FFFFFF] font-normal text-[16px] leading-[24px]">
          Book A Free Consultation Now
        </button>
      </div>
    </div>
  )
}

export default ProgramSection
