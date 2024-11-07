import React from 'react'

function StepCard({id,stepNo,stepClass,stepDesc}) {
  return (
    <div key={id} className={`${stepClass} w-[313px]`}>
        <h3 className='py-[8px] pl-[20px]'>{stepNo}</h3>
        <ul>
            {
                stepDesc.map((desc)=>(
                    <li>{desc}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default StepCard
