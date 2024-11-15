import React from 'react'
import Image from 'next/image'
import BannerImg from'../../public/resources/images/community-banner-img.png'

function CommunityBanner() {
  return (
    <div className='bg-[#F1F5F9] lg:py-[100px] py-[40px]'>
        <div className='bg-[#181B43] lg:py-[80px] py-[20px] px-[12px] rounded-[40px] flex flex-wrap justify-center items-center lg:gap-[60px] gap-[12px] lg:w-[1312px] w-[335px] mx-auto'>
            <div className='lg:w-[308px] w-[266px]'>
                <Image src={BannerImg} alt='banner-img'/>
            </div>
            <div className='lg:w-[690px] w-[311px]'>
                <h2 className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide text-[#ffffff]'>Learn for Free</h2>
                <h2 className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] text-nowrap tracking-wide text-[#ffffff]'>Crack Top Tech Companies</h2>
                <div className='flex flex-wrap gap-[12px] mt-[12px]'>
                    <div className='order-3 font-gilroymedium bg-[#f8fafc] lg:text-[16px] lg:leading-[24px] text-[12px] leading-[16px] lg:py-[12px] lg:px-[24px] py-[8px] px-[12px] rounded-[32px]'>
                         Daily DSA Problem Solving
                    </div>
                    <div className='order-1 font-gilroymedium bg-[#f8fafc] lg:text-[16px] lg:leading-[24px] text-[12px] leading-[16px] lg:py-[12px] lg:px-[24px] py-[8px] px-[12px] rounded-[32px]'>
                        Community Support
                    </div>
                    <div className='order-2 font-gilroymedium bg-[#f8fafc] lg:text-[16px] lg:leading-[24px] text-[12px] leading-[16px] lg:py-[12px] lg:px-[24px] py-[8px] px-[12px] rounded-[32px]'>
                        Earning Cool Rewards
                    </div>
                </div>
                <button className='mt-[40px] w-[160px] bg-[#3940a0] py-[12px] text-[#ffffff] rounded-[12px] lg:block hidden'>Join Now</button>
                <button className='mt-[40px] w-full bg-[#3940a0] py-[12px] text-[#ffffff] rounded-[12px] lg:hidden'>Join Our Community</button>
            </div>
        </div>
    </div>
  )
}

export default CommunityBanner
