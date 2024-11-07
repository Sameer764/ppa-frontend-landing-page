import React from 'react'
import Image from 'next/image'
import ReviewImg from '../../resources/images/google-review-icon.png'

function InPerson() {
  return (
    <div className='bg-[#020617] flex justify-center py-[20px]'>
      <div className='flex flex-wrap'>
        <div className='border-r pr-10'>
            <h2 className='my-[10px] text-[#F8FAFC] text-[40px] leading-[52px] tracking-wide'>Since 2016</h2>
        </div>
        <div className='flex flex-wrap gap-[60px] ml-[40px] items-center'>
            <div>
                <h2 className='text-[#F8FAFC] text-[40px] leading-[48px] tracking-wide'>16 LPA+</h2>
                <p className='text-[#F8FAFC] text-[16px] leading-[24px] tracking-wide text-center'>Avg CTC</p>
            </div>
            <div>
                <h2 className='text-[#F8FAFC] text-[40px] leading-[48px] tracking-wide'>300%</h2>
                <p className='text-[#F8FAFC] text-[16px] leading-[24px] tracking-wide text-center'>Avg Increment</p>
            </div>
            <div>
                <h2 className='text-[#F8FAFC] text-[40px] leading-[48px] tracking-wide'>20,000+</h2>
                <p className='text-[#F8FAFC] text-[16px] leading-[24px] tracking-wide text-center'>Student Taught</p>
            </div>
            <div className='w-[179px]'>
                <Image src={ReviewImg} alt='review-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InPerson
