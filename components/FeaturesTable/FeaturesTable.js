import React from 'react'
import Image from 'next/image'

function FeaturesTable({id,featureTxt,featuresIcons}) {
  return (
    <div key={id} className='flex justify-between items-center'>
        <div className='mt-[8px] w-[130px] lg:w-[100%]'>
            <h3 className='lg:font-gilroymedium font-gilroysemibold text-[#F8FAFC] lg:text-[20px] lg:leading-[28px] text-[14px] leading-[16px] tracking-wide'>{featureTxt}</h3>
        </div>
        <div className='flex lg:gap-[8px] mt-[8px] gap-[61px]'>
            {
                featuresIcons.map((featureIcon,index)=>(
                    <div key={index} 
                    className={`${
                        {
                            'light-green': 'lg:bg-[#ECFDF5] lg:border-[#059669]',
                            'light-red': 'lg:bg-[#FEF2F2] lg:border-[#DC2626]',
                            'red': 'lg:bg-[#DC2626] lg:border-[#DC2626]',
                            'green': 'lg:bg-[#10B981] lg:border-[#DC2626]',
                        }[featureIcon[1]] || ''
                    } lg:w-[232px] w-[20px] pt-[12px] pb-[16px] lg:border`}>
                        <div className='w-[24px] lg:m-auto'>
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
