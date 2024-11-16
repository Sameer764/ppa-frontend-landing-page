'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import youtubeImg1 from '../../public/resources/images/youtube-img-1.png'
import youtubeImg2 from '../../public/resources/images/youtube-img-2.png'
import youtubeImg3 from '../../public/resources/images/youtube-img-3.png'
import youtubeImg4 from '../../public/resources/images/youtube-img-4.png'
import youtubeImg5 from '../../public/resources/images/youtube-img-5.png'
import NextArrow from '../SliderArrows/NextArrow';
import PrevArrow from '../SliderArrows/PrevArrow';

function YoutubeSection() {
  let settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    // cssEase: "linear",
    nextArrow: <NextArrow top={-55} right={0}/>,
    prevArrow: <PrevArrow top={-55} right={13}/>,

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
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#f1f5f9] lg:py-[60px] lg:px-0 py-[40px] px-[20px]'>
      <div className='max-w-[1312px] mx-auto'>
        <div className='flex justify-between max-w-[1312px]'>
          <h1 className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide max-w-[239px] lg:max-w-[636px]'>Watch Free Videos on our YouTube Channel</h1>
          <button className='lg:block hidden w-[348px] h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Visit our Youtube Channel</button>
        </div>
        <div className='youtube-slider-container mt-[40px] relative'>
          <Slider {...settings} className='relative'>
            <div>
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
        <button className='mx-auto lg:hidden block lg:w-[348px] w-full h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Subscribe to our Youtube Channel</button>
      </div>
    </div>
  )
}

export default YoutubeSection
