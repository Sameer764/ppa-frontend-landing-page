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
import FlexibleLink from '../FlexibleLink/FlexibleLink';

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
          <FlexibleLink href={`https://www.youtube.com/@ProgrammingPathshala`}>
            <button className='lg:block hidden w-[348px] h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Visit our Youtube Channel</button>
          </FlexibleLink>
        </div>
        <div className='youtube-slider-container mt-[40px] relative'>
          <Slider {...settings} className='relative'>
            <div className='border-none'>
              <FlexibleLink href={'https://www.youtube.com/watch?v=5eu0PAX__Gc&list=PL8ALCSKTY-0trtGwo1v823v9VeJZTsb12&index=31'}>
                <Image src={youtubeImg1} alt='youtube-img-1'/>
              </FlexibleLink>
            </div>
            <div className='border-none'>
              <FlexibleLink href={'https://www.youtube.com/watch?v=0dP3nFlsXsY&list=PL8ALCSKTY-0trtGwo1v823v9VeJZTsb12&index=21'}>
                <Image src={youtubeImg2} alt='youtube-img-2'/>
              </FlexibleLink>
            </div>
            <div className='border-none'>
              <FlexibleLink href={'https://www.youtube.com/watch?v=Je4AuyryI5I&list=PL8ALCSKTY-0uLZeyhD35lv9FS0kVbMiGB&index=1'}>
                <Image src={youtubeImg3} alt='youtube-img-3'/>
              </FlexibleLink>
            </div>
            <div className='border-none'>
              <FlexibleLink href={'https://www.youtube.com/watch?v=8rmngl9sqrM&list=PL8ALCSKTY-0sAuIkcGZsO-ZL6JjzV0nqu'}>
                <Image src={youtubeImg4} alt='youtube-img-4'/>
              </FlexibleLink>
            </div>
            <div className='border-none'>
              <FlexibleLink href={'https://www.youtube.com/watch?v=5z0L6m1QKNg'}>
                <Image src={youtubeImg5} alt='youtube-img-5'/>
              </FlexibleLink>
            </div>
          </Slider>
        </div>
        <FlexibleLink href={`https://www.youtube.com/@ProgrammingPathshala`}>
          <button className='mx-auto lg:hidden block lg:w-[348px] w-full h-[48px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide py-[12px] bg-[#dc2626] text-center rounded-[10px]'>Subscribe to our Youtube Channel</button>
        </FlexibleLink>
      </div>
    </div>
  )
}

export default YoutubeSection
