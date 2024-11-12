import React from 'react'
import PersonalisedBg from '../../public/resources/images/personalised-bg.png'
import { StepsData } from '@/Constants/MainPageConstants/LearningPlansConstants'
import StepCard from '../StepCard/StepCard'

function LearningPlans() {
  return (
    <div className='p-[100px]'>
        <h1 className='text-[48px] leading-[64px] tracking-wide text-center'>Personalized Learning Plans</h1>
        <div
        className="mt-[40px] p-[0] bg-cover grid grid-rows-2 grid-cols-2 justify-items-center"
        style={{ backgroundImage: `url(${PersonalisedBg.src})`,backgroundSize: 'cover',height: '652px'}}
        >
            {
                StepsData.map((stepdata)=>(
                    <StepCard key={stepdata.id} {...stepdata}/>
                ))
            }
        </div>
    </div>
  )
}

export default LearningPlans
