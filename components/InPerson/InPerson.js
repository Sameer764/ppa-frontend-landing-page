import React from 'react'
import Image from 'next/image'
import ReviewImg from '../../public/resources/images/google-review-icon.png'

function InPerson() {
  return (
    <div className='bg-[#020617] flex lg:py-[20px] lg:justify-center justify-normal lg:p-[0px] p-[20px]'>
      <div className='flex flex-wrap'>
        <div className='lg:border-r lg:border-b-0 lg:border-[#cbd5e1] border-[#475569] lg:w-fit w-full border-b lg:pr-10 pr-0'>
            <h2 className='my-[12px] text-[#F8FAFC] text-center lg:text-[40px] lg:leading-[52px] text-[20px] leading-[28px] tracking-wide'>Since 2016</h2>
        </div>
        <div className='flex justify-center flex-wrap lg:gap-[60px] gap-x-[50px] gap-y-[20px] lg:mt-[0px] mt-[12px] lg:ml-[40px] ml-[0px] items-center'>
            <div  className='lg:w-[145px] w-[119px]'>
                <h2 className='text-[#F8FAFC] text-center lg:text-[40px] lg:leading-[48px] text-[20px] leading-[28px] tracking-wide'>16 LPA+</h2>
                <p className='lg:mt-[0px] mt-[4px] lg:font-gilroymedium font-gilroyregular text-[#F8FAFC] text-center lg:text-[16px] lg:leading-[24px] text-[12px] leading-[16px] tracking-wide text-center'>Avg CTC</p>
            </div>
            <div className='lg:w-[126px] w-[140px]'>
                <h2 className='text-[#F8FAFC] text-center lg:text-[40px] lg:leading-[48px] text-[20px] leading-[28px] tracking-wide'>300%</h2>
                <p className='lg:mt-[0px] mt-[4px] lg:font-gilroymedium font-gilroyregular text-[#F8FAFC] text-center lg:text-[16px] lg:leading-[24px] text-[12px] leading-[16px] tracking-wide text-center'>Avg Increment</p>
            </div>
            <div className='lg:w-[163px] w-[87px]'>
                <h2 className='text-[#F8FAFC] text-center lg:text-[40px] lg:leading-[48px] text-[20px] leading-[28px] tracking-wide'>20,000+</h2>
                <p className='lg:mt-[0px] mt-[4px] lg:font-gilroymedium font-gilroyregular text-[#F8FAFC] text-center lg:text-[16px] lg:leading-[24px] text-[11px] leading-[16px] tracking-wide text-center'>Student Taught</p>
            </div>
            <div className='lg:w-[179px] w-[156px]'>
                <Image src={ReviewImg} alt='review-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InPerson
