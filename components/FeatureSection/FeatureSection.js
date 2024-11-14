import React from 'react'
import { Features } from '@/Constants/MainPageConstants/FeatureConstants'
import FeatureCard from '../FeatureCard/FeatureCard'

function FeatureSection() {
  return (
    <div className='text-center bg-[#F1F5F9] lg:px-[64px] lg:py-[60px] px-[20px] py-[40px]'>
      <h1 className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] text-[#231F20]'>Why Choose Our Courses?</h1>
      <div className='lg:mt-[40px] mt-[20px] flex flex-wrap lg:gap-[20px] gap-[12px] justify-center'>
        {
            Features.map((feature)=>(
                <FeatureCard key={feature.id} {...feature}/>
            ))
        }
      </div>
      <button className='w-[316px] mx-auto lg:mt-[40px] mt-[20px] py-[12px] bg-[#3940A0] text-[#ffffff] text-[16px] leading-[24px] rounded-[10px]'>Start 7-Days Free Trial</button>
    </div>
  )
}

export default FeatureSection
