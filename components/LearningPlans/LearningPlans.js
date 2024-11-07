import React from 'react'
import PersonalisedBg from '../../resources/images/personalised-bg.png'
import { StepsData } from '@/Constants/MainPageConstants/LearningPlansConstants'
import StepCard from '../StepCard/StepCard'

function LearningPlans() {
  return (
    <div className='p-[100px]'>
        <h1 className='text-[48px] leading-[64px] tracking-wide text-center'>Personalized Learning Plans</h1>
        <div
        className="mt-[40px] bg-cover bg-center"
        style={{ backgroundImage: `url(${PersonalisedBg.src})` }}
        >
            {
                StepsData.map((stepdata)=>(
                    <StepCard {...stepdata}/>
                ))
            }
        </div>
    </div>
  )
}

export default LearningPlans
