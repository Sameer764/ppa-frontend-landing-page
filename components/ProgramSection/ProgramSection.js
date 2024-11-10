import React from 'react'
import {Programs} from '../../Constants/MainPageConstants/ProgramConstants'
import ProgramCard from '../ProgramCard/ProgramCard'

function ProgramSection() {
  return (
    <div className='bg-[#F1F5F9] py-[60px]'>
      <h1 className='text-center text-[48px] leading-[64px] tracking-wide text-[#020617]'>Choose Your Path To Success</h1>
      <p className='mt-[4px] text-center text-[20px] leading-[28px] tracking-wide text-[#020617]'>Choose the learning path that best suits your goals.</p>
      <div className='flex justify-center gap-[24px] mt-[40px]'>
        {
            Programs.map((program)=>(
                <ProgramCard key={program.id} {...program}/>
            ))
        }
      </div>
      <div className='text-center'>
        <h1 className='mt-[40px] text-[48px] leading-[64px] tracking-wide text-[#020617]'>Not Sure Which Course To Choose?</h1>
        <button className="mt-[20px]  w-[305px] bg-[#3940A0] py-[12px] rounded-[10px] border-none text-[#FFFFFF] font-normal text-[16px] leading-[24px]">
          Book A Free Consultation
        </button>
      </div>
    </div>
  )
}

export default ProgramSection
