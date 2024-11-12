import React from 'react'
import Image from 'next/image'
import BannerImg from'../../public/resources/images/community-banner-img.png'

function CommunityBanner() {
  return (
    <div className='bg-[#F1F5F9] py-[100px]'>
        <div className='bg-[#181B43] py-[80px] rounded-[40px] flex justify-center items-center gap-[60px] max-w-[1312px] mx-auto'>
            <div className='max-w-[232px] max-h-[232px]'>
                <Image src={BannerImg} alt='banner-img'/>
            </div>
            <div className='max-w-[690px]'>
                <h2 className='text-[48px] leading-[64px] tracking-wide text-[#ffffff]'>Learn for Free</h2>
                <h2 className='text-[48px] leading-[64px] tracking-wide text-[#ffffff]'>Crack Top Tech Companies</h2>
                <div className='flex gap-[12px] mt-[12px]'>
                    <div className='bg-[#f8fafc] py-[12px] px-[24px] rounded-[32px]'>
                         Daily DSA Problem Solving
                    </div>
                    <div className='bg-[#f8fafc] py-[12px] px-[24px] rounded-[32px]'>
                        Community Support
                    </div>
                    <div className='bg-[#f8fafc] py-[12px] px-[24px] rounded-[32px]'>
                        Earning Cool Rewards
                    </div>
                </div>
                <button className='mt-[40px] w-[160px] bg-[#3940a0] py-[12px] text-[#ffffff] rounded-[12px]'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default CommunityBanner
