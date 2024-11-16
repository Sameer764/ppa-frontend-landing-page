import React from 'react'
import PersonalisedBg from '../../public/resources/images/personalised-bg.png'
import { StepsData } from '@/Constants/MainPageConstants/LearningPlansConstants'
import StepCard from '../StepCard/StepCard'
import StepCardMobile from '../StepCardMobile/StepCardMobile'

function LearningPlans() {
  const filteredStepsData = StepsData.slice(0, 4);
  return (
    <div className='lg:px-[100px] lg:py-[100px] px-[20px] py-[40px] max-w-[1240px] mx-auto'>
        <h1 className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide text-center'>Personalized Learning Plans</h1>
        <div
        className="mt-[40px] p-[0] bg-cover bg-center lg:grid grid-rows-2 grid-cols-2 hidden justify-items-center"
        style={{ backgroundImage: `url(${PersonalisedBg.src})`,backgroundSize: 'cover',height: '763px'}}
        >
            {
                StepsData.map((stepdata)=>(
                    <StepCard key={stepdata.id} {...stepdata}/>
                ))
            }
        </div>
        <div className='mt-[20px] lg:hidden flex flex-col items-center gap-[12px]'>
          {
             filteredStepsData.map((step) => (
                  <StepCardMobile key={step.id} {...step} />
            ))
          }
        </div>
    </div>
  )
}

export default LearningPlans
