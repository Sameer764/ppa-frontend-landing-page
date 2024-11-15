import React from 'react'
import Image from 'next/image'
import PpaIcon from '../../public/resources/images/ppa-icon-img.png'
import YoutubeIcon from '../../public/resources/images/youtube-icon-img.png'
import { FeaturesData } from '@/Constants/MainPageConstants/YoutubeVsPpaConstants'
import FeaturesTable from '../FeaturesTable/FeaturesTable'

function YoutubeVsPpa() {
  return (
    <div className='bg-[#181B43] lg:p-[100px] py-[40px] px-[20px]'>
        <div className='flex justify-center items-center lg:gap-[40px] gap-[4px] flex-col lg:flex-row'>
            <div className='flex items-center justify-center lg:gap-[24px] gap-[13px]'>
                <div className='lg:w-[64px] w-[35px]'>
                    <Image src={PpaIcon} alt='ppa-icon'/>
                </div>
                <h1 className='text-[#F8FAFC] lg:text-[33px] lg:leading-[42px] text-[18px] leading-[23px] tracking-wide'>Programming Pathshala</h1>
            </div>
            <h1 className='text-[#F8FAFC] lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide'>Vs</h1>
            <div className='flex items-center justify-center gap-[12px]'>
                <div className='lg:w-[56px] w-[24px]'>
                    <Image src={YoutubeIcon} alt='youtube-icon'/>
                </div>
                <h1 className='text-[#F8FAFC] lg:text-[40px] lg:leading-[52px] text-[24px] leading-[32px] tracking-wide'>Youtube /Other Platform</h1>
            </div>
        </div>
        <div className='mt-[40px]'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <h3 className='text-[#F8FAFC] lg:text-[20px] lg:leading-[28px] text-[16px] leading-[24px] tracking-wide'>FEATURES</h3>
                </div>
                <div className='flex gap-[8px] mt-[8px] items-center'>
                    <div className='flex lg:gap-[12px] gap-[4px] justify-center items-center lg:w-[232px] pt-[12px] pb-[16px]'>
                        <div className='w-[24px]'>
                            <Image src={YoutubeIcon} alt='youtube-icon'/>
                        </div>
                        <h3 className='text-[#F8FAFC] lg:text-[20px] lg:leading-[28px] text-[14px] leading-[20px] tracking-wide'>Youtube</h3>
                    </div>
                    <div className='flex justify-center lg:w-[232px] pt-[12px] pb-[16px]'>
                        <h3 className='text-[#F8FAFC] lg:text-[20px] lg:leading-[28px] text-[14px] leading-[20px] tracking-wide'>Other Platform</h3>
                    </div>
                    <div className='lg:flex gap-[12px] justify-center items-center lg:w-[232px] pt-[12px] pb-[16px] hidden'>
                        <div className='w-[24px]'>
                            <Image src={PpaIcon} alt='ppa-icon'/>
                        </div>
                        <h3 className='text-[#F8FAFC] text-[15px] leading-[18px] tracking-wide'>Programming Pathshala</h3>
                    </div>
                    <h3 className='text-[#F8FAFC] text-[14px] leading-[20px] tracking-wide lg:hidden block'>PPA</h3>
                </div>
            </div>
            <div className='mt-[12px]'>
                {
                    FeaturesData.map((feature)=>(
                        <FeaturesTable key={feature.id} {...feature}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default YoutubeVsPpa
