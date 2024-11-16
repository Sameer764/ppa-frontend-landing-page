'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BlogsData} from '../../Constants/MainPageConstants/BlogsSectionConstants'
import BlogsCard from '../BlogsCard/BlogsCard'
import Slider from "react-slick";
import NextArrow from '../SliderArrows/NextArrow';
import PrevArrow from '../SliderArrows/PrevArrow';

function BlogsSection() {
  let settings2 = {
    dots: false,
    infinite: true,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow top={-25} right={0}/>,
    prevArrow: <PrevArrow top={-25} right={13}/>,
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
    <div className='relative lg:py-[60px] lg:px-0 py-[40px] px-[20px]'>
      <div className='flex justify-between max-w-[1312px] mx-auto lg:px-0'>
        <h1 className='lg:max-w-[711px] max-w-[259px] lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide'>Your Go-To Blog for Tech, Career Growth, and Learning</h1>
        <button className='lg:block hidden w-[193px] h-[48px] bg-[#020617] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide rounded-[12px]'>Read More Blogs</button>
      </div>
      <div className='mt-[40px] md:flex flex-wrap justify-center gap-[24px] hidden'>
        {
            BlogsData.map((blogdata)=>(
                <BlogsCard key={blogdata.id} {...blogdata}/>
            ))
        }
      </div>
      <div className='mt-[20px] max-w-[500px] mx-auto md:hidden block relative top-0'>
        <Slider {...settings2}>
            {
                BlogsData.map((blogdata)=>(
                    <BlogsCard key={blogdata.id} {...blogdata}/>
                ))
            }
        </Slider>
      </div>
      <div className='px-[12px] lg:hidden block'>
        <button className='mt-[20px] lg:w-[193px] w-full h-[48px] bg-[#020617] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide rounded-[12px]'>Read More Blogs</button>
      </div>
    </div>
  )
}

export default BlogsSection
