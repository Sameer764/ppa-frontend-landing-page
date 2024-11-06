import React from 'react'
import { Features } from '@/Constants/MainPageConstants/FeatureConstants'
import FeatureCard from '../FeatureCard/FeatureCard'

function FeatureSection() {
  return (
    <div className='text-center bg-[#F1F5F9] px-[64px] py-[60px]'>
      <h1 className='text-[48px] leading-[64px] text-[#231F20]'>Why Choose Our Course?</h1>
      <div className='mt-[40px] flex flex-wrap gap-[20px] justify-center'>
        {
            Features.map((feature)=>(
                <FeatureCard {...feature}/>
            ))
        }
      </div>
      <button className='w-[316px] mx-auto mt-[40px] py-[12px] bg-[#3940A0] text-[#ffffff] text-[16px] leading-[24px] rounded-[10px]'>Start 7-Days Free Trial</button>
    </div>
  )
}

export default FeatureSection
