'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import youtubeImg1 from '../../public/resources/images/youtube-img-1.png'
import youtubeImg2 from '../../public/resources/images/youtube-img-2.png'
import youtubeImg3 from '../../public/resources/images/youtube-img-3.png'
import youtubeImg4 from '../../public/resources/images/youtube-img-4.png'
import youtubeImg5 from '../../public/resources/images/youtube-img-5.png'

function YoutubeSection() {
  let settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 9000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#f1f5f9] py-[60px]'>
      <div className='max-w-[1312px] mx-auto'>
        <div className='flex justify-between max-w-[1312px]'>
          <h1 className='text-[48px] leading-[64px] tracking-wide max-w-[636px]'>Watch Free Videos on our YouTube Channel</h1>
          <button className='w-[348px] h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Visit our Youtube Channel</button>
        </div>
        <div className='slider-container mt-[40px]'>
          <Slider {...settings}>
            <div className='w-[400px]'>
                <Image src={youtubeImg1} alt='youtube-img-1'/>
            </div>
            <div>
                <Image src={youtubeImg2} alt='youtube-img-2'/>
            </div>
            <div>
                <Image src={youtubeImg3} alt='youtube-img-3'/>
            </div>
            <div>
                <Image src={youtubeImg4} alt='youtube-img-4'/>
            </div>
            <div>
                <Image src={youtubeImg5} alt='youtube-img-5'/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default YoutubeSection
