'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import youtubeImg1 from '../../public/resources/images/youtube-img-1.png'
import youtubeImg2 from '../../public/resources/images/youtube-img-2.png'
import youtubeImg3 from '../../public/resources/images/youtube-img-3.png'
import youtubeImg4 from '../../public/resources/images/youtube-img-4.png'
import youtubeImg5 from '../../public/resources/images/youtube-img-5.png'

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

function YoutubeSection() {
  return (
    <div className='bg-[#f1f5f9] py-[60px] px-[64px]'>
      <div className='flex justify-between'>
        <h1 className='text-[48px] leading-[64px] tracking-wide max-w-[636px]'>Watch Free Videos on our YouTube Channel</h1>
        <button className='w-[348px] h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Visit our Youtube Channel</button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper mt-[40px]"
      >
        <SwiperSlide>
            <div className='w-[510px]'>
                <Image src={youtubeImg1} alt='youtube-img-1'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[510px]'>
                <Image src={youtubeImg2} alt='youtube-img-2'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[510px]'>
                <Image src={youtubeImg3} alt='youtube-img-3'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[510px]'>
                <Image src={youtubeImg4} alt='youtube-img-4'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[510px]'>
                <Image src={youtubeImg5} alt='youtube-img-5'/>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default YoutubeSection
