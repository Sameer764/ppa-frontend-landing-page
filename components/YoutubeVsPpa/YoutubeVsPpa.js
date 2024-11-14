import React from 'react'
import Image from 'next/image'
import PpaIcon from '../../public/resources/images/ppa-icon-img.png'
import YoutubeIcon from '../../public/resources/images/youtube-icon-img.png'
import { FeaturesData } from '@/Constants/MainPageConstants/YoutubeVsPpaConstants'
import FeaturesTable from '../FeaturesTable/FeaturesTable'

function YoutubeVsPpa() {
  return (
    <div className='bg-[#181B43] p-[100px]'>
        <div className='flex justify-center items-center gap-[40px]'>
            <div className='flex items-center justify-center gap-[24px]'>
                <div className='w-[64px]'>
                    <Image src={PpaIcon} alt='ppa-icon'/>
                </div>
                <h1 className='text-[#F8FAFC] text-[33px] leading-[42px] tracking-wide'>Programming Pathshala</h1>
            </div>
            <h1 className='text-[#F8FAFC] text-[48px] leading-[64px] tracking-wide'>Vs</h1>
            <div className='flex items-center justify-center gap-[12px]'>
                <div className='w-[56px]'>
                    <Image src={YoutubeIcon} alt='youtube-icon'/>
                </div>
                <h1 className='text-[#F8FAFC] text-[40px] leading-[52px] tracking-wide'>Youtube /Other Platform</h1>
            </div>
        </div>
        <div className='mt-[40px]'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <h3 className='text-[#F8FAFC] text-[20px] leading-[28px] tracking-wide'>FEATURES</h3>
                </div>
                <div className='flex gap-[8px] mt-[8px] items-center'>
                    <div className='flex gap-[12px] justify-center items-center w-[232px] pt-[12px] pb-[16px]'>
                        <div className='w-[24px]'>
                            <Image src={YoutubeIcon} alt='youtube-icon'/>
                        </div>
                        <h3 className='text-[#F8FAFC] text-[20px] leading-[28px] tracking-wide'>Youtube</h3>
                    </div>
                    <div className='flex justify-center w-[232px] pt-[12px] pb-[16px]'>
                        <h3 className='text-[#F8FAFC] text-[20px] leading-[28px] tracking-wide'>Other Platform</h3>
                    </div>
                    <div className='flex gap-[12px] justify-center items-center w-[232px] pt-[12px] pb-[16px]'>
                        <div className='w-[24px]'>
                            <Image src={PpaIcon} alt='ppa-icon'/>
                        </div>
                        <h3 className='text-[#F8FAFC] text-[15px] leading-[18px] tracking-wide'>Programming Pathshala</h3>
                    </div>
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
