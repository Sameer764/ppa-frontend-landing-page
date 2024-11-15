import React from 'react'
import { BeforeTransistion, AfterTransistion } from '@/Constants/MainPageConstants/TransistionSectionConstants'
import BeforeTransistionCard from '../TransistionCard/BeforeTransistionCard'
import AfterTransistionCard from '../TransistionCard/AfterTransistionCard'

function TransistionSection({navigateToBanner}) {
  return (
    <div className='lg:bg-[#F1F5F9] lg:px-[64px] lg:py-[60px] py-[40px] overflow-hidden'>
      <h1 className='lg:w-full w-[335px] lg:mx-0 mx-auto text-center lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide'>How We Help You In Transition</h1>
      <div className='lg:block flex gap-[11px] justify-center'>
        <div className='max-w-[1312px] mx-auto flex flex-col justify-center items-center lg:mt-[40px] mt-[20px]'>
          <h3 className='w-full ml-20 font-gilroybolditalic lg:text-[32px] lg:leading-[40px] text-[12px] leading-[14px] tracking-wide'>Before</h3>
          <div className='flex lg:flex-row flex-col lg:gap-[24px] gap-[20px] mt-[20px]'>
              {
                  BeforeTransistion.map((before)=>(
                      <BeforeTransistionCard key={before.id} {...before}/>
                  ))
              }
          </div>
        </div>
        <div className='max-w-[1312px] mx-auto flex flex-col lg:justify-center items-center lg:mt-[40px] mt-[20px]'>
          <h3 className='w-full ml-20 italic lg:text-[32px] lg:leading-[40px] text-[12px] leading-[14px] tracking-wide'>After</h3>
          <div className='flex lg:flex-row flex-col lg:gap-[24px] gap-[20px] mt-[20px]'>
              {
                  AfterTransistion.map((after)=>(
                      <AfterTransistionCard key={after.id} {...after}/>
                  ))
              }
          </div>
        </div>
      </div>
      <h1 className='text-center text-[48px] leading-[64px] tracking-wide mt-[40px] lg:block hidden'>Feeling Stuck Or Lost?</h1>
      <div className='text-center mt-[32px]'>
        <button onClick={navigateToBanner} className='hidden lg:block mx-auto  w-[250px] bg-[#3940A0] rounded-[10px] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>Consult Now !</button>
      </div>
    </div>
  )
}

export default TransistionSection
