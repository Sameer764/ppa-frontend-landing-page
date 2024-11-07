import React from 'react'
import { BeforeTransistion, AfterTransistion } from '@/Constants/MainPageConstants/TransistionSectionConstants'
import BeforeTransistionCard from '../TransistionCard/BeforeTransistionCard'
import AfterTransistionCard from '../TransistionCard/AfterTransistionCard'

function TransistionSection() {
  return (
    <div className='bg-[#F1F5F9] px-[64px] py-[60px]'>
      <h1 className='text-center text-[48px] leading-[64px] tracking-wide'>How We Help You In Transition</h1>
      <div className='flex flex-col justify-center items-center mt-[40px]'>
        <h3 className='w-full ml-20 italic text-[32px] leading-[40px] tracking-wide'>Before</h3>
        <div className='flex flex-wrap gap-[24px] mt-[20px]'>
            {
                BeforeTransistion.map((before)=>(
                    <BeforeTransistionCard {...before}/>
                ))
            }
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-[40px]'>
        <h3 className='w-full ml-20 italic text-[32px] leading-[40px] tracking-wide'>After</h3>
        <div className='flex flex-wrap gap-[24px] mt-[20px]'>
            {
                AfterTransistion.map((after)=>(
                    <AfterTransistionCard {...after}/>
                ))
            }
        </div>
      </div>
      <h1 className='text-center text-[48px] leading-[64px] tracking-wide mt-[40px]'>Feeling Stuck Or Lost?</h1>
      <div className='text-center mt-[32px]'>
        <button className='w-[250px] bg-[#3940A0] rounded-[10px] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>Consult Now !</button>
      </div>
    </div>
  )
}

export default TransistionSection
