import React from 'react'
import Image from 'next/image'

function FeaturesTable({id,featureTxt,featuresIcons}) {
  return (
    <div key={id} className='flex justify-between'>
        <div className='mt-[8px]'>
            <h3 className='font-gilroymedium text-[#F8FAFC] text-[20px] leading-[28px] tracking-wide'>{featureTxt}</h3>
        </div>
        <div className='flex gap-[8px] mt-[8px]'>
            {
                featuresIcons.map((featureIcon,index)=>(
                    <div key={index} 
                    className={`${
                        {
                            'light-green': 'bg-[#ECFDF5] border-[#059669]',
                            'light-red': 'bg-[#FEF2F2] border-[#DC2626]',
                            'red': 'bg-[#DC2626] border-[#DC2626]',
                            'green': 'bg-[#10B981] border-[#DC2626]',
                        }[featureIcon[1]] || ''
                    } w-[232px] pt-[12px] pb-[16px] border`}>
                        <div className='w-[24px] m-auto'>
                            <Image src={featureIcon[0]} alt='feature-icon'/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturesTable
